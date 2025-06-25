import Image from "next/image";
import Link from "next/link";
import { WalletButton } from "./components/WalletButton";
import { VotingSystem } from "./components/VotingSystem";

interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  projectUrl: string;
  tags: string[];
  status: 'live' | 'development' | 'concept';
}

const projects: Project[] = [
  {
    id: '1',
    title: 'DeFi Portfolio Tracker',
    description: 'Track your Aptos DeFi investments across multiple protocols with real-time analytics.',
    imageUrl: '/api/placeholder/400/300',
    projectUrl: 'https://github.com/aptos-vibes/defi-tracker',
    tags: ['DeFi', 'Analytics', 'Move'],
    status: 'live'
  },
  {
    id: '2',
    title: 'NFT Marketplace',
    description: 'A decentralized marketplace for trading NFTs on Aptos with low fees and fast transactions.',
    imageUrl: '/api/placeholder/400/300',
    projectUrl: 'https://github.com/aptos-vibes/nft-marketplace',
    tags: ['NFTs', 'Marketplace', 'Web3'],
    status: 'development'
  },
  {
    id: '3',
    title: 'Move Code Analyzer',
    description: 'Static analysis tool for Move smart contracts with security vulnerability detection.',
    imageUrl: '/api/placeholder/400/300',
    projectUrl: 'https://github.com/aptos-vibes/move-analyzer',
    tags: ['Security', 'Developer Tools', 'Move'],
    status: 'live'
  },
  {
    id: '4',
    title: 'Aptos Name Service',
    description: 'Human-readable names for Aptos addresses, similar to ENS but optimized for the Aptos ecosystem.',
    imageUrl: '/api/placeholder/400/300',
    projectUrl: 'https://github.com/aptos-vibes/aptos-names',
    tags: ['Identity', 'Utilities', 'Infrastructure'],
    status: 'concept'
  },
  {
    id: '5',
    title: 'Cross-Chain Bridge',
    description: 'Secure asset bridging between Aptos and other major blockchains with minimal slippage.',
    imageUrl: '/api/placeholder/400/300',
    projectUrl: 'https://github.com/aptos-vibes/cross-bridge',
    tags: ['Bridge', 'Cross-chain', 'Infrastructure'],
    status: 'development'
  },
  {
    id: '6',
    title: 'Governance Dashboard',
    description: 'Community governance platform for Aptos ecosystem projects with voting and proposal management.',
    imageUrl: '/api/placeholder/400/300',
    projectUrl: 'https://github.com/aptos-vibes/governance-hub',
    tags: ['Governance', 'DAO', 'Community'],
    status: 'live'
  }
];

const getStatusColor = (status: Project['status']) => {
  switch (status) {
    case 'live':
      return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
    case 'development':
      return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
    case 'concept':
      return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200';
    default:
      return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
  }
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900">
      {/* Header */}
      <header className="container mx-auto px-6 py-8">
        <div className="flex justify-between items-start mb-8">
          <div></div>
          <WalletButton />
        </div>
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
            Aptos Vibes
          </h1>
          <p className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
            A Showcase of Vibe Coded Projects
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Explore this curated collection of innovative Aptos blockchain projects, each crafted with unique vibes and creative energy. 
            From groundbreaking DeFi solutions to cutting-edge NFT platforms - discover the future of decentralized applications built with passion and style.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 pb-16">
        {/* Showcase Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Vibe Projects
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Each project represents a unique approach to blockchain development, combining technical excellence with creative vision.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-700 hover:scale-105"
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-blue-400 to-purple-500 overflow-hidden">
                <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white text-3xl font-bold opacity-90 tracking-wider">
                    {project.title.split(' ').map(word => word[0]).join('')}
                  </div>
                </div>
                {/* Vibe Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 text-xs font-medium rounded-full bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200 border border-yellow-300 dark:border-yellow-700">
                    ✨ Vibe Coded
                  </span>
                </div>
                {/* Status Badge */}
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 text-xs font-medium rounded-full ${getStatusColor(project.status)}`}>
                    {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Project Link */}
                <Link
                  href={project.projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium text-sm transition-colors"
                >
                  Explore Project
                  <svg
                    className="w-4 h-4 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </Link>

                {/* Voting System */}
                <VotingSystem 
                  projectId={project.id} 
                  projectTitle={project.title} 
                />
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 max-w-2xl mx-auto border border-gray-100 dark:border-gray-700">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Got a Vibe Project to Showcase?
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Join our showcase! Submit your vibe coded Aptos project and inspire the community with your unique approach to blockchain development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://github.com/aptos-vibes"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium rounded-lg transition-colors inline-flex items-center gap-2 justify-center"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                Submit Your Project
              </Link>
              <Link
                href="#"
                className="px-6 py-3 border border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500 text-gray-700 dark:text-gray-300 font-medium rounded-lg transition-colors inline-flex items-center gap-2 justify-center"
              >
                Browse More Vibes
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-600 dark:text-gray-400 mb-4 md:mb-0">
              © 2024 Aptos Vibes. Building the future of blockchain.
            </div>
            <div className="flex gap-6">
              <Link
                href="https://aptos.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Aptos Docs
              </Link>
              <Link
                href="https://github.com/aptos-labs"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                GitHub
              </Link>
              <Link
                href="https://discord.gg/aptoslabs"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Discord
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
