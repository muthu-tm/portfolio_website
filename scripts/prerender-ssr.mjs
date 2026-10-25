/**
 * Browser-free static pre-rendering for AI-parseability (Vercel-friendly).
 *
 * Renders each route to HTML at build time with react-dom/server + StaticRouter
 * — pure Node, no Chromium — and injects the markup into the built index.html's
 * #root. AI tools / crawlers that don't run JS then get the real body content;
 * the SPA still hydrates for human visitors.
 *
 * Run AFTER `vite build` (see package.json "build:seo").
 */
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const DIST = join(ROOT, 'dist');
const ROUTES = ['/', '/experience', '/works', '/contact'];

// --- Minimal browser shims so component modules render cleanly in Node. ---
const noop = () => {};
const noopStorage = {
  _d: {},
  getItem(k) { return this._d[k] ?? null; },
  setItem(k, v) { this._d[k] = String(v); },
  removeItem(k) { delete this._d[k]; },
};
const mediaQuery = { matches: false, media: '', onchange: null, addListener: noop, removeListener: noop, addEventListener: noop, removeEventListener: noop, dispatchEvent: () => false };
if (!globalThis.window) {
  globalThis.window = {
    localStorage: noopStorage,
    matchMedia: () => mediaQuery,
    addEventListener: noop,
    removeEventListener: noop,
    dispatchEvent: () => false,
    location: { href: 'https://www.muthuthavamani.com/', pathname: '/' },
    navigator: { userAgent: 'node-ssr' },
    requestAnimationFrame: (cb) => setTimeout(cb, 0),
    cancelAnimationFrame: noop,
    scrollTo: noop,
  };
}
globalThis.localStorage = globalThis.localStorage || noopStorage;
// navigator is a read-only getter in modern Node; only set if absent & writable.
try { if (!globalThis.navigator) globalThis.navigator = { userAgent: 'node-ssr' }; } catch { /* already defined */ }
globalThis.requestAnimationFrame = globalThis.requestAnimationFrame || ((cb) => setTimeout(cb, 0));
globalThis.cancelAnimationFrame = globalThis.cancelAnimationFrame || noop;
if (!globalThis.document) {
  globalThis.document = {
    documentElement: { classList: { toggle: noop, add: noop, remove: noop }, style: {} },
    addEventListener: noop,
    removeEventListener: noop,
    createElement: () => ({ style: {}, setAttribute: noop, addEventListener: noop }),
    querySelector: () => null,
    body: { style: {} },
  };
}

async function main() {
  if (!existsSync(join(DIST, 'index.html'))) {
    console.error('[ssr] dist/index.html not found — run `vite build` first.');
    process.exit(1);
  }

  // Register tsx/esbuild on the fly so we can import .tsx sources in Node.
  const require = createRequire(import.meta.url);
  let tsImport;
  try {
    // tsx provides a programmatic ESM loader
    tsImport = (await import('tsx/esm/api')).tsImport;
  } catch {
    console.warn('[ssr] "tsx" not available — skipping SSR prerender (SPA still ships).');
    return;
  }

  // Import the SSR entry (render + StaticRouter + components) through ONE tsx
  // module graph so react-router context links correctly.
  const ssr = await tsImport('../src/app/ssrEntry.tsx', import.meta.url);

  const template = await readFile(join(DIST, 'index.html'), 'utf8');

  for (const route of ROUTES) {
    let html;
    try {
      const markup = ssr.render(route);
      html = template.replace(
        '<div id="root"></div>',
        `<div id="root">${markup}</div>`
      );
    } catch (e) {
      console.warn(`[ssr] render failed for ${route}: ${e.message} — leaving shell.`);
      html = template;
    }
    const outDir = route === '/' ? DIST : join(DIST, route.replace(/^\//, ''));
    await mkdir(outDir, { recursive: true });
    await writeFile(join(outDir, 'index.html'), html, 'utf8');
    const kb = (Buffer.byteLength(html) / 1024).toFixed(1);
    console.log(`[ssr] ${route.padEnd(12)} -> ${join(outDir, 'index.html').replace(DIST, 'dist')} (${kb} kB)`);
  }
  console.log('[ssr] done — body content is now in the static HTML for AI tools & crawlers.');
}

main().catch((e) => { console.error(e); process.exit(1); });
