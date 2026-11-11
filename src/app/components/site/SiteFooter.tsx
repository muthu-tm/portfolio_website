import { Link } from 'react-router-dom';
import { Linkedin, Github, Mail } from 'lucide-react';
import TraceArt from './TraceArt';

/** Site-wide footer: internal links + identity signals for crawlers. */
export default function SiteFooter() {
  return (
    <footer className="divider-line">
      <TraceArt className="footer-trace" />
      <div className="wrap relative pt-14 pb-28 lg:pb-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr] gap-10">
        <div>
          <p className="t-serif text-[22px] t-strong mb-3">Muthu Thavamani</p>
          <p className="text-sm t-soft max-w-[40ch]">
            Generative AI Engineer, Forward Deployed Engineer and Technical Architect — agentic AI,
            RAG copilots, data engineering and Web3. Based in India, working remotely worldwide.
          </p>
        </div>
        <nav aria-label="Footer">
          <p className="kicker mb-4 !text-[11px]">Site</p>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="t-soft hover:text-[var(--accent)] uppercase tracking-[0.12em] text-[11.5px] font-semibold">Home</Link></li>
            <li><Link to="/experience" className="t-soft hover:text-[var(--accent)] uppercase tracking-[0.12em] text-[11.5px] font-semibold">Experience</Link></li>
            <li><Link to="/works" className="t-soft hover:text-[var(--accent)] uppercase tracking-[0.12em] text-[11.5px] font-semibold">Works</Link></li>
            <li><Link to="/contact" className="t-soft hover:text-[var(--accent)] uppercase tracking-[0.12em] text-[11.5px] font-semibold">Contact</Link></li>
            <li><a href="/Muthaiya-Thavamani-Resume.pdf" className="t-soft hover:text-[var(--accent)] uppercase tracking-[0.12em] text-[11.5px] font-semibold">Résumé (PDF)</a></li>
          </ul>
        </nav>
        <div>
          <p className="kicker mb-4 !text-[11px]">Connect</p>
          <ul className="space-y-2 text-sm">
            <li><a href="https://www.linkedin.com/in/muthu-thavamani" target="_blank" rel="noopener noreferrer me" className="t-soft hover:text-[var(--accent)] inline-flex items-center gap-2"><Linkedin className="w-4 h-4" aria-hidden="true" /> LinkedIn</a></li>
            <li><a href="https://github.com/muthu-tm" target="_blank" rel="noopener noreferrer me" className="t-soft hover:text-[var(--accent)] inline-flex items-center gap-2"><Github className="w-4 h-4" aria-hidden="true" /> GitHub</a></li>
            <li><a href="mailto:muthu.thavamani.03@gmail.com" className="t-soft hover:text-[var(--accent)] inline-flex items-center gap-2"><Mail className="w-4 h-4" aria-hidden="true" /> Email</a></li>
          </ul>
        </div>
      </div>
      <div className="divider-line relative bg-[var(--bg)]">
        <div className="wrap py-6 flex justify-between items-center flex-wrap gap-4 t-mono text-[11px] uppercase tracking-[0.12em] t-muted">
          <span>© 2026 Muthu Thavamani</span>
          <span>AI-Native Engineer · Technical Architect · India / Remote</span>
        </div>
      </div>
    </footer>
  );
}
