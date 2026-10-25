import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';

interface TechPillar {
  title: string;
  description: string;
}

interface ExperienceItem {
  company: string;
  role: string;
  period?: string;
  category: string;
  link?: string;
  aiNative?: boolean;
  pillars: TechPillar[];
  skills: string;
}

const experiences: ExperienceItem[] = [
  {
    company: 'Lead AI Engineer (Contract)',
    role: 'Forward-Deployed AI Delivery',
    period: 'Sep 2025 — Present',
    category: 'AI-Native Engineering & Agentic Systems',
    aiNative: true,
    pillars: [
      { title: 'Governed Asset Agents', description: 'Embedded with the client to build an Enterprise Asset Management system of governed, multi-agent asset agents that predict, analyse, and act on operational data — combining anomaly detection with LLM reasoning, wrapped in guardrails, Responsible AI, and human-in-the-loop review.' },
      { title: 'Universal RAG Copilot (MCP)', description: 'Engineered a RAG Copilot on foundation models (OpenAI, Claude, Hugging Face, LLaMA) that plugs into any system through a secured Model Context Protocol (MCP) connection, using tool/function calling and semantic search over enterprise data — with evaluation keeping responses grounded.' },
      { title: 'Predictive Engine & LLM Document Parser', description: 'Shipped a predictive engine for healthcare HVAC (time-series forecasting and anomaly detection) and an LLM document parser using embeddings, vector search, and RAG to turn unstructured enterprise data into structured output.' },
    ],
    skills: 'Generative AI, LLMs (OpenAI, Claude, Hugging Face, LLaMA), RAG, Fine-Tuning, Vector DBs, Multi-Agent, MCP, Guardrails, Responsible AI, Python, Databricks, FastAPI, AWS',
  },
  {
    company: 'Greenmen Consulting',
    role: 'Lead Data Engineer',
    period: 'Oct 2024 — Aug 2025',
    category: 'AI-Native Engineering & Agentic Systems',
    aiNative: true,
    pillars: [
      { title: 'AIDLC · BRD Multi-Agent Engine', description: 'Designed and delivered the AIDLC (AI Development Life Cycle) BRD engine from ideation to production — orchestrating LangChain / LangGraph multi-agent workflows with LLM evaluation and prompt engineering to automate business requirement generation.' },
      { title: 'Enterprise Data Migration & Governance', description: 'Led end-to-end migration from S3, SQL, Databricks, and Teradata into Salesforce CRM, partnering with data owners to enforce data quality, governance, and compliance.' },
      { title: 'Serverless Delta Loads & Medallion Architecture', description: 'Built a fully serverless system automating delta loads over millions of records, and a Databricks medallion (Bronze/Silver/Gold) architecture feeding communication data to the PowerBI team.' },
    ],
    skills: 'Python, AIDLC, LangChain, LangGraph, Multi-Agent AI, Databricks, PySpark, Delta Lake, Teradata, DynamoDB, ReactJS, AWS',
  },
  {
    company: 'Unibase Labs',
    role: 'Product Development Head',
    period: 'Jun 2022 — Sep 2024',
    category: 'Technical Architecture & Web3 Ecosystems',
    link: 'https://turf.network/',
    pillars: [
      { title: 'Decentralized Identity (DID)', description: 'Built a scalable identity system using Privado ID and Polygon CDK, successfully issuing and managing over 400,000 DIDs to create verifiable gamer profiles.' },
      { title: 'Multi-Chain Infrastructure', description: 'Researched and developed proof-of-concepts for a multi-chain wallet using Cosmos SDK and IBC (Inter-Blockchain Communication), focusing on modularity and cross-chain interoperability.' },
      { title: 'Serverless Launchpad', description: 'Re-architected the Instaraise (Tezos) IDO platform into a serverless backend on AWS, ensuring high availability and secure on-chain fundraising workflows.' },
    ],
    skills: 'Golang, Python, Solidity, Polygon CDK, Tezos (SmartPy), Cosmos SDK, AWS Lambda',
  },
  {
    company: 'Coinfantasy',
    role: 'Lead Blockchain Engineer',
    period: 'Dec 2021 — Jun 2022',
    category: 'Technical Architecture & Web3 Ecosystems',
    link: 'https://www.coinfantasy.io/',
    pillars: [
      { title: 'Smart Contract Development', description: 'Engineered core game mechanics and financial logic through Solidity smart contracts for staking, unstaking, and ERC20 token distribution.' },
      { title: 'High-Concurrency Backend', description: 'Developed a specialized game scheduler service in Golang to manage thousands of parallel gaming events and real-time state updates.' },
      { title: 'Web3 Integrations', description: 'Integrated Biconomy for gasless transactions and connected external providers like Magic.link, Transak, and crypto price oracles.' },
    ],
    skills: 'Golang, Solidity, HardHat, NodeJS, MySQL, MongoDB, AWS',
  },
  {
    company: 'Securex AI',
    role: 'Backend Security Engineer',
    period: 'Oct 2021 — Mar 2022',
    category: 'Data Engineering & Specialized Backend',
    link: 'https://www.securex.ai/',
    pillars: [
      { title: 'Cloud Security Integration', description: 'Integrated multi-cloud security data from Veracode, Dome9, and Qualys into a unified monitoring platform.' },
      { title: 'Vulnerability Intelligence', description: 'Developed a microservice to fetch and map package vulnerabilities and remediations from the NVD (National Vulnerability Database).' },
      { title: 'Asset Discovery', description: 'Built cloud connectors using official AWS and GCP SDKs to dynamically discover and index security assets.' },
    ],
    skills: 'Golang, Python, Hasura (GraphQL), Postgres, AWS/GCP SDKs',
  },
  {
    company: 'Imstrong',
    role: 'Lead Member Technical Staff',
    period: 'Dec 2019 — Nov 2021',
    category: 'IoT, Streaming & Enterprise Systems',
    pillars: [
      { title: 'Serverless Video Architecture', description: 'Developed a custom live-streaming system using nginx-rtmp and Docker, deploying it across a multi-cloud environment (AWS/GCP).' },
      { title: 'AI-Powered Fitness Tracking', description: 'Built an MVP utilizing Tensorflow Posenet to track user movement and provide real-time fitness analysis via the browser.' },
      { title: 'VOD Management', description: 'Engineered a Content Manipulation System for Video-on-Demand (VOD) and an automated notification service for user engagement.' },
    ],
    skills: 'Golang, NodeJS, Cloud Firestore, AWS, GCP, Tensorflow.js',
  },
  {
    company: 'Sysvine Technologies',
    role: 'Software Engineer',
    period: 'Dec 2015 — Nov 2019',
    category: 'IoT, Streaming & Enterprise Systems',
    pillars: [
      { title: 'Enterprise Blockchain (Peloton)', description: 'Wrote ERC20-compatible chaincode in Golang and integrated it with Hyperledger Fabric, building the core system using the Fabric Node SDK.' },
      { title: 'Financial Protocols (Broadridge)', description: 'Developed order and market data management services implementing FIX and FIXML protocols, integrating clearing services via NASDAQ Genium API and IBM MQ.' },
      { title: 'Content Pipelines (Elsevier GeoFacets)', description: 'Built OCR extraction, metadata generation, geotagging, and thumbnail pipelines to digitize complex geological documents for map-based discovery.' },
    ],
    skills: 'Java, Golang, NodeJS, Python, Hyperledger, WebSocket, IBM MQ',
  },
];

const categories = [
  'AI-Native Engineering & Agentic Systems',
  'Technical Architecture & Web3 Ecosystems',
  'Data Engineering & Specialized Backend',
  'IoT, Streaming & Enterprise Systems',
];

const fade = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.5 },
};

export default function Experience() {
  return (
    <div className="pt-[68px]">
      <header className="wrap pt-16 md:pt-20 pb-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <p className="eyebrow mb-4">Career</p>
          <h1 className="text-[clamp(36px,5vw,56px)] mb-5">Professional experience</h1>
          <p className="text-lg md:text-xl t-soft max-w-[52ch]">
            11 years building production systems — a Forward Deployed Engineer across Generative AI,
            data platforms, Web3 protocols, and enterprise applications.
          </p>
        </motion.div>
      </header>

      <main className="wrap pb-16 md:pb-24">
        {categories.map((category) => {
          const items = experiences.filter((e) => e.category === category);
          if (items.length === 0) return null;
          return (
            <section key={category} className="pt-12 md:pt-16" aria-label={category}>
              <motion.h2 {...fade} className="text-xl md:text-2xl t-accent mb-8 flex items-center gap-3">
                <span className="h-px w-8 bg-[var(--accent)] inline-block" />
                {category}
              </motion.h2>
              <div className="space-y-5 md:space-y-6">
                {items.map((exp) => (
                  <motion.article {...fade} key={exp.company} className="card-soft rounded-2xl p-5 md:p-8">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3 mb-5">
                      <div>
                        <div className="flex items-center gap-3 flex-wrap mb-1">
                          <h3 className="text-xl md:text-2xl t-strong">{exp.company}</h3>
                          {exp.aiNative && <span className="badge">AI-Native</span>}
                        </div>
                        <p className="t-accent text-sm md:text-base">{exp.role}</p>
                      </div>
                      <div className="flex items-center gap-3">
                        {exp.period && <span className="t-mono text-[12px] md:text-[13px] t-muted whitespace-nowrap">{exp.period}</span>}
                        {exp.link && (
                          <a href={exp.link} target="_blank" rel="noopener noreferrer" className="t-accent-2 hover:opacity-70 transition-opacity" aria-label={`Visit ${exp.company}`}>
                            <ExternalLink className="w-5 h-5" />
                          </a>
                        )}
                      </div>
                    </div>

                    <div className="space-y-3.5 mb-5">
                      {exp.pillars.map((p) => (
                        <div key={p.title} className="border-l-2 border-[var(--accent)] pl-4">
                          <h4 className="text-sm md:text-base t-accent-2 mb-1 t-serif">{p.title}</h4>
                          <p className="text-sm t-soft">{p.description}</p>
                        </div>
                      ))}
                    </div>

                    <div className="pt-4 divider-line">
                      <p className="t-mono text-[11px] t-muted mb-2.5 uppercase tracking-[0.1em]">Tech Stack</p>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.split(', ').map((s) => <span key={s} className="tag">{s}</span>)}
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </section>
          );
        })}
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
