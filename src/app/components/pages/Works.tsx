import { motion } from 'motion/react';
import { ExternalLink, Rocket, Sparkles, Coins, ShoppingCart } from 'lucide-react';

interface Project {
  name: string;
  tagline: string;
  link?: string;
  image: string;
  pillars: {
    title: string;
    description: string;
  }[];
  skills: string;
}

const projects: Project[] = [
  {
    name: 'Crypit.app',
    tagline: 'Crypto Super App',
    link: 'https://crypit-2-0--nimble-macaron-e2c8cf.netlify.app/',
    image: 'https://images.unsplash.com/photo-1667422380246-3bed910ffae1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIzJTIwZGV2ZWxvcG1lbnR8ZW58MXx8fHwxNzY2MDM3MDg0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    pillars: [
      {
        title: 'Crypto Super App',
        description: 'Architected a comprehensive "super app" ecosystem designed to simplify crypto interactions, featuring a unified dashboard for asset tracking and DeFi exploration.'
      },
      {
        title: 'User-Centric Web3 UX',
        description: 'Focused on abstracting complex blockchain interactions into a seamless web interface to lower the entry barrier for non-technical users.'
      },
      {
        title: 'Full-Stack Development',
        description: 'Managed the end-to-end lifecycle from UI/UX design on the frontend to the integration of decentralized backend services.'
      }
    ],
    skills: 'ReactJS, Web3.js/Ethers.js, NodeJS, API Integration, Netlify'
  },
  {
    name: '3suite',
    tagline: 'Multi-Chain Utility Suite',
    link: '',
    image: 'https://images.unsplash.com/photo-1631864032173-c2f015fe3459?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibG9ja2NoYWluJTIwdGVjaG5vbG9neSUyMG5ldHdvcmt8ZW58MXx8fHwxNzY2MDMzMjgwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    pillars: [
      {
        title: 'Token Operations Engine',
        description: 'Developed a specialized toolset for token management, including high-efficiency "Token Multi-Sender" and automated airdrop distribution modules.'
      },
      {
        title: 'Cross-Chain Minting',
        description: 'Engineered a "Mint Token" service compatible with multiple EVM chains, allowing users to deploy custom tokens without writing manual code.'
      },
      {
        title: 'Protocol Efficiency',
        description: 'Optimized smart contract calls to minimize gas fees during bulk transactions, ensuring cost-effective token distributions for project owners.'
      }
    ],
    skills: 'Solidity, HardHat, ReactJS, EVM (Ethereum, Polygon, BSC), OpenZeppelin'
  },
  {
    name: 'NFT Marketplace',
    tagline: '3suite Ecosystem',
    link: 'https://3suite-nft-marketplace.netlify.app/',
    image: 'https://images.unsplash.com/photo-1631864032173-c2f015fe3459?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibG9ja2NoYWluJTIwdGVjaG5vbG9neSUyMG5ldHdvcmt8ZW58MXx8fHwxNzY2MDMzMjgwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    pillars: [
      {
        title: 'Marketplace Architecture',
        description: 'Designed and deployed a decentralized NFT marketplace for browsing, minting, and trading digital assets.'
      },
      {
        title: 'Smart Contract Logic',
        description: 'Implemented the core trading engine in Solidity, handling royalties, bidding logic, and secure ownership transfers.'
      },
      {
        title: 'IPFS Integration',
        description: 'Leveraged decentralized storage for NFT metadata and assets to ensure data permanence and censorship resistance.'
      }
    ],
    skills: 'Solidity, Ethers.js, IPFS, ReactJS, Tailwind CSS'
  },
  {
    name: 'Unique Foods',
    tagline: 'Quick-Commerce Mobile App',
    link: '',
    image: 'https://images.unsplash.com/photo-1633250391894-397930e3f5f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXZlbG9wbWVudHxlbnwxfHx8fDE3NjU5NzIzMjV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    pillars: [
      {
        title: 'Local Delivery Ecosystem',
        description: 'Engineered a high-performance Flutter application for a local quick-commerce startup, facilitating real-time food and grocery ordering.'
      },
      {
        title: 'Scalable User Base',
        description: 'Successfully scaled the platform to support over 5,000 active users, ensuring app stability and fast load times during peak hours.'
      },
      {
        title: 'Real-time Logistics',
        description: 'Integrated location-based services and push notification systems to track orders from the local merchant to the customer\'s doorstep.'
      }
    ],
    skills: 'Flutter (Dart), Firebase (Firestore & Auth), Google Maps API, Cloud Functions'
  }
];

export default function Works() {
  const icons = [Rocket, Coins, Sparkles, ShoppingCart];
  
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
            Personal <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-yellow-400">Ventures</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto px-4">
            Entrepreneurial projects showcasing innovation in Web3, mobile apps, and decentralized platforms
          </p>
        </motion.div>

        {/* Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, index) => {
            const Icon = icons[index];
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl overflow-hidden border border-emerald-700/30 hover:border-emerald-600/50 transition-all hover:transform hover:scale-[1.02]"
              >
                {/* Project Image */}
                <div className="relative h-48 md:h-64 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${project.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
                  <div className="absolute bottom-4 left-4 flex items-center gap-2">
                    <Icon className="w-6 h-6 md:w-8 md:h-8 text-yellow-400" />
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-4 md:p-8">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3 md:gap-0 mb-4">
                    <div>
                      <h3 className="text-xl md:text-2xl text-white mb-2">{project.name}</h3>
                      <p className="text-sm md:text-base text-emerald-400">{project.tagline}</p>
                    </div>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-yellow-400 hover:text-yellow-300 transition-colors self-start sm:self-auto"
                      >
                        <ExternalLink className="w-5 h-5 md:w-6 md:h-6" />
                      </a>
                    )}
                  </div>

                  <div className="space-y-3 md:space-y-4 mb-4 md:mb-6">
                    {project.pillars.map((pillar, pIndex) => (
                      <div key={pIndex}>
                        <h4 className="text-sm md:text-base text-yellow-400 mb-1">{pillar.title}</h4>
                        <p className="text-xs md:text-sm text-gray-400">{pillar.description}</p>
                      </div>
                    ))}
                  </div>

                  <div className="pt-3 md:pt-4 border-t border-gray-700">
                    <p className="text-xs md:text-sm text-gray-500 mb-2">Tech Stack:</p>
                    <div className="flex flex-wrap gap-2">
                      {project.skills.split(', ').map((skill, sIndex) => (
                        <span
                          key={sIndex}
                          className="px-2 md:px-3 py-1 bg-emerald-900/30 text-emerald-300 rounded-full text-xs md:text-sm border border-emerald-700/30"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Entrepreneur Statement */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 md:mt-16 p-6 md:p-8 bg-gradient-to-r from-emerald-900/30 to-gray-800/30 rounded-xl border border-emerald-700/30"
        >
          <h3 className="text-xl md:text-2xl text-emerald-400 mb-3 md:mb-4">Entrepreneur Mindset</h3>
          <p className="text-gray-300 text-base md:text-lg">
            Beyond technical expertise, I bring an entrepreneurial mindset to every project. 
            My ventures demonstrate the ability to identify market opportunities, architect 
            scalable solutions, and drive products from concept to market. Whether building 
            Web3 infrastructure or mobile applications, I combine deep technical knowledge 
            with business acumen to create impactful solutions.
          </p>
        </motion.div>
      </div>

      {/* Footer */}
      <footer className="py-12 bg-gray-900 border-t border-emerald-800/30">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <p className="text-2xl text-gray-300 italic mb-4">
              "Brilliant thinking is rare, but courage is in even shorter supply than genius." – Peter Thiel
            </p>
            <p className="text-gray-500">© 2024 Deep Tech Engineer. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}