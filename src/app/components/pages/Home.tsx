import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Cpu, Database, GitBranch, ArrowRight, Download } from 'lucide-react';

const stats = [
  { num: '11', unit: '+', label: 'Years shipping production systems' },
  { num: '4', unit: '×', label: 'AI-native products delivered' },
  { num: '5', unit: '+', label: 'Early-stage startups shaped' },
  { num: '400', unit: 'K+', label: 'Decentralized IDs issued' },
];

const focus = [
  {
    icon: Cpu,
    title: 'Generative AI & Agents',
    body: 'Foundation models (OpenAI, Claude, Hugging Face, LLaMA) applied to governed asset agents, MCP-connected RAG copilots, and LangGraph multi-agent orchestration — with fine-tuning, guardrails, evaluation, and human-in-the-loop controls.',
  },
  {
    icon: Database,
    title: 'Data Engineering',
    body: 'Serverless ETL, medallion architectures, and delta pipelines over millions of records — with governance and validation built in.',
  },
  {
    icon: GitBranch,
    title: 'Architecture & Web3',
    body: 'Protocol engineering, decentralized identity, and scalable backends in Go and Python — from consensus layers to serverless platforms.',
  },
];

const experience = [
  {
    when: 'Sep 2025 — Present',
    role: 'Lead AI Engineer',
    suffix: '· Contract',
    company: 'Forward-Deployed AI Delivery',
    aiNative: true,
    desc: 'Embedded with clients to ship Generative-AI products from discovery to production: governed multi-agent asset agents, a RAG Copilot over secured MCP, a predictive engine for healthcare HVAC, and an LLM document parser with embeddings and vector search.',
    tags: ['Generative AI', 'RAG / MCP', 'Multi-Agent', 'Guardrails', 'Databricks', 'AWS'],
  },
  {
    when: 'Oct 2024 — Aug 2025',
    role: 'Lead Data Engineer',
    company: 'Greenmen Consulting',
    aiNative: true,
    desc: 'Built the AIDLC BRD engine — a LangChain / LangGraph multi-agent system — from ideation to production, led enterprise migration to Salesforce with full governance, and shipped serverless delta loads plus a Databricks medallion architecture.',
    tags: ['AIDLC', 'LangGraph', 'Multi-Agent', 'Databricks', 'Teradata', 'AWS'],
  },
  {
    when: 'Jun 2022 — Sep 2024',
    role: 'Product Development Head',
    company: 'Unibase Labs',
    aiNative: false,
    desc: 'Led an esports GameFi ecosystem from ideation to production — 400K+ decentralized IDs via Privado ID, L1 development on Avalanche Subnet and Polygon CDK, and a re-architected serverless Tezos launchpad.',
    tags: ['Golang', 'Polygon CDK', 'Privado ID', 'Cosmos SDK'],
  },
];

const projects = [
  { tag: 'AI-Native', name: 'Governed Asset Agents', desc: 'Enterprise asset-management agents that forecast failures, analyse operations, and act within policy guardrails — multi-agent, auditable, and governed by Responsible AI and human-in-the-loop controls.', tags: ['Multi-Agent', 'Guardrails', 'Responsible AI', 'Anomaly Detection', 'Databricks'] },
  { tag: 'AI-Native', name: 'Universal AI Copilot', desc: 'A RAG assistant that plugs into any system through a secured MCP connection — using tool/function calling and semantic search to expose one conversational interface over scattered enterprise tools.', tags: ['RAG', 'MCP', 'Tool-Calling', 'Embeddings', 'FastAPI'] },
  { tag: 'AI-Native', name: 'AIDLC · BRD Multi-Agent Engine', desc: 'An AI Development Life Cycle (AIDLC) engine orchestrating LangChain / LangGraph multi-agent workflows that take business requirements from ideation to production, with LLM evaluation and governed medallion data.', tags: ['AIDLC', 'LangGraph', 'LangChain', 'Multi-Agent', 'LLM Evaluation'] },
  { tag: 'AI-Native', name: 'HVAC Predictive Engine', desc: 'Predictive analysis for healthcare HVAC systems — time-series forecasting and anomaly detection that turn real-time telemetry into actions that cut downtime and improve efficiency, with drift monitoring.', tags: ['Forecasting', 'Anomaly Detection', 'MLflow', 'IoT Data', 'AWS'] },
];

const skills = [
  { cat: 'Generative AI & Agentic', vals: 'Generative AI · Foundation Models (OpenAI · Claude · Hugging Face · LLaMA) · LLMs · RAG · Fine-Tuning · Vector DBs · AIDLC · Multi-Agent · LangGraph · LangChain · MCP · Tool-Calling · Prompt Engineering · Embeddings · Semantic Search · Guardrails · Responsible AI · Human-in-the-Loop · LLM Evaluation' },
  { cat: 'Forward-Deployed Delivery', vals: 'Customer-embedded delivery · Discovery · Scoping · System Design · Production Rollout · Stakeholder Collaboration · End-to-End Ownership' },
  { cat: 'MLOps & AI Engineering', vals: 'MLflow · Model Registry · Feature Store · FastAPI · Docker · CI/CD · Drift Detection · Model Monitoring · Computer Vision' },
  { cat: 'Data Engineering', vals: 'Databricks · Airflow · PySpark · AWS Glue · Delta Lake · Serverless ETL' },
  { cat: 'Languages', vals: 'Golang · Python · TypeScript · Solidity · Java · Dart' },
  { cat: 'Web3 & Blockchain', vals: 'EVM · Cosmos SDK · Polygon CDK · Privado ID · Hyperledger' },
  { cat: 'Backend & APIs', vals: 'FastAPI · ExpressJS · Hasura (GraphQL) · gRPC' },
  { cat: 'Cloud & Infra', vals: 'AWS · GCP · Azure · Docker · Serverless' },
];

const fade = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.5 },
};

export default function Home() {
  return (
    <div className="pt-[68px]">
      {/* HERO */}
      <header className="wrap pt-20 md:pt-24 pb-16 md:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1.55fr_1fr] gap-10 lg:gap-16 items-start">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="flex items-center gap-2 t-mono text-[13px] t-soft mb-6">
              <span className="w-2 h-2 rounded-full bg-[var(--accent-2)] shadow-[0_0_0_4px_color-mix(in_srgb,var(--accent-2)_20%,transparent)]" />
              Available for forward-deployed (AI · Data · Web3) Engagements
            </div>
            <p className="eyebrow mb-4">AI-Native Engineer · Technical Architect</p>
            <h1 className="text-[clamp(40px,6vw,66px)] mb-5">
              Shipping <span className="grad-text">Generative AI</span> from discovery to production.
            </h1>
            <p className="text-lg md:text-xl t-soft max-w-[40ch] mb-8">
              11 years turning 0→1 ideas into production systems. I embed with teams as a
              Forward Deployed Engineer — building governed multi-agent AI, RAG copilots over MCP,
              and predictive engines, and owning them end to end.
            </p>
            <div className="flex flex-wrap gap-2 mb-9">
              {['Generative AI', 'Agentic AI', 'RAG & LLMs', 'Forward Deployed', 'Data Engineering'].map((r) => (
                <span key={r} className="pill">{r}</span>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <Link to="/experience" className="btn btn-primary">View Experience <ArrowRight className="w-4 h-4" /></Link>
              <Link to="/works" className="btn btn-ghost">Selected Works</Link>
            </div>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="surface rounded-2xl p-7 w-full"
          >
            <h2 className="t-mono text-[11px] tracking-[0.14em] uppercase t-muted mb-5">Profile</h2>
            {[
              ['Role', 'Lead AI Engineer · Architect'],
              ['Model', 'Forward Deployed'],
              ['Experience', '11 years'],
              ['Focus', 'Generative AI · Agents · Data'],
              ['Certified', 'Databricks Pro'],
              ['Core', 'Go · Python · JS/TS · Solidity'],
              ['Location', 'India · Remote'],
            ].map(([k, v], i, arr) => (
              <div key={k} className={`flex justify-between items-center py-3 text-sm ${i < arr.length - 1 ? 'divider-dashed' : ''}`}>
                <span className="t-muted">{k}</span>
                <span className="t-strong font-medium">{v}</span>
              </div>
            ))}
          </motion.aside>
        </div>
      </header>

      {/* STATS */}
      <section className="wrap pb-16 md:pb-20" aria-label="Key metrics">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--line)] border border-[var(--line)] rounded-2xl overflow-hidden">
          {stats.map((s) => (
            <div key={s.label} className="bg-[var(--bg-elev)] p-6 md:p-7">
              <div className="t-serif text-[34px] leading-none mb-2 t-strong">
                {s.num}<span className="t-accent">{s.unit}</span>
              </div>
              <div className="text-[13px] t-muted">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FOCUS */}
      <section className="wrap py-16 md:py-20 divider-line" aria-labelledby="focus-h">
        <motion.div {...fade} className="mb-10">
          <div className="mb-2"><span className="sec-num">01</span> &nbsp; <span className="eyebrow">What I do</span></div>
          <h2 id="focus-h" className="text-[clamp(28px,3.5vw,38px)]">Focus areas</h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[18px]">
          {focus.map((f) => {
            const Icon = f.icon;
            return (
              <motion.article key={f.title} {...fade} className="card-soft rounded-2xl p-7">
                <div className="w-[42px] h-[42px] rounded-[10px] bg-[var(--accent-soft)] grid place-items-center t-accent mb-[18px]">
                  <Icon className="w-[22px] h-[22px]" strokeWidth={1.8} />
                </div>
                <h3 className="text-xl mb-[10px] t-strong">{f.title}</h3>
                <p className="text-sm t-soft">{f.body}</p>
              </motion.article>
            );
          })}
        </div>
      </section>

      {/* EXPERIENCE PREVIEW */}
      <section className="wrap py-16 md:py-20 divider-line" aria-labelledby="xp-h">
        <motion.div {...fade} className="flex items-end justify-between gap-5 flex-wrap mb-10">
          <div>
            <div className="mb-2"><span className="sec-num">02</span> &nbsp; <span className="eyebrow">Recent</span></div>
            <h2 id="xp-h" className="text-[clamp(28px,3.5vw,38px)]">Selected experience</h2>
          </div>
          <Link to="/experience" className="t-mono text-[13px] t-accent">Full history →</Link>
        </motion.div>
        <div>
          {experience.map((x, i) => (
            <motion.article
              key={x.role}
              {...fade}
              className={`grid grid-cols-1 md:grid-cols-[180px_1fr] gap-3 md:gap-7 py-7 ${i > 0 ? 'divider-line' : ''}`}
            >
              <div className="t-mono text-[13px] t-muted pt-1">{x.when}</div>
              <div>
                <h3 className="text-xl t-serif mb-1 t-strong">
                  {x.role}{x.suffix && <span className="t-muted text-sm font-[family-name:var(--sans)]"> {x.suffix}</span>}
                </h3>
                <div className="text-sm t-accent mb-3 flex items-center gap-3 flex-wrap">
                  {x.company}
                  {x.aiNative && <span className="badge">AI-Native</span>}
                </div>
                <p className="text-sm t-soft mb-3.5">{x.desc}</p>
                <div className="flex flex-wrap gap-[7px]">
                  {x.tags.map((t) => <span key={t} className="tag">{t}</span>)}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section className="wrap py-16 md:py-20 divider-line" aria-labelledby="pr-h">
        <motion.div {...fade} className="flex items-end justify-between gap-5 flex-wrap mb-10">
          <div>
            <div className="mb-2"><span className="sec-num">03</span> &nbsp; <span className="eyebrow">Flagship</span></div>
            <h2 id="pr-h" className="text-[clamp(28px,3.5vw,38px)]">Selected works</h2>
          </div>
          <Link to="/works" className="t-mono text-[13px] t-accent">All projects →</Link>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[18px]">
          {projects.map((p) => (
            <motion.article key={p.name} {...fade} className="card-soft rounded-2xl p-7">
              <div className="t-mono text-[11px] t-accent-2 tracking-[0.08em] uppercase mb-1">{p.tag}</div>
              <h3 className="text-xl mb-2 t-strong">{p.name}</h3>
              <p className="text-sm t-soft mb-4">{p.desc}</p>
              <div className="flex flex-wrap gap-[7px]">
                {p.tags.map((t) => <span key={t} className="tag">{t}</span>)}
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* SKILLS */}
      <section className="wrap py-16 md:py-20 divider-line" aria-labelledby="sk-h">
        <motion.div {...fade} className="mb-10">
          <div className="mb-2"><span className="sec-num">04</span> &nbsp; <span className="eyebrow">Toolbox</span></div>
          <h2 id="sk-h" className="text-[clamp(28px,3.5vw,38px)]">Technical arsenal</h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[var(--line)] border border-[var(--line)] rounded-2xl overflow-hidden">
          {skills.map((s) => (
            <div key={s.cat} className="bg-[var(--bg-elev)] px-6 py-5 grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-2 sm:gap-[18px] sm:items-center">
              <div className="text-[13px] t-accent font-semibold">{s.cat}</div>
              <div className="text-[13px] t-soft">{s.vals}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="wrap py-16 md:py-20 divider-line">
        <motion.div {...fade} className="surface rounded-[18px] p-10 md:p-14 text-center">
          <p className="eyebrow mb-3.5">Let's build</p>
          <h2 className="text-[clamp(28px,4vw,42px)] mb-4">Have a Generative-AI problem worth solving?</h2>
          <p className="t-soft max-w-[46ch] mx-auto mb-7">
            I embed with teams as a Forward Deployed Engineer — taking agentic systems and data
            platforms from discovery to production. Let's talk about where you're headed.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link to="/contact" className="btn btn-primary">Get in touch <ArrowRight className="w-4 h-4" /></Link>
            <a
              href="/Muthaiya-Thavamani-Resume.pdf"
              download
              className="btn btn-ghost"
            >
              <Download className="w-4 h-4" /> Download Résumé
            </a>
          </div>
        </motion.div>
      </section>

      {/* FOOTER */}
      <footer className="wrap py-10 md:py-12 divider-line">
        <div className="flex justify-between items-center flex-wrap gap-4 text-[13px] t-muted">
          <span>© 2026 Muthu Thavamani</span>
          <span className="t-mono">AI-Native Engineer · Technical Architect</span>
        </div>
      </footer>
    </div>
  );
}
