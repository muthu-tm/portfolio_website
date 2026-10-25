/**
 * Static pre-rendering for AI-parseability.
 *
 * The app is a client-side React SPA, so the shipped index.html is empty until
 * JavaScript runs. Crawlers and LLM fetchers that do not execute JS see nothing.
 *
 * This script serves the production `dist/` build, drives a headless Chrome over
 * each route, and writes the fully-rendered HTML back to disk. The result:
 *   - dist/index.html            (Home, with real content baked in)
 *   - dist/experience/index.html
 *   - dist/works/index.html
 *   - dist/contact/index.html
 *
 * Users still get the hydrated SPA; machines get readable HTML + the JSON-LD
 * structured data already present in the document head.
 */
import { createServer } from 'node:http';
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { join, extname, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawn, spawnSync } from 'node:child_process';
import { tmpdir } from 'node:os';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST = join(__dirname, '..', 'dist');
const PORT = 4321;
const ROUTES = ['/', '/experience', '/works', '/contact'];

const MIME = {
  '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css',
  '.json': 'application/json', '.svg': 'image/svg+xml', '.png': 'image/png',
  '.jpg': 'image/jpeg', '.woff2': 'font/woff2', '.ico': 'image/x-icon',
};

function findChrome() {
  const candidates = [
    '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    '/Applications/Chromium.app/Contents/MacOS/Chromium',
    '/usr/bin/google-chrome',
    '/usr/bin/chromium',
    '/usr/bin/chromium-browser',
  ];
  for (const c of candidates) if (existsSync(c)) return c;
  // Fall back to PATH lookup.
  const which = spawnSync('which', ['google-chrome', 'chromium', 'chromium-browser']);
  const found = which.stdout?.toString().trim().split('\n').filter(Boolean)[0];
  return found || null;
}

// Minimal static file server for dist/ (SPA fallback to index.html).
function startServer() {
  return new Promise((resolve) => {
    const server = createServer(async (req, res) => {
      try {
        let urlPath = decodeURIComponent(req.url.split('?')[0]);
        let filePath = join(DIST, urlPath);
        if (urlPath === '/' || !extname(filePath)) filePath = join(DIST, 'index.html');
        const data = await readFile(filePath).catch(() => readFile(join(DIST, 'index.html')));
        const ext = extname(filePath) || '.html';
        res.writeHead(200, { 'Content-Type': MIME[ext] || 'application/octet-stream' });
        res.end(data);
      } catch {
        res.writeHead(404);
        res.end('not found');
      }
    });
    server.listen(PORT, () => resolve(server));
  });
}

// Run Chrome --dump-dom with a hard timeout. Newer Chrome can hang when a page
// keeps animations/connections alive, so we cap each render and kill if needed.
function renderRoute(chrome, route, timeoutMs = 20000) {
  const url = `http://localhost:${PORT}${route}`;
  const userDataDir = join(tmpdir(), `prerender-${Math.random().toString(36).slice(2)}`);
  return new Promise((resolve, reject) => {
    const child = spawn(chrome, [
      '--headless=new', '--disable-gpu', '--no-sandbox',
      '--disable-extensions', '--disable-background-networking',
      `--user-data-dir=${userDataDir}`,
      '--timeout=8000',
      '--virtual-time-budget=3000',
      '--dump-dom', url,
    ], { stdio: ['ignore', 'pipe', 'ignore'] });

    let out = '';
    const timer = setTimeout(() => { child.kill('SIGKILL'); }, timeoutMs);
    child.stdout.on('data', (d) => { out += d.toString(); });
    child.on('error', (e) => { clearTimeout(timer); reject(e); });
    child.on('close', () => {
      clearTimeout(timer);
      if (out && out.includes('</html>')) resolve(out);
      else reject(new Error(`empty/partial render for ${route}`));
    });
  });
}

async function main() {
  const chrome = findChrome();
  if (!chrome) {
    console.warn('[prerender] No Chrome/Chromium found — skipping pre-render. The SPA still ships; add Chrome to enable static HTML for crawlers.');
    return;
  }
  if (!existsSync(join(DIST, 'index.html'))) {
    console.error('[prerender] dist/index.html not found. Run the build first.');
    process.exit(1);
  }

  const server = await startServer();
  console.log(`[prerender] serving dist/ on :${PORT}`);

  try {
    for (const route of ROUTES) {
      const html = await renderRoute(chrome, route);
      const outDir = route === '/' ? DIST : join(DIST, route.replace(/^\//, ''));
      await mkdir(outDir, { recursive: true });
      await writeFile(join(outDir, 'index.html'), html, 'utf8');
      const kb = (Buffer.byteLength(html) / 1024).toFixed(1);
      console.log(`[prerender] ${route.padEnd(12)} -> ${join(outDir, 'index.html').replace(DIST, 'dist')} (${kb} kB)`);
    }
    console.log('[prerender] done. Rendered HTML now contains real content for AI tools and crawlers.');
  } finally {
    server.close();
  }
}

main().catch((e) => { console.error(e); process.exit(1); });
