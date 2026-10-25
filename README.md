# Muthaiya Thavamani — Portfolio

Personal portfolio for **Muthaiya Thavamani**, an **AI-Native / Forward Deployed Engineer & Technical Architect**.
Live at **https://www.muthuthavamani.com**.

A React + Vite single-page app with an executive, document-grade design, light/dark theming,
and build-time static pre-rendering so the content is readable by search engines and AI tools
(ChatGPT, Claude, etc.) without running JavaScript.

---

## About the profile

Lead AI-Native and Forward Deployed Engineer with 11 years of experience shipping Generative AI
from discovery to production. Core focus areas, in priority order:

1. **AI / ML Engineering** — Generative AI, foundation models (OpenAI, Anthropic Claude, Hugging Face, LLaMA),
   RAG, agents & copilots (LangChain, LangGraph, MCP), fine-tuning, guardrails, Responsible AI,
   LLM evaluation; plus classic ML (TensorFlow, forecasting, anomaly detection, computer vision).
2. **Data Engineering** — Databricks (Certified Professional), medallion architecture, PySpark,
   Delta Lake, serverless ETL, governance.
3. **Blockchain & Web3** — Solidity/EVM, decentralized identity (Privado ID), Polygon CDK,
   Avalanche Subnet, Cosmos SDK, Tezos, Hyperledger.
4. **Domain work** — enterprise asset management, video streaming, finance/trading, and more.

**Contact:** muthu.thavamani.03@gmail.com ·
[LinkedIn](https://www.linkedin.com/in/muthu-thavamani) ·
[GitHub](https://github.com/muthu-tm)

---

## Tech stack

- **Framework:** React 18 + TypeScript
- **Build tool:** Vite 6
- **Routing:** React Router v7 (`react-router-dom`)
- **Styling:** Tailwind CSS v4 + CSS custom properties (design tokens)
- **Animation:** `motion` (Framer Motion)
- **Fonts:** Fraunces (serif display), Inter (sans), JetBrains Mono (labels/tags)
- **Pre-rendering:** `react-dom/server` + `StaticRouter`, run through `tsx` at build time
- **Hosting:** Vercel

---

## Getting started

```bash
npm install        # install dependencies
npm run dev        # start the Vite dev server (http://localhost:5173)
```

## Scripts

| Script | What it does |
| --- | --- |
| `npm run dev` | Start the Vite dev server with HMR. |
| `npm run build` | Production build **+ static pre-render** of every route (used by Vercel). |
| `npm run build:spa` | Plain SPA build only, without pre-rendering (debugging). |
| `npm run prerender` | Run the pre-render step against an existing `dist/` build. |

> **Note:** `npm run build` is the deployment build — it produces AI-readable HTML.
> Don't deploy the output of `build:spa`, which ships an empty `#root` shell.

---

## AI-parseability & SEO (why pre-rendering exists)

A plain client-side SPA ships an almost-empty `index.html` (`<div id="root"></div>`), so
crawlers and LLM fetchers that don't execute JavaScript see no content. This project solves that
two ways:

1. **Structured data in `index.html`** — a `schema.org/Person` JSON-LD block plus full
   `<title>`, `description`, `keywords`, and Open Graph / Twitter meta. Present even before JS runs.
2. **Build-time static pre-rendering** — `scripts/prerender-ssr.mjs` renders each route with
   `react-dom/server` + `StaticRouter` (no headless browser needed) and injects the markup into
   each route's `index.html`. Output:
   - `dist/index.html` (Home)
   - `dist/experience/index.html`
   - `dist/works/index.html`
   - `dist/contact/index.html`

The browser still boots the SPA normally: `main.tsx` uses `createRoot().render()`, which replaces
the pre-rendered markup on load (no hydration-mismatch risk from the theme class).

To verify the deployed HTML carries real content:

```bash
curl -s https://www.muthuthavamani.com/ | grep -o "Governed Asset"   # should match
curl -s https://www.muthuthavamani.com/experience -o /dev/null -w "%{http_code}\n"  # 200
```

---

## Theming

- **Light is the default**; dark is applied only when the visitor explicitly toggles it
  (persisted in `localStorage` under `portfolio-theme`).
- An inline script in `index.html` sets the theme before first paint to avoid a flash.
- Colors are CSS variables in `src/styles/theme.css`; the `.dark` class on `<html>` switches them.

---

## Deployment (Vercel)

- **Build command:** `npm run build` (set in `vercel.json`).
- **Output directory:** `dist` (Vite default).
- **Routing:** `vercel.json` uses `cleanUrls` and a catch-all rewrite so deep links
  (`/experience`, `/works`, `/contact`) resolve to their pre-rendered pages, and any other
  non-asset path falls back to `index.html` for client-side routing.

```jsonc
// vercel.json
{
  "cleanUrls": true,
  "trailingSlash": false,
  "buildCommand": "npm run build",
  "rewrites": [
    { "source": "/((?!experience$|works$|contact$|.*\\.).*)", "destination": "/index.html" }
  ]
}
```

Pushes to the default branch trigger a Vercel deployment.

---

## Project structure

```
.
├── index.html                      # App shell: SEO meta, JSON-LD, pre-paint theme script
├── vercel.json                     # Build command + SPA/clean-URL routing
├── public/
│   └── Muthaiya-Thavamani-Resume.pdf   # Downloadable résumé (served at /Muthaiya-Thavamani-Resume.pdf)
├── scripts/
│   ├── prerender-ssr.mjs           # Build-time static pre-render (react-dom/server, no browser)
│   └── prerender.mjs               # Legacy headless-Chrome pre-render (kept for reference)
├── src/
│   ├── main.tsx                    # Client entry (createRoot)
│   ├── app/
│   │   ├── App.tsx                 # BrowserRouter wrapper (client)
│   │   ├── AppRoutes.tsx           # Router-agnostic tree (providers + routes) — shared by SSR
│   │   ├── ssrEntry.tsx            # SSR render() using StaticRouter
│   │   ├── theme/ThemeProvider.tsx # Light/dark context + persistence
│   │   └── components/
│   │       ├── Navigation.tsx
│   │       ├── pages/              # Home, Experience, Works, Contact
│   │       ├── figma/
│   │       └── ui/                 # shadcn/ui primitives
│   └── styles/
│       ├── fonts.css               # Google Fonts imports
│       ├── theme.css               # Design tokens + component utilities (light/dark)
│       ├── tailwind.css
│       └── index.css
└── package.json
```

### Pages

- **Home** (`/`) — executive one-pager: hero, snapshot stats, focus areas, selected experience,
  flagship projects, technical arsenal, and a contact CTA with résumé download.
- **Experience** (`/experience`) — full career history, AI-native roles first.
- **Works** (`/works`) — projects, AI-native flagships first, then Web3/ventures.
- **Contact** (`/contact`) — contact form, links, availability, and résumé download.

---

## Résumé

The downloadable résumé lives at `public/Muthaiya-Thavamani-Resume.pdf` and is linked from the
Home CTA and the Contact page. Replace that file to update the download (keep the filename, or
update the `href` in `Home.tsx` and `Contact.tsx`).
