/**
 * Per-route SEO metadata — single source of truth for:
 *  - the prerendered <head> of each route (scripts/prerender-ssr.mjs), and
 *  - document.title / meta description on client-side navigation (usePageMeta).
 * Keep titles ≤ 60 chars and descriptions ≤ 160 chars.
 */
export const SITE_URL = 'https://www.muthuthavamani.com';

export interface PageMeta {
  path: string;
  title: string;
  description: string;
  /** schema.org WebPage subtype for this route. */
  pageType: 'ProfilePage' | 'AboutPage' | 'CollectionPage' | 'ContactPage';
  /** Visible breadcrumb label (omitted for Home). */
  crumb?: string;
  /** Primary image for the page (path under /public). */
  image: string;
  imageAlt: string;
}

export const PAGE_META: Record<string, PageMeta> = {
  '/': {
    path: '/',
    title: 'Muthu Thavamani | Generative AI & Forward Deployed Engineer',
    description:
      'Muthu Thavamani is a Generative AI and Forward Deployed Engineer shipping agentic AI, RAG copilots over MCP and data platforms from discovery to production.',
    pageType: 'ProfilePage',
    image: '/images/generative-ai-multi-agent-rag-architecture.svg',
    imageAlt: 'Governed multi-agent RAG reference architecture',
  },
  '/experience': {
    path: '/experience',
    title: 'Experience | Muthu Thavamani — Generative AI Engineer',
    description:
      '11 years of experience: Lead AI Engineer shipping multi-agent and RAG systems, Lead Data Engineer on Databricks, Web3 protocol lead and backend engineer.',
    pageType: 'AboutPage',
    crumb: 'Experience',
    image: '/images/career-arc-enterprise-web3-data-ai-native.svg',
    imageAlt: 'Career arc from enterprise systems to AI-native engineering',
  },
  '/works': {
    path: '/works',
    title: 'Works | AI Agents, RAG Copilots & Web3 — Muthu Thavamani',
    description:
      'Selected works: governed asset agents, a universal AI copilot over MCP, an AIDLC multi-agent engine, an IT support copilot on Azure, and Web3 ventures.',
    pageType: 'CollectionPage',
    crumb: 'Works',
    image: '/images/it-support-copilot-hybrid-rag-azure.svg',
    imageAlt: 'IT Support Copilot with hybrid RAG search on Azure',
  },
  '/contact': {
    path: '/contact',
    title: 'Hire a Forward Deployed AI Engineer | Muthu Thavamani',
    description:
      'Hire Muthu Thavamani for forward-deployed Generative AI, agentic systems and data engineering engagements — remote from India, from scoped pilot to production.',
    pageType: 'ContactPage',
    crumb: 'Contact',
    image: '/images/forward-deployed-engagement-model.svg',
    imageAlt: 'Forward-deployed engagement model: discover, scope, build, production',
  },
};
