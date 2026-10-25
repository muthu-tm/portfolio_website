import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';

interface Project {
  name: string;
  tagline: string;
  category: string;
  link?: string;
  aiNative?: boolean;
  pillars: { title: string; description: string }[];
  skills: string;
}

const projects: Project[] = [
  {
    name: 'Governed Asset Agents',
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
    pillars: [
      { title: 'Forecasting & Anomaly Detection', description: 'A predictive engine for healthcare HVAC systems using time-series forecasting and anomaly detection to flag performance and maintenance needs from real-time sensor data.' },
      { title: 'Operational Efficiency', description: 'Turns raw IoT telemetry into actionable predictions that improve energy efficiency and reduce unplanned downtime in critical facilities.' },
      { title: 'MLOps Pipeline', description: 'Serves predictions through serverless AWS pipelines with MLflow tracking and drift monitoring, built for reliability in healthcare environments.' },
    ],
    skills: 'Python, Databricks, Time-Series Forecasting, Anomaly Detection, MLflow, Drift Monitoring, AWS, IoT Data',
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

const categories = ['AI-Native', 'Web3 & Ventures'];

const fade = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.5 },
};

export default function Works() {
  return (
    <div className="pt-[68px]">
      <header className="wrap pt-16 md:pt-20 pb-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <p className="eyebrow mb-4">Portfolio</p>
          <h1 className="text-[clamp(36px,5vw,56px)] mb-5">Selected works</h1>
          <p className="text-lg md:text-xl t-soft max-w-[52ch]">
            AI-native products and entrepreneurial ventures spanning agentic systems, Web3, and mobile apps.
          </p>
        </motion.div>
      </header>

      <main className="wrap pb-16 md:pb-24">
        {categories.map((category) => {
          const items = projects.filter((p) => p.category === category);
          return (
            <section key={category} className="pt-10 md:pt-14" aria-label={category}>
              <motion.h2 {...fade} className="text-xl md:text-2xl t-accent mb-8 flex items-center gap-3">
                <span className="h-px w-8 bg-[var(--accent)] inline-block" />
                {category}
              </motion.h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                {items.map((project) => (
                  <motion.article {...fade} key={project.name} className="card-soft rounded-2xl p-6 md:p-8">
                    <div className="flex justify-between items-start gap-3 mb-4">
                      <div>
                        <div className="t-mono text-[11px] t-accent-2 tracking-[0.08em] uppercase mb-1.5">{project.category}</div>
                        <h3 className="text-xl md:text-2xl t-strong mb-1">{project.name}</h3>
                        <p className="text-sm t-accent">{project.tagline}</p>
                      </div>
                      {project.link && (
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="t-accent-2 hover:opacity-70 transition-opacity" aria-label={`Visit ${project.name}`}>
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      )}
                    </div>

                    <div className="space-y-3 mb-5">
                      {project.pillars.map((p) => (
                        <div key={p.title}>
                          <h4 className="text-sm t-accent-2 mb-0.5 t-serif">{p.title}</h4>
                          <p className="text-sm t-soft">{p.description}</p>
                        </div>
                      ))}
                    </div>

                    <div className="pt-4 divider-line">
                      <p className="t-mono text-[11px] t-muted mb-2.5 uppercase tracking-[0.1em]">Tech Stack</p>
                      <div className="flex flex-wrap gap-2">
                        {project.skills.split(', ').map((s) => <span key={s} className="tag">{s}</span>)}
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </section>
          );
        })}

        <motion.div {...fade} className="mt-14 surface rounded-2xl p-8 md:p-10">
          <h3 className="text-xl md:text-2xl t-accent mb-3">Entrepreneur mindset</h3>
          <p className="t-soft text-sm md:text-base max-w-[70ch]">
            Beyond technical depth, I bring an entrepreneurial mindset to every project — identifying
            market opportunities, architecting scalable solutions, and driving products from concept to
            market. Whether building AI-native platforms, Web3 infrastructure, or mobile apps, I combine
            deep technical knowledge with business acumen to ship impactful solutions.
          </p>
        </motion.div>
      </main>

      <footer className="wrap py-10 md:py-12 divider-line">
        <div className="flex justify-between items-center flex-wrap gap-4 text-[13px] t-muted">
          <span>© 2026 Muthu Thavamani</span>
          <span className="t-mono">AI-Native Engineer · Technical Architect</span>
        </div>
      </footer>
    </div>
  );
}
