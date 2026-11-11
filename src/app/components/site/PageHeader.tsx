import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import TraceArt from './TraceArt';

interface PageHeaderProps {
  /** Breadcrumb label for this page (rendered as Home / {crumb}). */
  crumb: string;
  eyebrow: string;
  title: ReactNode;
  lead: ReactNode;
}

/**
 * Sub-page hero: visible breadcrumb (matches the BreadcrumbList JSON-LD),
 * eyebrow, H1 and lead, over the circuit-trace line motif. No entrance
 * animation on the H1 so it paints immediately (LCP).
 */
export default function PageHeader({ crumb, eyebrow, title, lead }: PageHeaderProps) {
  return (
    <header className="relative overflow-hidden">
      <TraceArt className="hero-trace" />
      <div className="wrap relative pt-12 md:pt-20 pb-28 lg:pb-16">
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex items-center gap-2 t-mono text-[12px] t-muted">
            <li><Link to="/" className="hover:text-[var(--accent)]">Home</Link></li>
            <li aria-hidden="true">/</li>
            <li aria-current="page" className="t-soft">{crumb}</li>
          </ol>
        </nav>
        <p className="eyebrow mb-5">{eyebrow}</p>
        <h1 className="text-[clamp(40px,5.6vw,64px)] mb-6 t-strong max-w-[18ch]">{title}</h1>
        <p className="text-lg md:text-xl t-soft max-w-[54ch]">{lead}</p>
      </div>
    </header>
  );
}
