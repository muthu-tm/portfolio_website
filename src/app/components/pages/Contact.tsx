import { motion } from 'motion/react';
import { Mail, Linkedin, Github, Send, ArrowRight, Download } from 'lucide-react';
import { useState } from 'react';

const availability = [
  'Forward-Deployed AI Engineering',
  'Generative AI & Agentic System Design',
  'Data Engineering & Technical Architecture',
  'Team Leadership & Mentoring',
];

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSd6AwQzLhc2ZZ1Mm7g6TRUsERX8vX4a1QRr0k-od4OEwSma-Q/viewform?usp=dialog', '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="pt-[68px]">
      <header className="wrap pt-16 md:pt-20 pb-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <p className="eyebrow mb-4">Contact</p>
          <h1 className="text-[clamp(36px,5vw,56px)] mb-5">Let's build together</h1>
          <p className="text-lg md:text-xl t-soft max-w-[48ch]">
            I embed with teams as a Forward Deployed Engineer — taking Generative AI, agentic systems,
            and data platforms from discovery to production. Tell me where you're headed.
          </p>
        </motion.div>
      </header>

      <main className="wrap pb-16 md:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="surface rounded-2xl p-6 md:p-8"
          >
            <h2 className="text-xl md:text-2xl t-strong mb-6">Send a message</h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              {[
                { id: 'name', label: 'Name', type: 'text' },
                { id: 'email', label: 'Email', type: 'email' },
                { id: 'subject', label: 'Subject', type: 'text' },
              ].map((f) => (
                <div key={f.id}>
                  <label htmlFor={f.id} className="block text-sm t-muted mb-2">{f.label}</label>
                  <input
                    type={f.type}
                    id={f.id}
                    name={f.id}
                    value={(formData as Record<string, string>)[f.id]}
                    onChange={handleChange}
                    className="input-field"
                    required
                  />
                </div>
              ))}
              <div>
                <label htmlFor="message" className="block text-sm t-muted mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="input-field resize-none"
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary w-full justify-center">
                <Send className="w-4 h-4" /> Send Message
              </button>
            </form>
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-6"
          >
            <div className="surface rounded-2xl p-6 md:p-8">
              <h2 className="text-xl md:text-2xl t-strong mb-5">Connect</h2>
              <div className="space-y-3">
                {[
                  { icon: Mail, label: 'Email', sub: 'muthu.thavamani.03@gmail.com', href: 'mailto:muthu.thavamani.03@gmail.com' },
                  { icon: Linkedin, label: 'LinkedIn', sub: 'Connect professionally', href: 'https://www.linkedin.com/in/muthu-thavamani' },
                  { icon: Github, label: 'GitHub', sub: 'View my code', href: 'https://github.com/muthu-tm' },
                ].map((c) => {
                  const Icon = c.icon;
                  return (
                    <a
                      key={c.label}
                      href={c.href}
                      target={c.href.startsWith('http') ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 rounded-xl border border-[var(--line)] hover:border-[var(--accent)] transition-colors group"
                    >
                      <Icon className="w-5 h-5 t-accent flex-shrink-0" />
                      <div>
                        <p className="text-sm t-strong">{c.label}</p>
                        <p className="text-xs t-muted">{c.sub}</p>
                      </div>
                    </a>
                  );
                })}

                <a
                  href="/Muthaiya-Thavamani-Resume.pdf"
                  download
                  className="flex items-center gap-4 p-4 rounded-xl border border-[var(--line)] hover:border-[var(--accent)] transition-colors group"
                >
                  <Download className="w-5 h-5 t-accent flex-shrink-0" />
                  <div>
                    <p className="text-sm t-strong">Résumé</p>
                    <p className="text-xs t-muted">Download PDF</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="surface rounded-2xl p-6 md:p-8">
              <h3 className="text-lg t-accent mb-4 t-serif">Available for</h3>
              <ul className="space-y-3 text-sm t-soft">
                {availability.map((a) => (
                  <li key={a} className="flex items-center gap-3">
                    <ArrowRight className="w-4 h-4 t-accent-2 flex-shrink-0" />
                    {a}
                  </li>
                ))}
              </ul>
            </div>

            <div className="surface rounded-2xl p-6 md:p-8">
              <p className="t-soft italic text-base md:text-lg mb-4 t-serif">
                "A Forward Deployed AI engineer with 11 years of experience and an entrepreneur's
                mindset — embedding with teams to ship Generative AI from discovery to production."
              </p>
              <div className="h-1 w-20 rounded brand-gradient-bar bg-gradient-to-r from-[var(--accent)] to-[var(--accent-2)]" />
            </div>
          </motion.div>
        </div>
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
