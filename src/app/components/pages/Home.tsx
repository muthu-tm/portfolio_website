import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Cpu, Database, GitBranch, ArrowRight, Download } from 'lucide-react';
import TraceArt from '../site/TraceArt';
import SiteFooter from '../site/SiteFooter';
import { usePageMeta } from '../../seo/usePageMeta';

const stats = [
  { num: '11', unit: '+', label: 'Years shipping production systems' },
  { num: '5', unit: '+', label: 'AI-native products delivered' },
  { num: '5', unit: '+', label: 'Early-stage startups shaped' },
  { num: 'Databricks', unit: '', label: 'Certified Professional' },
];

const profile: [string, string][] = [
  ['Role', 'Lead AI Engineer · Technical Architect'],
  ['Model', 'Forward Deployed Engineer'],
  ['Experience', '11 years'],
  ['Focus', 'Generative AI · Agentic AI · Data'],
  ['Certified', 'Databricks Professional'],
  ['Core', 'Go · Python · TypeScript · Solidity'],
  ['Location', 'India · Remote'],
];

const focus = [
  {
    icon: Cpu,
    title: 'Generative AI & Agentic Systems',
    img: '/images/generative-ai-agentic-systems.svg',
    alt: 'Agentic AI illustration: an LLM and RAG context feed a LangGraph orchestrator that coordinates planner, analyst and action agents within guardrails.',
    body: 'Foundation models (OpenAI, Claude, Hugging Face, LLaMA) applied to governed asset agents, MCP-connected RAG copilots, and LangGraph multi-agent orchestration — with fine-tuning, guardrails, evaluation, and human-in-the-loop controls.',
    tags: ['Multi-Agent', 'RAG', 'MCP', 'LangGraph'],
  },
  {
    icon: Database,
    title: 'Data Engineering & MLOps',
    img: '/images/data-engineering-medallion-pipeline.svg',
    alt: 'Databricks medallion architecture illustration: ERP, CRM and IoT sources flow through bronze, silver and gold layers into BI, ML and RAG serving.',
    body: 'Serverless ETL, Databricks medallion architectures, and delta pipelines over millions of records — with governance, validation, MLflow model registry and drift monitoring built in.',
    tags: ['Databricks', 'Delta Lake', 'PySpark', 'MLflow'],
  },
  {
    icon: GitBranch,
    title: 'Technical Architecture & Web3',
    img: '/images/web3-distributed-systems-architecture.svg',
    alt: 'Web3 protocol illustration: linked blocks secured by a network of validator nodes, with consensus and decentralized identity.',
    body: 'Protocol engineering, decentralized identity, and scalable backends in Go and Python — from consensus layers to serverless platforms on AWS, Azure and GCP.',
    tags: ['Golang', 'Polygon CDK', 'Cosmos SDK', 'Serverless'],
  },
];

const experience = [
  {
    role: 'Lead AI Engineer',
    type: 'Contract',
    company: 'Forward-Deployed AI Delivery',
    aiNative: true,
    desc: 'Embedded with clients to ship Generative-AI products from discovery to production: governed multi-agent asset agents, a RAG Copilot over secured MCP, a predictive engine for healthcare HVAC, and a governed IT Support Copilot on Azure for multi-tenant organisations.',
    tags: ['Generative AI', 'RAG / MCP', 'Multi-Agent', 'Guardrails', 'Azure', 'Databricks', 'AWS'],
  },
  {
    role: 'Lead Data Engineer',
    type: 'Full-time',
    company: 'Greenmen Consulting',
    aiNative: true,
    desc: 'Built the AIDLC BRD engine — a LangChain / LangGraph multi-agent system — from ideation to production, led enterprise migration to Salesforce with full governance, and shipped serverless delta loads plus a Databricks medallion architecture.',
    tags: ['AIDLC', 'LangGraph', 'Multi-Agent', 'Databricks', 'Teradata', 'AWS'],
  },
  {
    role: 'Product Development Head',
    type: 'Full-time',
    company: 'Unibase Labs',
    aiNative: false,
    desc: 'Led an esports GameFi ecosystem from ideation to production — 400K+ decentralized IDs via Privado ID, L1 development on Avalanche Subnet and Polygon CDK, and a re-architected serverless Tezos launchpad.',
    tags: ['Golang', 'Polygon CDK', 'Privado ID', 'Cosmos SDK'],
  },
];

const projects = [
  { tag: 'AI-Native', name: 'Governed Asset Agents', img: '/images/governed-asset-agents-predictive-maintenance.svg', alt: 'Governed asset agent illustration: a vibration forecast flags failure risk on a pump and the agent drafts a work order that passes policy checks and awaits human approval.', desc: 'Enterprise asset-management agents that forecast failures, analyse operations, and act within policy guardrails — multi-agent, auditable, and governed by Responsible AI and human-in-the-loop controls.', tags: ['Multi-Agent', 'Guardrails', 'Responsible AI', 'Anomaly Detection', 'Databricks'] },
  { tag: 'AI-Native', name: 'Universal AI Copilot', img: '/images/universal-ai-copilot-mcp-rag.svg', alt: 'Universal AI copilot illustration: a RAG chat assistant calls CRM, ERP, ticketing and knowledge-base tools through a secured Model Context Protocol (MCP) gateway.', desc: 'A RAG assistant that plugs into any system through a secured MCP connection — using tool/function calling and semantic search to expose one conversational interface over scattered enterprise tools.', tags: ['RAG', 'MCP', 'Tool-Calling', 'Embeddings', 'FastAPI'] },
  { tag: 'AI-Native', name: 'AIDLC · BRD Multi-Agent Engine', img: '/images/aidlc-brd-multi-agent-langgraph-engine.svg', alt: 'AIDLC BRD engine illustration: LangGraph analyst, architect and reviewer agents turn a business requirements document into epics, architecture and a test plan.', desc: 'An AI Development Life Cycle (AIDLC) engine orchestrating LangChain / LangGraph multi-agent workflows that take business requirements from ideation to production, with LLM evaluation and governed medallion data.', tags: ['AIDLC', 'LangGraph', 'LangChain', 'Multi-Agent', 'LLM Evaluation'] },
  { tag: 'AI-Native', name: 'HVAC Predictive Engine', hidden: true, img: '', alt: '', desc: 'Predictive analysis for healthcare HVAC systems — time-series forecasting and anomaly detection that turn real-time telemetry into actions that cut downtime and improve efficiency, with drift monitoring.', tags: ['Forecasting', 'Anomaly Detection', 'MLflow', 'IoT Data', 'AWS'] },
  { tag: 'AI-Native', name: 'IT Support Copilot', img: '/images/it-support-copilot-hybrid-rag-azure.svg', alt: 'IT Support Copilot illustration: hybrid pgvector and BM25 search fused with RRF produces a cited, grounded answer with a groundedness score and auto-escalation to IT.', desc: 'A policy-driven, governed AI copilot for multi-tenant organisations — a governed agentic workflow with three-tier RAG (hybrid pgvector + BM25, RRF fusion) on Azure, grounded by content filtering and groundedness evaluation, with structured auto-escalation to IT.', tags: ['RAG', 'pgvector', 'Azure AI Foundry', 'Copilot Studio', 'Guardrails'] },
];

const skills = [
  { cat: 'Generative AI & Agentic', vals: 'Generative AI · Foundation Models (OpenAI · Claude · Hugging Face · LLaMA) · LLMs · RAG · Hybrid Search (RRF) · pgvector · Fine-Tuning · Vector DBs · AIDLC · Multi-Agent · LangGraph · LangChain · MCP · Tool-Calling · Prompt Engineering · Embeddings · Semantic Search · Guardrails · Responsible AI · Human-in-the-Loop · LLM Evaluation · Groundedness Evaluation' },
  { cat: 'Forward-Deployed Delivery', vals: 'Customer-embedded delivery · Discovery · Scoping · System Design · Production Rollout · Stakeholder Collaboration · End-to-End Ownership' },
  { cat: 'MLOps & AI Engineering', vals: 'MLflow · Model Registry · Feature Store · FastAPI · Docker · CI/CD · Drift Detection · Model Monitoring · Computer Vision' },
  { cat: 'Data Engineering', vals: 'Databricks · Airflow · PySpark · AWS Glue · Delta Lake · Serverless ETL' },
  { cat: 'Languages', vals: 'Golang · Python · TypeScript · Solidity · Java · Dart' },
  { cat: 'Web3 & Blockchain', vals: 'EVM · Cosmos SDK · Polygon CDK · Privado ID · Hyperledger' },
  { cat: 'Backend & APIs', vals: 'FastAPI · ExpressJS · Hasura (GraphQL) · gRPC' },
  { cat: 'Cloud & Infra', vals: 'AWS · GCP · Azure · Azure AI Foundry · Copilot Studio · PostgreSQL/pgvector · Docker · Serverless' },
];

/** Visible FAQ — also emitted as FAQPage JSON-LD below, so the two never drift. */
const faqs = [
  {
    q: 'What does a Forward Deployed Engineer do?',
    a: 'A Forward Deployed Engineer embeds with the client team instead of handing over a spec. I sit with the people who own the problem, scope the outcome, design the architecture, build the Generative AI system, and stay through production rollout — owning delivery end to end.',
  },
  {
    q: 'What kind of Generative AI systems do you build?',
    a: 'Governed multi-agent systems and RAG copilots for enterprises: asset-management agents that forecast failures and act within policy, a universal AI copilot over secured MCP connections, a LangGraph AIDLC engine that turns business requirements into delivery plans, and a multi-tenant IT Support Copilot on Azure with hybrid search.',
  },
  {
    q: 'Which models, frameworks and platforms do you work with?',
    a: 'Foundation models from OpenAI, Anthropic Claude, Hugging Face and LLaMA; LangChain and LangGraph for orchestration; the Model Context Protocol (MCP) for tool access; pgvector, BM25 and reciprocal rank fusion for retrieval; Azure AI Foundry, Copilot Studio, AWS and GCP; Databricks for data; and Go, Python and TypeScript for the services around them.',
  },
  {
    q: 'How do you keep AI systems safe and governed in production?',
    a: 'Guardrails are designed in from day one: content filtering, PII redaction, groundedness evaluation against retrieved sources, human-in-the-loop approval for consequential actions, audit trails for every agent step, and drift and cost monitoring after launch.',
  },
  {
    q: 'Are you available for contract or remote engagements?',
    a: 'Yes. I am based in India and work remotely with teams worldwide on forward-deployed AI, data engineering and Web3 engagements — from a scoped pilot to a full production build.',
  },
];

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': 'https://www.muthuthavamani.com/#faq',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

const fade = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.5 },
};

const pad = (n: number) => String(n).padStart(2, '0');

export default function Home() {
  usePageMeta('/');
  const visibleProjects = projects.filter((p) => !p.hidden);

  return (
    <div className="pt-[68px]">
      {/* HERO — no entrance animation on the H1 so it paints immediately (LCP). */}
      <header className="relative overflow-hidden">
        <TraceArt className="hero-trace" />
        <div className="wrap relative pt-12 sm:pt-16 md:pt-24 pb-28 lg:pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-10 lg:gap-14 items-start">
            <div>
              <div className="flex items-center gap-2.5 t-mono text-[12px] t-soft mb-7">
                <span className="w-2 h-2 bg-[var(--accent-2)] shadow-[0_0_0_4px_color-mix(in_srgb,var(--accent-2)_20%,transparent)]" aria-hidden="true" />
                Available for forward-deployed AI · Data · Web3 engagements
              </div>
              <p className="eyebrow mb-5">Generative AI Engineer · Forward Deployed Engineer</p>
              <h1 className="text-[clamp(42px,6.4vw,74px)] mb-6 t-strong">
                Shipping <span className="em">Generative AI</span> from discovery to production.
              </h1>
              <p className="text-lg md:text-xl t-soft max-w-[46ch] mb-8">
                I'm Muthu Thavamani — an AI-native engineer and technical architect with 11 years
                turning 0→1 ideas into production systems. I embed with teams to build governed
                multi-agent AI, RAG copilots over MCP, and data platforms, and own them end to end.
              </p>
              <ul className="flex flex-wrap gap-2 mb-9" aria-label="Core focus">
                {['Generative AI', 'Agentic AI', 'RAG & LLMs', 'MCP', 'Data Engineering'].map((r) => (
                  <li key={r} className="pill">{r}</li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-3 mb-5">
                <Link to="/contact" className="btn btn-primary">Discuss an AI build <ArrowRight className="w-4 h-4" /></Link>
                <Link to="/works" className="btn btn-ghost">Selected works</Link>
              </div>
              <p className="text-[13px] t-muted">
                Bring one business outcome — I'll scope the path from pilot to production.{' '}
                <Link to="/experience" className="link-mono">View experience →</Link>
              </p>
            </div>

            <aside className="surface profile-card p-6 sm:p-7 w-full" aria-labelledby="profile-h">
              <span className="edge-pulse" aria-hidden="true" />
              <h2 id="profile-h" className="kicker mb-4 !text-[11px]">Profile at a glance</h2>
              <dl>
                {profile.map(([k, v], i) => (
                  <div key={k} className={`flex justify-between items-center gap-4 py-3 text-sm ${i < profile.length - 1 ? 'divider-dashed' : ''}`}>
                    <dt className="t-muted">{k}</dt>
                    <dd className="t-strong font-medium text-right">{v}</dd>
                  </div>
                ))}
              </dl>
            </aside>
          </div>
        </div>
      </header>

      {/* ARCHITECTURE ILLUSTRATION — keyword filename, descriptive alt, fixed dimensions. */}
      <section className="wrap pb-14 md:pb-20" aria-label="Reference architecture">
        <motion.figure {...fade}>
          <div className="figure-ent">
            <img
              src="/images/generative-ai-multi-agent-rag-architecture.svg"
              alt="Reference architecture for a governed multi-agent Generative AI system: enterprise data feeds hybrid RAG retrieval, a LangGraph orchestrator runs agents through an MCP tool gateway, and guardrails with human approval gate the production copilot."
              width={1200}
              height={500}
              decoding="async"
            />
          </div>
          <figcaption className="figcap">
            <span>Illustration — governed multi-agent RAG reference architecture</span>
            <span className="hidden md:inline">Sources → Retrieval → Agents → Guardrails → Production</span>
            <span className="md:hidden t-accent">Swipe to explore →</span>
          </figcaption>
        </motion.figure>
      </section>

      {/* STATS */}
      <section className="wrap pb-16 md:pb-24" aria-label="Key metrics">
        <div className="stats-band grid grid-cols-1 min-[400px]:grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--line)] border border-[var(--line)]">
          {stats.map((s) => {
            const isNumeric = /^\d/.test(s.num);
            return (
              <div key={s.label} className="bg-[var(--bg-elev)] p-5 sm:p-6 md:p-8">
                <div className={`t-serif leading-none mb-3 t-strong ${isNumeric ? 'text-[40px] sm:text-[44px] md:text-[52px]' : 'text-[22px] sm:text-[26px] md:text-[32px] pt-2 md:pt-3'}`}>
                  {s.num}<span className="t-accent">{s.unit}</span>
                </div>
                <div className="text-[13px] t-muted">{s.label}</div>
              </div>
            );
          })}
        </div>
      </section>

      {/* FOCUS */}
      <section className="wrap py-16 md:py-24 divider-line" aria-labelledby="focus-h">
        <motion.div {...fade} className="mb-12">
          <p className="kicker mb-5">01 · Capabilities</p>
          <h2 id="focus-h" className="sec-h">What I build for <span className="em">enterprise teams</span></h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[18px]">
          {focus.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.article
                key={f.title}
                {...fade}
                className={`card-ent flex flex-col ${i === 2 ? 'card-split md:col-span-2 lg:col-span-1' : ''}`}
              >
                <img
                  src={f.img}
                  alt={f.alt}
                  width={480}
                  height={240}
                  loading="lazy"
                  decoding="async"
                  className="card-media"
                />
                <div className="p-7 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-5">
                  <span className="t-mono text-[12px] t-muted">{pad(i + 1)}</span>
                  <Icon className="w-[22px] h-[22px] t-accent" strokeWidth={1.6} aria-hidden="true" />
                </div>
                <h3 className="text-[22px] mb-3 t-strong">{f.title}</h3>
                <p className="text-sm t-soft mb-6">{f.body}</p>
                <div className="flex flex-wrap gap-[7px] mt-auto">
                  {f.tags.map((t) => <span key={t} className="tag">{t}</span>)}
                </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </section>

      {/* EXPERIENCE PREVIEW */}
      <section className="wrap py-16 md:py-24 divider-line" aria-labelledby="xp-h">
        <motion.div {...fade} className="flex items-end justify-between gap-5 flex-wrap mb-10">
          <div>
            <p className="kicker mb-5">02 · Experience</p>
            <h2 id="xp-h" className="sec-h">Recent <span className="em">engagements</span></h2>
          </div>
          <Link to="/experience" className="link-mono">Full history →</Link>
        </motion.div>
        <div className="border-t border-[var(--line)]">
          {experience.map((x) => (
            <motion.article
              key={x.role}
              {...fade}
              className="py-8 border-b border-[var(--line)] grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-3 lg:gap-10"
            >
              <div className="t-mono text-[12px] t-muted uppercase tracking-[0.12em] flex lg:flex-col gap-3 lg:gap-2">
                <span>{x.type}</span>
                {x.aiNative && <span className="t-accent">AI-Native</span>}
              </div>
              <div>
                <h3 className="text-[24px] mb-1 t-strong">{x.role}</h3>
                <p className="text-sm t-accent mb-3">{x.company}</p>
                <p className="text-[15px] t-soft mb-4 max-w-[70ch]">{x.desc}</p>
                <div className="flex flex-wrap gap-[7px]">
                  {x.tags.map((t) => <span key={t} className="tag">{t}</span>)}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section className="wrap py-16 md:py-24 divider-line" aria-labelledby="pr-h">
        <motion.div {...fade} className="flex items-end justify-between gap-5 flex-wrap mb-12">
          <div>
            <p className="kicker mb-5">03 · Selected works</p>
            <h2 id="pr-h" className="sec-h">AI-native products, <span className="em">in production</span></h2>
          </div>
          <Link to="/works" className="link-mono">All projects →</Link>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[18px]">
          {visibleProjects.map((p, i) => (
            <motion.article key={p.name} {...fade} className="card-ent flex flex-col">
              <img src={p.img} alt={p.alt} width={720} height={300} loading="lazy" decoding="async" className="card-media" />
              <div className="p-7 md:p-8 flex flex-col flex-1">
              <div className="flex justify-between items-center mb-5 t-mono text-[11px] tracking-[0.12em] uppercase">
                <span className="t-muted">{pad(i + 1)} / {pad(visibleProjects.length)}</span>
                <span className="badge">{p.tag}</span>
              </div>
              <h3 className="text-[24px] mb-3 t-strong">{p.name}</h3>
              <p className="text-sm t-soft mb-6">{p.desc}</p>
              <div className="flex flex-wrap gap-[7px] mt-auto">
                {p.tags.map((t) => <span key={t} className="tag">{t}</span>)}
              </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* SKILLS */}
      <section className="wrap py-16 md:py-24 divider-line" aria-labelledby="sk-h">
        <motion.div {...fade} className="mb-12">
          <p className="kicker mb-5">04 · Toolbox</p>
          <h2 id="sk-h" className="sec-h">Technical <span className="em">arsenal</span></h2>
        </motion.div>
        <dl className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[var(--line)] border border-[var(--line)]">
          {skills.map((s) => (
            <div key={s.cat} className="bg-[var(--bg-elev)] px-5 sm:px-6 py-5 grid grid-cols-1 sm:grid-cols-[170px_1fr] md:grid-cols-1 lg:grid-cols-[170px_1fr] gap-2 sm:gap-[18px] md:gap-2 lg:gap-[18px] sm:items-start">
              <dt className="t-mono text-[11px] uppercase tracking-[0.12em] t-accent pt-0.5">{s.cat}</dt>
              <dd className="text-[13px] t-soft">{s.vals}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* FAQ */}
      <section className="wrap py-16 md:py-24 divider-line" aria-labelledby="faq-h">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-10 lg:gap-16">
          <motion.div {...fade}>
            <p className="kicker mb-5">05 · FAQ</p>
            <h2 id="faq-h" className="sec-h">Questions teams ask <span className="em">before we start</span></h2>
            <div className="relative hidden lg:block h-[240px] mt-12" aria-hidden="true">
              <TraceArt className="inline-trace" />
            </div>
          </motion.div>
          <div className="faq">
            {faqs.map((f) => (
              <details key={f.q}>
                <summary>{f.q}</summary>
                <p className="answer text-[15px] t-soft">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      </section>

      {/* CTA */}
      <section className="wrap pb-16 md:pb-24">
        <motion.div {...fade} className="panel panel-center">
          <TraceArt className="panel-trace" />
          <TraceArt className="panel-trace panel-trace-left" />
          <div className="panel-body">
            <p className="kicker mb-4">Let's build</p>
            <h2 className="text-[clamp(28px,4vw,44px)] mb-4">Have a Generative-AI problem worth solving?</h2>
            <p className="t-soft max-w-[52ch] mx-auto mb-8">
              I embed with teams as a Forward Deployed Engineer — taking agentic systems and data
              platforms from discovery to production. Let's talk about where you're headed.
            </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link to="/contact" className="btn btn-primary">Get in touch <ArrowRight className="w-4 h-4" /></Link>
            <a href="/Muthaiya-Thavamani-Resume.pdf" download className="btn btn-ghost">
              <Download className="w-4 h-4" /> Download résumé
            </a>
          </div>
          </div>
        </motion.div>
      </section>

      <SiteFooter />
    </div>
  );
}
