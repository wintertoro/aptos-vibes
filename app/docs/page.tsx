import Link from "next/link";

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900">
      <div className="container mx-auto px-6 py-8">
        <div className="flex items-center gap-4 mb-8">
          <Link 
            href="/" 
            className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
          >
            ← Back to Showcase
          </Link>
        </div>
        
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
            Aptos Vibes Documentation
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Learn about vibecoding, explore Aptos development tools, and discover how to showcase your projects.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          
          {/* What is Vibecoding */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">What is Vibecoding? ✨</h2>
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-100 dark:border-gray-700">
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                <strong>Vibecoding</strong> is a philosophy of blockchain development that emphasizes creativity, passion, and unique approaches to building on Aptos. It goes beyond functional code to craft applications with personality, style, and innovative user experiences.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-blue-900 dark:text-blue-100 mb-3">🎨 Creative Expression</h3>
                  <p className="text-blue-800 dark:text-blue-200">
                    Express creativity through unique UI/UX design, innovative smart contract patterns, and novel blockchain interactions.
                  </p>
                </div>
                <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-purple-900 dark:text-purple-100 mb-3">⚡ Technical Excellence</h3>
                  <p className="text-purple-800 dark:text-purple-200">
                    Maintain high technical standards while leveraging Aptos' Move language and advanced blockchain features.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Aptos Resources */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Aptos Development Resources 🛠️</h2>
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-100 dark:border-gray-700">
              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">🚀 Aptos NPM MCP</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  The Aptos NPM Model Context Protocol (MCP) provides essential tools and resources for Aptos development. This powerful toolkit helps developers build, test, and deploy vibecoded projects efficiently.
                </p>
                <Link 
                  href="https://github.com/aptos-labs/aptos-npm-mcp/blob/main/README.md"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium rounded-lg transition-colors"
                >
                  📖 Explore Aptos NPM MCP
                </Link>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="p-4 border border-gray-200 dark:border-gray-600 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">📚 Official Docs</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                    Comprehensive guides and API references
                  </p>
                  <Link 
                    href="https://aptos.dev" 
                    target="_blank"
                    className="text-blue-600 dark:text-blue-400 hover:underline text-sm"
                  >
                    Visit Aptos Docs →
                  </Link>
                </div>
                <div className="p-4 border border-gray-200 dark:border-gray-600 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">💬 Community</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                    Join the developer community
                  </p>
                  <Link 
                    href="https://discord.gg/aptoslabs" 
                    target="_blank"
                    className="text-blue-600 dark:text-blue-400 hover:underline text-sm"
                  >
                    Join Discord →
                  </Link>
                </div>
                <div className="p-4 border border-gray-200 dark:border-gray-600 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">🔧 GitHub</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                    Core Aptos blockchain source code
                  </p>
                  <Link 
                    href="https://github.com/aptos-labs" 
                    target="_blank"
                    className="text-blue-600 dark:text-blue-400 hover:underline text-sm"
                  >
                    Browse Code →
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Using the Showcase */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Using the Showcase 🌟</h2>
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-100 dark:border-gray-700">
              
              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">🗳️ Voting System</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 dark:bg-blue-900 p-2 rounded-lg w-8 h-8 flex items-center justify-center">
                      <span className="text-blue-600 dark:text-blue-400 font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white">Connect Your Wallet</h4>
                      <p className="text-gray-600 dark:text-gray-400">Click "Connect Wallet" to link your Aptos wallet (Petra, Martian, etc.)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 dark:bg-blue-900 p-2 rounded-lg w-8 h-8 flex items-center justify-center">
                      <span className="text-blue-600 dark:text-blue-400 font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white">Vote on Projects</h4>
                      <p className="text-gray-600 dark:text-gray-400">Each wallet can vote once per project: 👍 (upvote) or 👎 (downvote)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 dark:bg-blue-900 p-2 rounded-lg w-8 h-8 flex items-center justify-center">
                      <span className="text-blue-600 dark:text-blue-400 font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white">Manage Your Votes</h4>
                      <p className="text-gray-600 dark:text-gray-400">Switch votes or remove them by clicking the same button again</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">📊 Vibe Scores</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Each project displays a <strong>Vibe Score</strong> calculated as: upvotes - downvotes
                </p>
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <div className="flex items-center gap-4 text-sm font-mono">
                    <span className="text-green-600">↑15 upvotes</span>
                    <span>-</span>
                    <span className="text-red-600">↓3 downvotes</span>
                    <span>=</span>
                    <span className="font-bold text-green-600">+12 Vibe Score</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Contributing */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Contributing Your Project 🤝</h2>
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-100 dark:border-gray-700">
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                Have a vibecoded Aptos project you'd like to showcase? We'd love to feature it!
              </p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">📋 Submission Criteria</h3>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">✓</span>
                      Built on or for the Aptos blockchain
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">✓</span>
                      Demonstrates creative or innovative approach
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">✓</span>
                      Open source or has public repository
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">✓</span>
                      Clear documentation and description
                    </li>
                  </ul>
                </div>

                <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
                  <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">💡 Ready to Submit?</h4>
                  <p className="text-blue-800 dark:text-blue-200 mb-4">
                    Fork our repository, add your project, and submit a pull request!
                  </p>
                  <Link 
                    href="https://github.com/wintertoro/aptos-vibes"
                    target="_blank"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
                  >
                    🚀 View Repository
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
} 