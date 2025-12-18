import { ArrowRight, Award, Code, Rocket, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export default function Home() {
  return (
    <div className="pt-16 md:pt-20">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 to-gray-900/40" />
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1660810731526-0720827cbd38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGVuZ2luZWVyJTIwd29ya3NwYWNlfGVufDF8fHx8MTc2NjAzNzA4M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring' }}
              className="inline-block px-3 md:px-4 py-2 bg-emerald-600/20 border border-emerald-400/30 rounded-full mb-4 md:mb-6"
            >
              <span className="text-sm md:text-base text-emerald-400">10+ Years of Excellence</span>
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl mb-4 md:mb-6 text-white">
              Deep Tech <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-yellow-400">Expert</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 mb-6 md:mb-8 leading-relaxed">
              Blockchain Architect • Data Engineer • Full-Stack Developer
            </p>
            
            <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto mb-8 md:mb-12 px-4">
              A decade of building cutting-edge solutions across Web3, distributed systems, 
              data pipelines, and enterprise applications. From protocol engineering to 
              serverless architectures, I transform complex technical challenges into scalable solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
              <Link 
                to="/experience"
                className="px-6 md:px-8 py-3 md:py-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg flex items-center justify-center gap-2 transition-all transform hover:scale-105"
              >
                View Experience
                <ArrowRight className="w-5 h-5" />
              </Link>
              
              <Link 
                to="/works"
                className="px-6 md:px-8 py-3 md:py-4 border-2 border-emerald-600 text-emerald-400 hover:bg-emerald-600/10 rounded-lg transition-all"
              >
                See Projects
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-12 md:py-20 bg-gray-900/50">
        <div className="container mx-auto px-4 md:px-6">
          {/* Lead Engineer Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto mb-12 md:mb-16 text-center"
          >
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed px-4">
              A <span className="text-emerald-400">Lead Polyglot Engineer</span> and{' '}
              <span className="text-emerald-400">Technical Architect</span> with a decade of experience 
              in building high-stakes systems from the ground up. My career is defined by a{' '}
              <span className="text-yellow-400">"0 to 1" mindset</span>, having navigated multiple 
              Web2 and Web3 startups through their most critical growth phases.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
          >
            <div className="p-6 md:p-8 bg-gradient-to-br from-emerald-900/30 to-gray-800/30 rounded-xl border border-emerald-700/30">
              <Code className="w-10 h-10 md:w-12 md:h-12 text-yellow-400 mb-4" />
              <h3 className="text-xl md:text-2xl mb-3 text-white">Technical Breadth</h3>
              <p className="text-gray-400">
                Mastery across blockchain protocols, distributed systems, data engineering, 
                and full-stack development with expertise in 10+ programming languages.
              </p>
            </div>
            
            <div className="p-6 md:p-8 bg-gradient-to-br from-emerald-900/30 to-gray-800/30 rounded-xl border border-emerald-700/30">
              <Award className="w-10 h-10 md:w-12 md:h-12 text-yellow-400 mb-4" />
              <h3 className="text-xl md:text-2xl mb-3 text-white">Impact at Scale</h3>
              <p className="text-gray-400">
                Issued 400K+ DIDs, processed millions of API requests daily, 
                and architected systems handling complex multi-chain operations.
              </p>
            </div>
            
            <div className="p-6 md:p-8 bg-gradient-to-br from-emerald-900/30 to-gray-800/30 rounded-xl border border-emerald-700/30">
              <Rocket className="w-10 h-10 md:w-12 md:h-12 text-yellow-400 mb-4" />
              <h3 className="text-xl md:text-2xl mb-3 text-white">Entrepreneur Spirit</h3>
              <p className="text-gray-400">
                Founded multiple startups including Crypit.app and 3suite, 
                bringing innovative Web3 solutions to market.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Technology Skills Table */}
      <section className="py-12 md:py-20 bg-gray-900/30">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-8 md:mb-12 text-center"
          >
            <h2 className="text-3xl md:text-4xl mb-4 text-white px-4">
              Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-yellow-400">Arsenal</span>
            </h2>
            <p className="text-gray-400 text-base md:text-lg px-4">
              A comprehensive overview of technologies and their real-world applications
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}>
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl border border-emerald-700/30 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-emerald-900/30 border-b border-emerald-700/30">
                      <th className="px-3 md:px-6 py-3 md:py-4 text-left text-sm md:text-base text-emerald-400">Category</th>
                      <th className="px-3 md:px-6 py-3 md:py-4 text-left text-sm md:text-base text-emerald-400">Key Technologies</th>
                      <th className="px-3 md:px-6 py-3 md:py-4 text-left text-sm md:text-base text-emerald-400 hidden lg:table-cell">Applied Experience & Projects</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700/30">
                    <tr className="hover:bg-emerald-900/10 transition-colors">
                      <td className="px-3 md:px-6 py-3 md:py-4 text-sm md:text-base text-yellow-400">Languages</td>
                      <td className="px-3 md:px-6 py-3 md:py-4 text-sm md:text-base text-gray-300">
                        Golang, Python, Solidity, JS/TS (NodeJS), Java, Dart
                      </td>
                      <td className="px-3 md:px-6 py-3 md:py-4 text-sm md:text-base text-gray-400 hidden lg:table-cell">
                        Core backend services for <span className="text-emerald-400">Securex AI</span>, 
                        smart contracts for <span className="text-emerald-400">Coinfantasy</span>, 
                        and IoT algorithms for HVAC platforms.
                      </td>
                    </tr>
                    
                    <tr className="hover:bg-emerald-900/10 transition-colors">
                      <td className="px-3 md:px-6 py-3 md:py-4 text-sm md:text-base text-yellow-400">Web3 & Blockchain</td>
                      <td className="px-3 md:px-6 py-3 md:py-4 text-sm md:text-base text-gray-300">
                        EVM (Solidity), Cosmos SDK, Hyperledger Fabric, Tezos (SmartPy), 
                        Polygon CDK, Avalanche Subnets, Privado ID (DID/VC)
                      </td>
                      <td className="px-3 md:px-6 py-3 md:py-4 text-sm md:text-base text-gray-400 hidden lg:table-cell">
                        Developed <span className="text-emerald-400">400K+ DIDs</span> for Turf Network, 
                        architected multi-chain wallets, and built the 3suite NFT marketplace and utility tools.
                      </td>
                    </tr>
                    
                    <tr className="hover:bg-emerald-900/10 transition-colors">
                      <td className="px-3 md:px-6 py-3 md:py-4 text-sm md:text-base text-yellow-400">Data Engineering</td>
                      <td className="px-3 md:px-6 py-3 md:py-4 text-sm md:text-base text-gray-300">
                        Databricks (Certified), Airflow, AWS Glue, PySpark, Teradata, Serverless ETL
                      </td>
                      <td className="px-3 md:px-6 py-3 md:py-4 text-sm md:text-base text-gray-400 hidden lg:table-cell">
                        Led enterprise migrations to <span className="text-emerald-400">Salesforce</span>, 
                        built automated delta-load systems for <span className="text-emerald-400">millions of records</span>, 
                        and managed metadata extraction for Elsevier.
                      </td>
                    </tr>
                    
                    <tr className="hover:bg-emerald-900/10 transition-colors">
                      <td className="px-3 md:px-6 py-3 md:py-4 text-sm md:text-base text-yellow-400">Mobile & Frontend</td>
                      <td className="px-3 md:px-6 py-3 md:py-4 text-sm md:text-base text-gray-300">
                        Flutter, React Native, ReactJS
                      </td>
                      <td className="px-3 md:px-6 py-3 md:py-4 text-sm md:text-base text-gray-400 hidden lg:table-cell">
                        Developed the Unique Foods app (<span className="text-emerald-400">5K+ users</span>), 
                        the Crypit.app super-app interface, and mobile IoT management dashboards.
                      </td>
                    </tr>
                    
                    <tr className="hover:bg-emerald-900/10 transition-colors">
                      <td className="px-3 md:px-6 py-3 md:py-4 text-sm md:text-base text-yellow-400">Backend & APIs</td>
                      <td className="px-3 md:px-6 py-3 md:py-4 text-sm md:text-base text-gray-300">
                        FastAPI, ExpressJS, Hasura (GraphQL), gRPC, FIX Protocol
                      </td>
                      <td className="px-3 md:px-6 py-3 md:py-4 text-sm md:text-base text-gray-400 hidden lg:table-cell">
                        Engineered high-concurrency game schedulers, modern serverless API platforms 
                        handling <span className="text-emerald-400">millions of daily requests</span>, 
                        and financial clearing systems.
                      </td>
                    </tr>
                    
                    <tr className="hover:bg-emerald-900/10 transition-colors">
                      <td className="px-3 md:px-6 py-3 md:py-4 text-sm md:text-base text-yellow-400">Databases</td>
                      <td className="px-3 md:px-6 py-3 md:py-4 text-sm md:text-base text-gray-300">
                        PostgreSQL, MySQL, MongoDB, DynamoDB, Cloud Firestore
                      </td>
                      <td className="px-3 md:px-6 py-3 md:py-4 text-sm md:text-base text-gray-400 hidden lg:table-cell">
                        Implemented real-time synchronization via DynamoDB Streams and managed 
                        microservice data layers using Firestore.
                      </td>
                    </tr>
                    
                    <tr className="hover:bg-emerald-900/10 transition-colors">
                      <td className="px-3 md:px-6 py-3 md:py-4 text-sm md:text-base text-yellow-400">Cloud & Infra</td>
                      <td className="px-3 md:px-6 py-3 md:py-4 text-sm md:text-base text-gray-300">
                        AWS, GCP, Azure, Docker, Serverless, Nginx-RTMP
                      </td>
                      <td className="px-3 md:px-6 py-3 md:py-4 text-sm md:text-base text-gray-400 hidden lg:table-cell">
                        Designed multi-cloud infrastructures spanning AWS/GCP and developed 
                        custom serverless live-streaming systems.
                      </td>
                    </tr>
                    
                    <tr className="hover:bg-emerald-900/10 transition-colors">
                      <td className="px-3 md:px-6 py-3 md:py-4 text-sm md:text-base text-yellow-400">AI & Specialized</td>
                      <td className="px-3 md:px-6 py-3 md:py-4 text-sm md:text-base text-gray-300">
                        Tensorflow Posenet, OCR Engines, NVD Vulnerability Source
                      </td>
                      <td className="px-3 md:px-6 py-3 md:py-4 text-sm md:text-base text-gray-400 hidden lg:table-cell">
                        Built fitness-tracking AI MVPs, intelligent document processors, 
                        and automated security vulnerability remediation services.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Certification Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <div className="bg-gradient-to-br from-emerald-900/30 to-gray-800/30 rounded-xl p-8 border border-emerald-700/30 text-center">
              <GraduationCap className="w-16 h-16 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-2xl text-white mb-2">Certification</h3>
              <p className="text-emerald-400 text-xl">Databricks Certified Professional</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-900 border-t border-emerald-800/30">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <p className="text-2xl text-gray-300 italic mb-4">
              "The best way to predict the future is to create it." – Peter Drucker
            </p>
            <p className="text-gray-500">© 2024 Deep Tech Engineer. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}