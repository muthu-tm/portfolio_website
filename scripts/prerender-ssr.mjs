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


// --- Per-route <head>: unique title, description, canonical, social tags and
// JSON-LD for every page (values live in src/app/seo/pageMeta.ts). ---
const esc = (v) => String(v).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');

function setTag(html, re, replacement, label, route) {
  if (!re.test(html)) {
    console.warn(`[ssr] ${route}: could not find ${label} in template`);
    return html;
  }
  return html.replace(re, replacement);
}

function buildHead(template, meta, SITE_URL) {
  const route = meta.path;
  const url = route === '/' ? `${SITE_URL}/` : `${SITE_URL}${route}`;
  let h = template;
  h = setTag(h, /<title>[\s\S]*?<\/title>/, `<title>${esc(meta.title)}</title>`, 'title', route);
  const metas = [
    [/(<meta name="description" content=")[^"]*(")/, meta.description, 'description'],
    [/(<meta property="og:url" content=")[^"]*(")/, url, 'og:url'],
    [/(<meta property="og:title" content=")[^"]*(")/, meta.title, 'og:title'],
    [/(<meta property="og:description" content=")[^"]*(")/, meta.description, 'og:description'],
    [/(<meta name="twitter:title" content=")[^"]*(")/, meta.title, 'twitter:title'],
    [/(<meta name="twitter:description" content=")[^"]*(")/, meta.description, 'twitter:description'],
    [/(<link rel="canonical" href=")[^"]*(")/, url, 'canonical'],
  ];
  for (const [re, val, label] of metas) h = setTag(h, re, `$1${esc(val)}$2`, label, route);
  if (route !== '/') h = h.replace('<meta property="og:type" content="profile" />', '<meta property="og:type" content="website" />');

  // JSON-LD: keep WebSite + Person, swap the page node per route, add breadcrumbs.
  const ldRe = /<script type="application\/ld\+json">([\s\S]*?)<\/script>/;
  const m = h.match(ldRe);
  if (!m) return h;
  const ld = JSON.parse(m[1]);
  const pageId = `${url}#webpage`;
  const graph = ld['@graph'].filter((n) => n['@type'] !== 'ProfilePage');
  const page = {
    '@type': meta.pageType,
    '@id': route === '/' ? `${SITE_URL}/#profilepage` : pageId,
    url,
    name: meta.title,
    description: meta.description,
    isPartOf: { '@id': `${SITE_URL}/#website` },
    inLanguage: 'en',
    dateModified: new Date().toISOString().slice(0, 10),
    primaryImageOfPage: { '@type': 'ImageObject', url: `${SITE_URL}${meta.image}`, caption: meta.imageAlt },
  };
  if (meta.pageType === 'ProfilePage') page.mainEntity = { '@id': `${SITE_URL}/#person` };
  else page.about = { '@id': `${SITE_URL}/#person` };
  if (route !== '/') {
    page.breadcrumb = { '@id': `${url}#breadcrumb` };
    graph.push({
      '@type': 'BreadcrumbList',
      '@id': `${url}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
        { '@type': 'ListItem', position: 2, name: meta.crumb, item: url },
      ],
    });
  }
  graph.splice(1, 0, page);
  ld['@graph'] = graph;
  return h.replace(ldRe, `<script type="application/ld+json">\n${JSON.stringify(ld, null, 2)}\n    </script>`);
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

  const ROUTES = Object.keys(ssr.PAGE_META);
  for (const route of ROUTES) {
    let html;
    const head = buildHead(template, ssr.PAGE_META[route], ssr.SITE_URL);
    try {
      const markup = ssr.render(route);
      html = head.replace(
        '<div id="root"></div>',
        `<div id="root">${markup}</div>`
      );
    } catch (e) {
      console.warn(`[ssr] render failed for ${route}: ${e.message} — leaving shell.`);
      html = head;
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
