# UI uplift + SEO plan — muthuthavamani.com

Reference: al-ops.com (studied in a real browser on 2026-11-11).

**Direction (updated after review):** borrow the *principles* only — sharp corners and purposeful illustrations in every relevant section. Keep our own identity: the existing indigo → teal palette, Fraunces / Inter / JetBrains Mono type, and our own background treatment (plain background with a fine circuit-trace line motif — no gradients, no grid). The site must not read as a copy of al-ops.

## What al-ops.com does (for reference — we adopt only corners + illustrations)

| Area | al-ops.com | muthuthavamani.com today |
|---|---|---|
| Corners | `border-radius: 0` on ~all 306 boxes | 10–18px radius on cards, buttons, pills, tags |
| Type | One grotesk (Inter Tight 400), tight tracking (-0.04em), very large H1 | Fraunces serif headings + Inter body |
| Section system | Mono eyebrow with leading rule: `—— 01 / GROWTH` | `01  WHAT I DO` |
| Background | Faint square grid ("engineering paper") | Flat cream |
| Accent | One accent colour, used on the last word of a headline | Indigo→teal gradient |
| Images | 5 WebP illustrations, keyword-rich filenames (`alops-supply-network.webp`), long descriptive `alt`, explicit `width`/`height`, `loading="lazy"` below the fold, "ILLUSTRATION" captions | **No images at all** |
| Social | `og:image` 1200×630 + `og:image:alt`, `summary_large_image`, `og:site_name`, `og:locale` | No `og:image`, `twitter:card=summary` |
| Icons | `favicon.ico`, `favicon.svg`, `apple-touch-icon.png` | None |
| Structured data | `@graph` of `WebSite` + `Organization` + `WebPage` linked by `@id` | Single `Person` |
| Crawl | `robots.txt` + `sitemap.xml` | Neither |

## Problems found in the current site (beyond the look)

1. **Every route ships the Home page's `<head>`.** The prerender script reuses one template, so `/experience`, `/works`, `/contact` all have the Home title, description and `canonical=/`. Google reads that as "these pages are duplicates of Home" and may drop them from the index. **Highest-impact SEO fix.**
2. No `robots.txt` / `sitemap.xml`.
3. No images → no image search traffic, no rich link previews on LinkedIn/X/Slack.
4. Fonts load through a CSS `@import` chain (render-blocking, hurts LCP).
5. Hero `<h1>` fades in from `opacity: 0` → delays Largest Contentful Paint.
6. Title is 66 chars and description 330 chars → both truncated in Google results.
7. `meta keywords` has ~40 terms. Google ignores this tag and Bing treats stuffing as spam; keywords count when they sit in the title, H1/H2s, body copy, alt text, filenames and structured data.

## Keyword strategy

Primary (title, H1, first paragraph, OG): **Generative AI Engineer**, **Forward Deployed Engineer**, **AI-Native Engineer**, **Muthu Thavamani**.
Secondary (H2/H3, alt text, FAQ): Agentic AI / multi-agent systems, RAG (retrieval-augmented generation), LangGraph / LangChain, MCP (Model Context Protocol), Azure AI Foundry, Databricks data engineering, AI technical architect, AI consultant India / remote.
Long-tail (FAQ answers): "hire a forward deployed AI engineer", "RAG copilot on Azure", "governed multi-agent AI", "contract Generative AI engineer India".

## Phase 1 — Home page (done locally, for your review)

UI
- Uplift scope `.ent`, applied only on `/` so other pages are untouched until approved.
- Sharp corners on every card, button, pill, tag, input and table.
- Existing palette and fonts, refined: tighter Fraunces headings, Inter 600 card titles, solid indigo on the key phrase of each heading. No gradients anywhere (page or images).
- Background: plain. Hero and CTA carry a hairline circuit-trace motif (square nodes, two slow signal pulses; still under `prefers-reduced-motion`). Section rules start with a short indigo + teal brand bar.
- Section labels: teal square marker + `01 · CAPABILITIES`.
- Illustrations (8, one visual language — flat deep-indigo panels, indigo/teal lines): hero architecture diagram, one per focus area, one per flagship project.
- Profile card with an indigo + teal top edge; cards lift with a soft shadow.
- Dark CTA panel with the trace motif; FAQ section (keyword-rich, real answers); full footer with internal and contact links.

SEO
- Title → `Muthu Thavamani | Generative AI & Forward Deployed Engineer` (58 chars).
- Description → 155 chars, primary keywords up front.
- `og:image` (1200×630 PNG) + alt, `summary_large_image`, `og:site_name`, `og:locale`, `theme-color`.
- SVG favicon + 180px apple-touch-icon.
- JSON-LD `@graph`: `WebSite` + `ProfilePage` + `Person` (+ `FAQPage`) linked by `@id`.
- Illustrations: keyword filenames (e.g. `it-support-copilot-hybrid-rag-azure.svg`), descriptive alt text, SVG `<title>`/`<desc>`, explicit `width`/`height`, `loading="lazy"` below the fold, `<figure>` + `<figcaption>` for the hero, all listed in the image sitemap.
- `robots.txt` + `sitemap.xml` (site-wide, but harmless and needed now).
- Fonts via `<link rel=preconnect>` + stylesheet in `<head>` instead of CSS `@import`.
- Hero `<h1>` no longer fades in (faster LCP).
- `meta keywords` trimmed to 12 focused terms.

## Phase 2 — roll out to Experience, Works, Contact ✅ done (2026-11-11, local)

- `.ent` applied site-wide in `AppRoutes.tsx`; shared `PageHeader` (breadcrumb + trace motif), `SiteFooter` and `TraceArt` components.
- **Per-route `<head>`** generated by `scripts/prerender-ssr.mjs` from `src/app/seo/pageMeta.ts`: unique title, description, canonical, OG/Twitter tags, and JSON-LD per page (`ProfilePage` / `AboutPage` / `CollectionPage` / `ContactPage` + `BreadcrumbList`). `usePageMeta` keeps them in sync on client-side navigation.
- Keyword-bearing H1s on subpages; visible breadcrumbs matching the JSON-LD.
- New illustrations: career arc (Experience), Web3 ventures (Works), forward-deployed engagement model (Contact); AI-native project cards on Works reuse the Home illustrations. All in the image sitemap.

## Phase 3 — authority & content (needs your input)

- **A real headshot** (`muthu-thavamani-generative-ai-engineer.webp`) → `Person.image`, hero, OG image. Biggest single boost for name searches and Knowledge Panel eligibility.
- Case-study pages per project (`/works/it-support-copilot` …): problem → architecture → outcome, each with its own diagram. Long-form pages rank, cards don't.
- Google Search Console + Bing Webmaster: verify, submit sitemap, watch queries.
- Point LinkedIn / GitHub profile "website" fields at the site (backlinks + `sameAs`).
- Optional: short "Perspectives"-style articles on RAG, MCP and FDE work.
