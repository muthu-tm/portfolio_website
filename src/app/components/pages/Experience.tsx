import { motion } from 'motion/react';
import { ExternalLink, Code2, Database, Globe } from 'lucide-react';

interface TechPillar {
  title: string;
  description: string;
}

interface ExperienceItem {
  company: string;
  role: string;
  category: string;
  link?: string;
  pillars: TechPillar[];
  skills: string;
}

const experiences: ExperienceItem[] = [
  {
    company: 'Unibase Labs',
    role: 'Product Development Head',
    category: 'Technical Architecture & Web3 Ecosystems',
    link: 'https://turf.network/',
    pillars: [
      {
        title: 'Decentralized Identity (DID)',
        description: 'Built a scalable identity system using Privado ID and Polygon CDK, successfully issuing and managing over 400,000 DIDs to create verifiable gamer profiles.'
      },
      {
        title: 'Multi-Chain Infrastructure',
        description: 'Researched and developed proof-of-concepts for a multi-chain wallet using Cosmos SDK and IBC (Inter-Blockchain Communication), focusing on modularity and cross-chain interoperability.'
      },
      {
        title: 'Serverless Launchpad',
        description: 'Re-architected the Instaraise (Tezos) IDO platform into a serverless backend on AWS, ensuring high availability and secure on-chain fundraising workflows.'
      }
    ],
    skills: 'Golang, Python, Solidity, Polygon CDK, Tezos (SmartPy), Cosmos SDK, AWS Lambda'
  },
  {
    company: 'Redbelly Network',
    role: 'Protocol Engineer',
    category: 'Technical Architecture & Web3 Ecosystems',
    link: 'https://redbelly.network/',
    pillars: [
      {
        title: 'Node Stabilization',
        description: 'Optimized and stabilized core node software to ensure high throughput and low latency for the L1 network during its transition phases.'
      },
      {
        title: 'Network Lifecycle Management',
        description: 'Orchestrated technical releases for both Testnet and Mainnet, managing code consistency and protocol upgrades.'
      },
      {
        title: 'EVM Compatibility',
        description: 'Worked on ensuring the network\'s compatibility with Ethereum standards to facilitate seamless dApp migration.'
      }
    ],
    skills: 'Golang, Distributed Systems, P2P Networking, EVM, Consensus Algorithms'
  },
  {
    company: 'Coinfantasy',
    role: 'Lead Blockchain Engineer',
    category: 'Technical Architecture & Web3 Ecosystems',
    link: 'https://www.coinfantasy.io/',
    pillars: [
      {
        title: 'Smart Contract Development',
        description: 'Engineered core game mechanics and financial logic through Solidity smart contracts for staking, unstaking, and ERC20 token distribution.'
      },
      {
        title: 'High-Concurrency Backend',
        description: 'Developed a specialized game scheduler service in Golang to manage thousands of parallel gaming events and real-time state updates.'
      },
      {
        title: 'Web3 Integrations',
        description: 'Integrated Biconomy for gasless transactions and connected external providers like Magic.link, Transak, and crypto price oracles.'
      }
    ],
    skills: 'Golang, Solidity, HardHat, NodeJS, MySQL, MongoDB, AWS'
  },
  {
    company: 'Peloton Blockchain',
    role: 'Blockchain Engineer',
    category: 'Technical Architecture & Web3 Ecosystems',
    link: 'https://www.lfdecentralizedtrust.org/blog/2019/01/17/developer-showcase-series-john-greenhow-peloton-blockchain',
    pillars: [
      {
        title: 'Enterprise Distributed Ledgers',
        description: 'Set up and configured Hyperledger Fabric nodes for a private enterprise blockchain network.'
      },
      {
        title: 'Chaincode Development',
        description: 'Wrote ERC20-compatible chaincode in Golang, enabling asset tokenization within a permissioned environment.'
      },
      {
        title: 'SDK Integration',
        description: 'Built the core system interface using the Fabric Node SDK to allow seamless interaction between the frontend and the ledger.'
      }
    ],
    skills: 'Golang, Hyperledger Fabric, NodeJS SDK, Docker'
  },
  {
    company: 'Enterprise Client',
    role: 'Lead Data Engineer (Contract)',
    category: 'Data Engineering & Specialized Backend',
    pillars: [
      {
        title: 'High-Volume Migration',
        description: 'Led end-to-end data pipelines moving millions of records from Teradata, SQL, and Databricks into Salesforce CRM with strict governance.'
      },
      {
        title: 'Real-Time Synchronization',
        description: 'Designed a low-latency integration between DynamoDB and on-premise legacy systems using DynamoDB Streams and AWS Lambda.'
      },
      {
        title: 'Serverless ETL Automation',
        description: 'Built a fully automated, serverless system for delta (incremental) loads, significantly reducing operational costs and pipeline lag. API Modernization - End-to-End transformation from legacy systems to modern serverless platforms, handling millions of API requests daily.'
      }
    ],
    skills: 'Python, Databricks, Airflow, AWS Glue, PySpark, Teradata, Salesforce API'
  },
  {
    company: 'Securex AI',
    role: 'Backend Security Engineer',
    category: 'Data Engineering & Specialized Backend',
    link: 'https://www.securex.ai/',
    pillars: [
      {
        title: 'Cloud Security Integration',
        description: 'Integrated multi-cloud security data from Veracode, Dome9, and Qualys into a unified monitoring platform.'
      },
      {
        title: 'Vulnerability Intelligence',
        description: 'Developed a microservice to fetch and map package vulnerabilities and remediations from the NVD (National Vulnerability Database).'
      },
      {
        title: 'Asset Discovery',
        description: 'Built cloud connectors using official AWS and GCP SDKs to dynamically discover and index security assets.'
      }
    ],
    skills: 'Golang, Python, Hasura (GraphQL), Postgres, AWS/GCP SDKs'
  },
  {
    company: 'Elsevier (GeoFacets)',
    role: 'Software Engineer',
    category: 'Data Engineering & Specialized Backend',
    pillars: [
      {
        title: 'Intelligent Document Processing',
        description: 'Built systems for OCR extraction and metadata generation to digitize complex geological and mineral documents.'
      },
      {
        title: 'Geospatial Indexing',
        description: 'Developed logic for geotagging raw data to enable map-based discovery of worldwide mining assets.'
      },
      {
        title: 'Content Extraction Pipelines',
        description: 'Worked on high-throughput pipelines for thumbnail generation and structured data extraction from millions of scientific papers.'
      }
    ],
    skills: 'Java, Python, NodeJS, OCR Engines, Geospatial Mapping'
  },
  {
    company: 'HVAC IoT Startup',
    role: 'Senior Full-Stack Engineer (Contract)',
    category: 'IoT, Streaming & Enterprise Blockchain',
    pillars: [
      {
        title: 'IoT Data Processing',
        description: 'Managed and optimized Python-based algorithms for processing real-time sensor data from HVAC systems to improve energy efficiency.'
      },
      {
        title: 'End-to-End Application Ownership',
        description: 'Owned the development of customer-facing React Native (mobile) and ReactJS (web) applications for remote hardware management.'
      },
      {
        title: 'Architecture & Scalability',
        description: 'Collaborated with founders to translate complex HVAC hardware requirements into a scalable cloud architecture.'
      }
    ],
    skills: 'Python, NodeJS, React Native, MongoDB, IoT Protocols'
  },
  {
    company: 'Imstrong',
    role: 'Lead Member Technical Staff',
    category: 'IoT, Streaming & Enterprise Blockchain',
    pillars: [
      {
        title: 'Serverless Video Architecture',
        description: 'Developed a custom live-streaming system using nginx-rtmp and Docker, deploying it across a multi-cloud environment (AWS/GCP).'
      },
      {
        title: 'AI-Powered Fitness Tracking',
        description: 'Built an MVP utilizing Tensorflow Posenet to track user movement and provide real-time fitness analysis via the browser.'
      },
      {
        title: 'VOD Management',
        description: 'Engineered a Content Manipulation System for Video-on-Demand (VOD) and an automated notification service for user engagement.'
      }
    ],
    skills: 'Golang, NodeJS, Cloud Firestore, AWS, GCP, Tensorflow.js'
  },
  {
    company: 'Dojima Trade & Clear (Broadridge)',
    role: 'Software Engineer',
    category: 'IoT, Streaming & Enterprise Blockchain',
    pillars: [
      {
        title: 'Financial Protocol Integration',
        description: 'Developed order and market data management services implementing the FIX and FIXML protocols for derivative trading.'
      },
      {
        title: 'Clearing House Connectivity',
        description: 'Integrated various global clearing services using the NASDAQ Genium API and IBM MQ for high-reliability message queuing.'
      },
      {
        title: 'Legacy Modernization',
        description: 'Contributed as a core backend engineer to modernize the derivatives clearing platform after its acquisition by Broadridge.'
      }
    ],
    skills: 'Java, FIX Protocol, IBM MQ, WebSocket, Financial APIs'
  }
];

export default function Experience() {
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
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-yellow-400">Experience</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto px-4">
            A decade of building cutting-edge solutions across Web3, distributed systems, and enterprise applications
          </p>
        </motion.div>

        {/* Categories */}
        <div className="space-y-12 md:space-y-16">
          {['Technical Architecture & Web3 Ecosystems', 'Data Engineering & Specialized Backend', 'IoT, Streaming & Enterprise Blockchain'].map((category, catIndex) => {
            const categoryExperiences = experiences.filter(exp => exp.category === category);
            const icons = [Globe, Database, Code2];
            const CategoryIcon = icons[catIndex];
            
            return (
              <motion.div
                key={category}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-2 md:gap-3 mb-6 md:mb-8">
                  <CategoryIcon className="w-6 h-6 md:w-8 md:h-8 text-yellow-400" />
                  <h2 className="text-xl md:text-3xl text-emerald-400">{category}</h2>
                </div>
                
                <div className="space-y-6 md:space-y-8">
                  {categoryExperiences.map((exp, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-4 md:p-8 border border-emerald-700/30 hover:border-emerald-600/50 transition-all"
                    >
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3 md:gap-0 mb-4 md:mb-6">
                        <div>
                          <h3 className="text-xl md:text-2xl text-white mb-2">{exp.company}</h3>
                          <p className="text-emerald-400 text-base md:text-lg">{exp.role}</p>
                        </div>
                        {exp.link && (
                          <a
                            href={exp.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-yellow-400 hover:text-yellow-300 transition-colors self-start sm:self-auto"
                          >
                            <ExternalLink className="w-5 h-5 md:w-6 md:h-6" />
                          </a>
                        )}
                      </div>
                      
                      <div className="space-y-3 md:space-y-4 mb-4 md:mb-6">
                        {exp.pillars.map((pillar, pIndex) => (
                          <div key={pIndex} className="border-l-2 border-emerald-600 pl-3 md:pl-4">
                            <h4 className="text-base md:text-lg text-yellow-400 mb-1 md:mb-2">{pillar.title}</h4>
                            <p className="text-sm md:text-base text-gray-400">{pillar.description}</p>
                          </div>
                        ))}
                      </div>
                      
                      <div className="pt-3 md:pt-4 border-t border-gray-700">
                        <p className="text-xs md:text-sm text-gray-500 mb-2">Tech Stack:</p>
                        <div className="flex flex-wrap gap-2">
                          {exp.skills.split(', ').map((skill, sIndex) => (
                            <span
                              key={sIndex}
                              className="px-2 md:px-3 py-1 bg-emerald-900/30 text-emerald-300 rounded-full text-xs md:text-sm border border-emerald-700/30"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
      
      {/* Footer */}
      <footer className="py-12 bg-gray-900 border-t border-emerald-800/30">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <p className="text-2xl text-gray-300 italic mb-4">
              "The difference between a good engineer and a great engineer is attention to detail." – Henry Petroski
            </p>
            <p className="text-gray-500">© 2024 Deep Tech Engineer. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}