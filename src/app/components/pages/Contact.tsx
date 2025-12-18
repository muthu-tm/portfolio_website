import { motion } from 'motion/react';
import { Mail, Linkedin, Github, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Open Google Form in a new tab
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSd6AwQzLhc2ZZ1Mm7g6TRUsERX8vX4a1QRr0k-od4OEwSma-Q/viewform?usp=dialog', '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="pt-16 md:pt-20">
      <div className="container mx-auto px-4 md:px-6 pb-12 md:pb-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12 md:mb-16 pt-6 md:pt-10"
        >
          <h1 className="text-3xl md:text-5xl mb-4 text-white px-4">
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-yellow-400">Touch</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto px-4">
            Let's discuss how we can work together on your next project
          </p>
        </motion.div>

        {/* Contact Content */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-6 md:p-8 border border-emerald-700/30"
            >
              <h2 className="text-xl md:text-2xl text-white mb-6">Send a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm md:text-base text-gray-400 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3 md:px-4 py-2 md:py-3 bg-gray-800/50 border border-emerald-700/30 rounded-lg text-white focus:outline-none focus:border-emerald-600 transition-colors text-sm md:text-base"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm md:text-base text-gray-400 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 md:px-4 py-2 md:py-3 bg-gray-800/50 border border-emerald-700/30 rounded-lg text-white focus:outline-none focus:border-emerald-600 transition-colors text-sm md:text-base"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm md:text-base text-gray-400 mb-2">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-3 md:px-4 py-2 md:py-3 bg-gray-800/50 border border-emerald-700/30 rounded-lg text-white focus:outline-none focus:border-emerald-600 transition-colors text-sm md:text-base"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm md:text-base text-gray-400 mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-3 md:px-4 py-2 md:py-3 bg-gray-800/50 border border-emerald-700/30 rounded-lg text-white focus:outline-none focus:border-emerald-600 transition-colors resize-none text-sm md:text-base"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-4 md:px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg flex items-center justify-center gap-2 transition-all transform hover:scale-[1.02]"
                >
                  <Send className="w-4 h-4 md:w-5 md:h-5" />
                  Send Message
                </button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-6 md:space-y-8"
            >
              {/* Info Card */}
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-6 md:p-8 border border-emerald-700/30">
                <h2 className="text-xl md:text-2xl text-white mb-4 md:mb-6">Connect With Me</h2>
                
                <div className="space-y-3 md:space-y-4">
                  <a
                    href="mailto:muthu.thavamani.03@gmail.com"
                    className="flex items-center gap-3 md:gap-4 p-3 md:p-4 bg-gray-800/30 rounded-lg hover:bg-gray-700/30 transition-colors group"
                  >
                    <Mail className="w-5 h-5 md:w-6 md:h-6 text-emerald-400 group-hover:text-emerald-300 flex-shrink-0" />
                    <div>
                      <p className="text-sm md:text-base text-white">Email</p>
                      <p className="text-xs md:text-sm text-gray-400">muthu.thavamani.03@gmail.com</p>
                    </div>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/muthu-thavamani"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 md:gap-4 p-3 md:p-4 bg-gray-800/30 rounded-lg hover:bg-gray-700/30 transition-colors group"
                  >
                    <Linkedin className="w-5 h-5 md:w-6 md:h-6 text-emerald-400 group-hover:text-emerald-300 flex-shrink-0" />
                    <div>
                      <p className="text-sm md:text-base text-white">LinkedIn</p>
                      <p className="text-xs md:text-sm text-gray-400">Connect professionally</p>
                    </div>
                  </a>

                  <a
                    href="https://github.com/muthu-tm"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 md:gap-4 p-3 md:p-4 bg-gray-800/30 rounded-lg hover:bg-gray-700/30 transition-colors group"
                  >
                    <Github className="w-5 h-5 md:w-6 md:h-6 text-emerald-400 group-hover:text-emerald-300 flex-shrink-0" />
                    <div>
                      <p className="text-sm md:text-base text-white">GitHub</p>
                      <p className="text-xs md:text-sm text-gray-400">View my code</p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Availability Card */}
              <div className="bg-gradient-to-br from-emerald-900/30 to-gray-800/30 rounded-xl p-6 md:p-8 border border-emerald-700/30">
                <h3 className="text-lg md:text-xl text-emerald-400 mb-3 md:mb-4">Available For</h3>
                <ul className="space-y-2 md:space-y-3 text-sm md:text-base text-gray-300">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-emerald-400 rounded-full flex-shrink-0" />
                    Technical Advisory & Consulting
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-emerald-400 rounded-full flex-shrink-0" />
                    Protocol Design & Architecture
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-emerald-400 rounded-full flex-shrink-0" />
                    Full-Stack Development
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-emerald-400 rounded-full flex-shrink-0" />
                    Team Leadership & Mentoring
                  </li>
                </ul>
              </div>

              {/* Quote */}
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-6 md:p-8 border border-emerald-700/30">
                <p className="text-gray-300 italic text-base md:text-lg mb-4">
                  "A deep tech expert with decade of experience and entrepreneur mindset, 
                  transforming complex challenges into elegant, scalable solutions."
                </p>
                <div className="h-1 w-16 md:w-20 bg-gradient-to-r from-emerald-400 to-yellow-400 rounded" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-12 bg-gray-900 border-t border-emerald-800/30">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <p className="text-2xl text-gray-300 italic mb-4">
              "If you want to go fast, go alone. If you want to go far, go together." – African Proverb
            </p>
            <p className="text-gray-500">© 2024 Deep Tech Engineer. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}