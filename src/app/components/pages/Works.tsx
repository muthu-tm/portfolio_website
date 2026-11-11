import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ExternalLink, ArrowRight } from 'lucide-react';
import PageHeader from '../site/PageHeader';
import SiteFooter from '../site/SiteFooter';
import TraceArt from '../site/TraceArt';
import { usePageMeta } from '../../seo/usePageMeta';

interface Project {
  name: string;
  tagline: string;
  category: string;
  link?: string;
  aiNative?: boolean;
  hidden?: boolean;
  img?: string;
  alt?: string;
  pillars: { title: string; description: string }[];
  skills: string;
}

const projects: Project[] = [
  {
    name: 'Governed Asset Agents',
    img: '/images/governed-asset-agents-predictive-maintenance.svg',
    alt: 'Governed asset agent illustration: a vibration forecast flags failure risk on a pump and the agent drafts a work order that passes policy checks and awaits human approval.',
    tagline: 'Enterprise Asset Management',
    category: 'AI-Native',
    aiNative: true,
    pillars: [
      { title: 'Predict, Analyse, Act', description: 'A multi-agent system for Enterprise Asset Management that forecasts failures via anomaly detection, analyses operational data, and takes action within policy guardrails.' },
      { title: 'Responsible AI & Guardrails', description: 'Every agent decision runs inside a governance layer with Responsible AI controls and human-in-the-loop review, keeping autonomous actions auditable, safe, and compliant.' },
      { title: 'Enterprise Data Backbone', description: 'Grounded on enterprise data across Databricks, Teradata, and DynamoDB for reliable, context-aware reasoning.' },
    ],
    skills: 'Python, Multi-Agent AI, Guardrails, Responsible AI, Human-in-the-Loop, Anomaly Detection, Databricks, Teradata, DynamoDB, AWS',
  },
  {
    name: 'Universal AI Copilot',
    img: '/images/universal-ai-copilot-mcp-rag.svg',
    alt: 'Universal AI copilot illustration: a RAG chat assistant calls CRM, ERP, ticketing and knowledge-base tools through a secured Model Context Protocol (MCP) gateway.',
    tagline: 'MCP-Connected Assistant',
    category: 'AI-Native',
    aiNative: true,
    pillars: [
      { title: 'RAG Over Any System', description: 'A RAG Copilot that connects to any system through a secured Model Context Protocol (MCP) link, using tool/function calling and semantic search to expose a single conversational interface over scattered tools.' },
      { title: 'Secured MCP Connections', description: 'Designed the MCP integration layer with security and access control first, so the copilot can act across systems without over-permissioning.' },
      { title: 'LLM Document Parser', description: 'Paired with an LLM document parser that uses embeddings and RAG to turn unstructured enterprise documents into usable, structured data.' },
    ],
    skills: 'Python, LLMs, RAG, MCP, Tool-Calling, Embeddings, Semantic Search, FastAPI, ReactJS, AWS',
  },
  {
    name: 'AIDLC · BRD Multi-Agent Engine',
    img: '/images/aidlc-brd-multi-agent-langgraph-engine.svg',
    alt: 'AIDLC BRD engine illustration: LangGraph analyst, architect and reviewer agents turn a business requirements document into epics, architecture and a test plan.',
    tagline: 'AI Development Life Cycle',
    category: 'AI-Native',
    aiNative: true,
    pillars: [
      { title: 'AIDLC Ideation to Delivery', description: 'Designed and delivered the AIDLC (AI Development Life Cycle) BRD engine end to end, from concept through to a successful production rollout.' },
      { title: 'LangChain / LangGraph Orchestration', description: 'Coordinated specialized agents with LangChain and LangGraph to automate business requirement document workflows, with LLM evaluation and prompt engineering reducing manual effort across the pipeline.' },
      { title: 'Data Governance Built In', description: 'Integrated with medallion-architecture data (Bronze/Silver/Gold) on Databricks to keep agent outputs grounded and governed.' },
    ],
    skills: 'Python, AIDLC, LangChain, LangGraph, Multi-Agent AI, LLM Evaluation, Databricks, PySpark, AWS',
  },
  {
    name: 'HVAC Predictive Engine',
    tagline: 'Healthcare Facilities',
    category: 'AI-Native',
    aiNative: true,
    hidden: true,
    pillars: [
      { title: 'Forecasting & Anomaly Detection', description: 'A predictive engine for healthcare HVAC systems using time-series forecasting and anomaly detection to flag performance and maintenance needs from real-time sensor data.' },
      { title: 'Operational Efficiency', description: 'Turns raw IoT telemetry into actionable predictions that improve energy efficiency and reduce unplanned downtime in critical facilities.' },
      { title: 'MLOps Pipeline', description: 'Serves predictions through serverless AWS pipelines with MLflow tracking and drift monitoring, built for reliability in healthcare environments.' },
    ],
    skills: 'Python, Databricks, Time-Series Forecasting, Anomaly Detection, MLflow, Drift Monitoring, AWS, IoT Data',
  },
  {
    name: 'IT Support Copilot',
    img: '/images/it-support-copilot-hybrid-rag-azure.svg',
    alt: 'IT Support Copilot illustration: hybrid pgvector and BM25 search fused with RRF produces a cited, grounded answer with a groundedness score and auto-escalation to IT.',
    tagline: 'Governed · Multi-Tenant',
    category: 'AI-Native',
    aiNative: true,
    pillars: [
      { title: 'Governed Agentic Workflow', description: 'A policy-driven copilot that acknowledges, asks one clarifying question, delivers up to five cited steps, and hard-stops to escalate when confidence is low — it never guesses, with strict prohibitions on privileged actions and sensitive data.' },
      { title: 'Three-Tier RAG on Azure', description: 'Retrieval cascades local → shared → vendor knowledge tiers, using hybrid search (pgvector HNSW + PostgreSQL BM25 fused with RRF) and a 0.70 confidence gate that escalates rather than answer poorly.' },
      { title: 'Grounded & Multi-Tenant', description: 'Built on Copilot Studio and Azure AI Foundry (GPT-4o) with content filtering, groundedness evaluation, and per-tenant isolation — all data staying inside the tenant boundary.' },
    ],
    skills: 'Azure AI Foundry, Copilot Studio, RAG, pgvector, Hybrid Search (RRF), Azure Functions (Python), Power Automate, Entra ID, Groundedness Evaluation',
  },
  {
    name: 'Crypit.app',
    tagline: 'Crypto Super App',
    category: 'Web3 & Ventures',
    link: 'https://crypit-2-0--nimble-macaron-e2c8cf.netlify.app/',
    pillars: [
      { title: 'Crypto Super App', description: 'A comprehensive "super app" ecosystem to simplify crypto interactions, with a unified dashboard for asset tracking and DeFi exploration.' },
      { title: 'User-Centric Web3 UX', description: 'Abstracted complex blockchain interactions into a seamless web interface to lower the entry barrier for non-technical users.' },
      { title: 'Full-Stack Development', description: 'Managed the end-to-end lifecycle from UI/UX design to the integration of decentralized backend services.' },
    ],
    skills: 'ReactJS, Web3.js/Ethers.js, NodeJS, API Integration, Netlify',
  },
  {
    name: '3suite',
    tagline: 'Multi-Chain Utility Suite',
    category: 'Web3 & Ventures',
    pillars: [
      { title: 'Token Operations Engine', description: 'A specialized toolset for token management, including high-efficiency "Token Multi-Sender" and automated airdrop distribution modules.' },
      { title: 'Cross-Chain Minting', description: 'A "Mint Token" service compatible with multiple EVM chains, letting users deploy custom tokens without writing code.' },
      { title: 'Protocol Efficiency', description: 'Optimized smart contract calls to minimize gas fees during bulk transactions for cost-effective token distributions.' },
    ],
    skills: 'Solidity, HardHat, ReactJS, EVM (Ethereum, Polygon, BSC), OpenZeppelin',
  },
  {
    name: 'NFT Marketplace',
    tagline: '3suite Ecosystem',
    category: 'Web3 & Ventures',
    link: 'https://3suite-nft-marketplace.netlify.app/',
    pillars: [
      { title: 'Marketplace Architecture', description: 'A decentralized NFT marketplace for browsing, minting, and trading digital assets.' },
      { title: 'Smart Contract Logic', description: 'Implemented the core trading engine in Solidity, handling royalties, bidding logic, and secure ownership transfers.' },
      { title: 'IPFS Integration', description: 'Leveraged decentralized storage for NFT metadata and assets to ensure data permanence and censorship resistance.' },
    ],
    skills: 'Solidity, Ethers.js, IPFS, ReactJS, Tailwind CSS',
  },
  {
    name: 'Unique Foods',
    tagline: 'Quick-Commerce Mobile App',
    category: 'Web3 & Ventures',
    pillars: [
      { title: 'Local Delivery Ecosystem', description: 'A high-performance Flutter application for a local quick-commerce startup, facilitating real-time food and grocery ordering.' },
      { title: 'Scalable User Base', description: 'Scaled the platform to over 5,000 active users, ensuring app stability and fast load times during peak hours.' },
      { title: 'Real-time Logistics', description: 'Integrated location-based services and push notifications to track orders from the local merchant to the doorstep.' },
    ],
    skills: 'Flutter (Dart), Firebase (Firestore & Auth), Google Maps API, Cloud Functions',
  },
];

const categories = [
  { name: 'AI-Native', title: <>AI-native <span className="em">products</span></> },
  { name: 'Web3 & Ventures', title: <>Web3 &amp; <span className="em">ventures</span></> },
];

const fade = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.5 },
};

const pad = (n: number) => String(n).padStart(2, '0');

export default function Works() {
  usePageMeta('/works');

  return (
    <div className="pt-[68px]">
      <PageHeader
        crumb="Works"
        eyebrow="Portfolio"
        title={<>Selected works: <span className="em">AI agents</span>, copilots &amp; Web3</>}
        lead="AI-native products and entrepreneurial ventures spanning agentic systems, RAG copilots, Web3 protocols, and mobile apps."
      />

      <main>
        {categories.map((cat, ci) => {
          const items = projects.filter((p) => p.category === cat.name && !p.hidden);
          const hid = `works-${ci}`;
          return (
            <section key={cat.name} className="wrap py-16 md:py-20 divider-line" aria-labelledby={hid}>
              <motion.div {...fade} className="mb-10">
                <p className="kicker mb-5">{pad(ci + 1)} · {cat.name}</p>
                <h2 id={hid} className="sec-h">{cat.title}</h2>
              </motion.div>

              {cat.name === 'Web3 & Ventures' && (
                <motion.figure {...fade} className="mb-8">
                  <div className="figure-ent">
                    <img
                      src="/images/web3-ventures-defi-nft-mobile-apps.svg"
                      alt="Web3 and venture products: the Crypit crypto super app dashboard, the 3suite EVM token multi-sender, a decentralized NFT marketplace, and the Unique Foods quick-commerce mobile app."
                      width={1200}
                      height={300}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <figcaption className="figcap">
                    <span>Illustration — Web3 ventures: DeFi super app, token tooling, NFT marketplace, mobile commerce</span>
                    <span className="md:hidden t-accent">Swipe to explore →</span>
                  </figcaption>
                </motion.figure>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                {items.map((project, i) => (
                  <motion.article {...fade} key={project.name} className="card-ent flex flex-col">
                    {project.img && (
                      <img src={project.img} alt={project.alt} width={720} height={300} loading="lazy" decoding="async" className="card-media" />
                    )}
                    <div className="p-5 sm:p-6 md:p-8 flex flex-col flex-1">
                      <div className="flex justify-between items-center gap-3 mb-5 t-mono text-[11px] tracking-[0.12em] uppercase">
                        <span className="t-muted">{pad(i + 1)} / {pad(items.length)}</span>
                        <div className="flex items-center gap-3">
                          <span className="badge">{project.category}</span>
                          {project.link && (
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="t-accent-2 hover:opacity-70 transition-opacity" aria-label={`Visit ${project.name}`}>
                              <ExternalLink className="w-[18px] h-[18px]" />
                            </a>
                          )}
                        </div>
                      </div>
                      <h3 className="text-[24px] t-strong mb-1">{project.name}</h3>
                      <p className="text-sm t-accent mb-5">{project.tagline}</p>

                      <div className="space-y-3.5 mb-6">
                        {project.pillars.map((p) => (
                          <div key={p.title}>
                            <h4 className="text-[15px] t-strong font-semibold font-[family-name:var(--sans)] mb-0.5">{p.title}</h4>
                            <p className="text-sm t-soft">{p.description}</p>
                          </div>
                        ))}
                      </div>

                      <div className="pt-4 divider-line mt-auto">
                        <p className="t-mono text-[11px] t-muted mb-2.5 uppercase tracking-[0.12em]">Tech stack</p>
                        <div className="flex flex-wrap gap-2">
                          {project.skills.split(', ').map((sk) => <span key={sk} className="tag">{sk}</span>)}
                        </div>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </section>
          );
        })}

        <section className="wrap pb-16 md:pb-24">
          <motion.div {...fade} className="panel panel-center">
            <TraceArt className="panel-trace" />
            <TraceArt className="panel-trace panel-trace-left" />
            <div className="panel-body">
              <p className="kicker mb-4">Entrepreneur mindset</p>
              <h2 className="text-[clamp(28px,4vw,44px)] mb-4">From concept to market, not just to code.</h2>
              <p className="t-soft max-w-[60ch] mx-auto mb-8">
                Beyond technical depth, I bring an entrepreneurial mindset to every project — identifying
                market opportunities, architecting scalable solutions, and driving products from concept to
                market. Whether building AI-native platforms, Web3 infrastructure, or mobile apps, I combine
                deep technical knowledge with business acumen to ship impactful solutions.
              </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link to="/contact" className="btn btn-primary">Start a project <ArrowRight className="w-4 h-4" /></Link>
              <Link to="/experience" className="btn btn-ghost">View experience</Link>
            </div>
            </div>
          </motion.div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
