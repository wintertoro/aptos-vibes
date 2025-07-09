import Link from "next/link";
import { WalletButton } from "../components/WalletButton";

export default function HowToMCPPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-black dark:text-white">
      {/* ASCII Art Header */}
      <div className="border-b border-gray-300 dark:border-gray-700 bg-white dark:bg-black">
        <pre className="text-xs md:text-sm text-center py-6 font-mono overflow-x-auto">
{`
 █████╗ ██████╗ ████████╗ ██████╗ ███████╗    ██╗   ██╗██╗██████╗ ███████╗    ██╗  ██╗ █████╗  ██████╗██╗  ██╗
██╔══██╗██╔══██╗╚══██╔══╝██╔═══██╗██╔════╝    ██║   ██║██║██╔══██╗██╔════╝    ██║  ██║██╔══██╗██╔════╝██║ ██╔╝
███████║██████╔╝   ██║   ██║   ██║███████╗    ██║   ██║██║██████╔╝█████╗      ███████║███████║██║     █████╔╝ 
██╔══██║██╔═══╝    ██║   ██║   ██║╚════██║    ╚██╗ ██╔╝██║██╔══██╗██╔══╝      ██╔══██║██╔══██║██║     ██╔═██╗ 
██║  ██║██║        ██║   ╚██████╔╝███████║     ╚████╔╝ ██║██████╔╝███████╗    ██║  ██║██║  ██║╚██████╗██║  ██╗
╚═╝  ╚═╝╚═╝        ╚═╝    ╚═════╝ ╚══════╝      ╚═══╝  ╚═╝╚═════╝ ╚══════╝    ╚═╝  ╚═╝╚═╝  ╚═╝ ╚═════╝╚═╝  ╚═╝
`}
        </pre>
      </div>

      {/* Header */}
      <header className="container mx-auto px-6 py-8 bg-white dark:bg-black">
        <div className="flex justify-between items-start mb-8">
          <div className="flex gap-3">
            <Link 
              href="/" 
              className="px-6 py-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 border border-gray-300 dark:border-gray-600 font-mono text-sm transition-colors no-underline"
            >
              HOME
            </Link>
            <Link 
              href="/readme"
              className="px-6 py-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 border border-gray-300 dark:border-gray-600 font-mono text-sm transition-colors no-underline"
            >
              README
            </Link>
            <Link 
              href="/submit"
              className="px-6 py-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 border border-gray-300 dark:border-gray-600 font-mono text-sm transition-colors no-underline"
            >
              SUBMIT
            </Link>
          </div>
          <WalletButton />
        </div>
        
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold font-mono mb-6">
            HOW TO MCP
          </h1>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white dark:bg-black border-2 border-black dark:border-white p-8 shadow-lg">
              <p className="text-xl font-mono font-bold mb-2">
                MODEL CONTEXT PROTOCOL SETUP GUIDE
              </p>
              <p className="text-sm font-mono text-gray-600 dark:text-gray-400">
                Step-by-step instructions for Aptos Vibe Coding
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 pb-16">
        <div className="max-w-6xl mx-auto space-y-16">
          
          {/* What is MCP */}
          <section>
            <div className="mb-8">
              <h2 className="text-3xl font-bold font-mono mb-4 border-b-2 border-black dark:border-white pb-2 inline-block">
                What is MCP?
              </h2>
            </div>
            <div className="bg-white dark:bg-black border border-gray-300 dark:border-gray-700 shadow-xl rounded-lg overflow-hidden">
              <div className="bg-gray-50 dark:bg-gray-800 p-6 border-b border-gray-200 dark:border-gray-700">
                <pre className="font-mono text-sm text-center">
{`┌─────────────────────────────────────────────────────────────────────┐
│                    MODEL CONTEXT PROTOCOL (MCP)                     │
├─────────────────────────────────────────────────────────────────────┤
│  Bridge between AI assistants and development tools                │
│  Enables seamless Aptos blockchain development                     │
└─────────────────────────────────────────────────────────────────────┘`}
                </pre>
              </div>
              
              <div className="p-8">
                <p className="font-mono text-base leading-relaxed mb-8 text-gray-700 dark:text-gray-300">
                  MCP (Model Context Protocol) connects AI coding assistants like Claude or Cursor<br/>
                  with specialized development tools and resources. For this hackathon, the Aptos<br/>
                  NPM MCP provides essential blockchain development capabilities.
                </p>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-gray-50 dark:bg-gray-800 border-l-4 border-black dark:border-white p-6">
                    <h3 className="text-lg font-bold font-mono mb-3">AI Integration</h3>
                    <p className="font-mono text-sm text-gray-600 dark:text-gray-400">
                      Connect your AI assistant to Aptos development tools, documentation, and smart contract templates.
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 border-l-4 border-black dark:border-white p-6">
                    <h3 className="text-lg font-bold font-mono mb-3">Rapid Development</h3>
                    <p className="font-mono text-sm text-gray-600 dark:text-gray-400">
                      Generate boilerplate code, deploy contracts, and build DApps faster with AI assistance.
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 border-l-4 border-black dark:border-white p-6">
                    <h3 className="text-lg font-bold font-mono mb-3">Best Practices</h3>
                    <p className="font-mono text-sm text-gray-600 dark:text-gray-400">
                      Follow Aptos development patterns and security guidelines automatically.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Prerequisites */}
          <section>
            <div className="mb-8">
              <h2 className="text-3xl font-bold font-mono mb-4 border-b-2 border-black dark:border-white pb-2 inline-block">
                Prerequisites
              </h2>
            </div>
            <div className="bg-white dark:bg-black border border-gray-300 dark:border-gray-700 shadow-xl rounded-lg overflow-hidden">
              <div className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold font-mono mb-6 flex items-center">
                      <span className="w-2 h-8 bg-black dark:bg-white mr-3"></span>
                      Required Software
                    </h3>
                    <div className="space-y-4">
                      <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-4 rounded">
                        <h4 className="font-bold font-mono text-sm mb-2">Node.js 18+</h4>
                        <p className="font-mono text-xs text-gray-600 dark:text-gray-400 mb-2">JavaScript runtime for development tools</p>
                        <Link href="https://nodejs.org" target="_blank" className="font-mono text-xs hover:underline text-blue-600 dark:text-blue-400">
                          → Download Node.js
                        </Link>
                      </div>
                      <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-4 rounded">
                        <h4 className="font-bold font-mono text-sm mb-2">Git</h4>
                        <p className="font-mono text-xs text-gray-600 dark:text-gray-400 mb-2">Version control for cloning MCP repository</p>
                        <Link href="https://git-scm.com" target="_blank" className="font-mono text-xs hover:underline text-blue-600 dark:text-blue-400">
                          → Download Git
                        </Link>
                      </div>
                      <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-4 rounded">
                        <h4 className="font-bold font-mono text-sm mb-2">Aptos CLI</h4>
                        <p className="font-mono text-xs text-gray-600 dark:text-gray-400 mb-2">Command-line tool for Aptos development</p>
                        <Link href="https://aptos.dev/tools/install-cli" target="_blank" className="font-mono text-xs hover:underline text-blue-600 dark:text-blue-400">
                          → Install Aptos CLI
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-mono mb-6 flex items-center">
                      <span className="w-2 h-8 bg-black dark:bg-white mr-3"></span>
                      AI Assistant
                    </h3>
                    <div className="space-y-4">
                      <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-4 rounded">
                        <h4 className="font-bold font-mono text-sm mb-2">Cursor IDE (Recommended)</h4>
                        <p className="font-mono text-xs text-gray-600 dark:text-gray-400 mb-2">Official AI-powered code editor with MCP support</p>
                        <Link href="https://cursor.sh" target="_blank" className="font-mono text-xs hover:underline text-blue-600 dark:text-blue-400">
                          → Download Cursor
                        </Link>
                      </div>
                      <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-4 rounded">
                                                 <h4 className="font-bold font-mono text-sm mb-2">Claude Desktop (Alternative)</h4>
                         <p className="font-mono text-xs text-gray-600 dark:text-gray-400 mb-2">Anthropic&apos;s AI assistant with MCP support</p>
                        <Link href="https://claude.ai/download" target="_blank" className="font-mono text-xs hover:underline text-blue-600 dark:text-blue-400">
                          → Download Claude
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Setup Instructions */}
          <section>
            <div className="mb-8">
              <h2 className="text-3xl font-bold font-mono mb-4 border-b-2 border-black dark:border-white pb-2 inline-block">
                Setup Instructions
              </h2>
            </div>
            <div className="space-y-8">
              
              {/* Cursor IDE Setup (Official) */}
              <div className="bg-white dark:bg-black border border-gray-300 dark:border-gray-700 shadow-xl rounded-lg overflow-hidden">
                <div className="bg-black dark:bg-white text-white dark:text-black p-4">
                  <h3 className="text-xl font-bold font-mono flex items-center">
                    <span className="mr-3">🎯</span>
                    Official Cursor IDE Setup
                  </h3>
                  <p className="font-mono text-sm mt-2 opacity-90">
                    Recommended method from the official Aptos NPM MCP repository
                  </p>
                </div>

                <div className="p-8 space-y-8">
                  <div>
                    <h4 className="text-xl font-bold font-mono mb-4 flex items-center">
                      <span className="w-8 h-8 bg-black dark:bg-white text-white dark:text-black rounded-full flex items-center justify-center text-sm mr-3">1</span>
                      Clone the MCP Repository
                    </h4>
                    <div className="bg-gray-900 text-gray-100 p-6 rounded-lg font-mono text-sm overflow-x-auto">
                      <div className="mb-2 text-gray-400"># Clone the official Aptos NPM MCP repository</div>
                      <div className="text-green-400">git clone git@github.com:aptos-labs/aptos-npm-mcp.git</div>
                      <div className="text-green-400">cd aptos-npm-mcp</div>
                      <div className="text-green-400">npm install</div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xl font-bold font-mono mb-4 flex items-center">
                      <span className="w-8 h-8 bg-black dark:bg-white text-white dark:text-black rounded-full flex items-center justify-center text-sm mr-3">2</span>
                      Configure Cursor IDE
                    </h4>
                    <p className="font-mono text-sm mb-4 text-gray-600 dark:text-gray-400">
                      Create MCP configuration in your project directory:
                    </p>
                    <div className="bg-gray-900 text-gray-100 p-6 rounded-lg font-mono text-xs overflow-x-auto">
                      <div className="mb-1 text-gray-400"># In your project root folder, create .cursor directory</div>
                      <div className="text-blue-400">mkdir .cursor</div>
                      <div className="mb-3 text-gray-400"># Create mcp.json configuration file</div>
                      
                      <div className="text-yellow-300">&#123;</div>
                      <div className="text-yellow-300">&nbsp;&nbsp;&quot;mcpServers&quot;: &#123;</div>
                      <div className="text-yellow-300">&nbsp;&nbsp;&nbsp;&nbsp;&quot;aptos-build-mcp&quot;: &#123;</div>
                      <div className="text-yellow-300">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&quot;command&quot;: &quot;npx&quot;,</div>
                      <div className="text-yellow-300">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&quot;args&quot;: [&quot;tsx&quot;, &quot;&lt;path-to-mcp-server&gt;/src/server.ts&quot;],</div>
                      <div className="text-yellow-300">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&quot;type&quot;: &quot;stdio&quot;</div>
                      <div className="text-yellow-300">&nbsp;&nbsp;&nbsp;&nbsp;&#125;</div>
                      <div className="text-yellow-300">&nbsp;&nbsp;&#125;</div>
                      <div className="text-yellow-300">&#125;</div>
                    </div>
                    <div className="bg-yellow-50 dark:bg-yellow-900 border-l-4 border-yellow-400 p-4 mt-4">
                      <p className="font-mono text-xs text-yellow-800 dark:text-yellow-200">
                        ⚠️ Replace &lt;path-to-mcp-server&gt; with the actual path to your cloned MCP repository
                      </p>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xl font-bold font-mono mb-4 flex items-center">
                      <span className="w-8 h-8 bg-black dark:bg-white text-white dark:text-black rounded-full flex items-center justify-center text-sm mr-3">3</span>
                      Verify Connection
                    </h4>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-4 rounded">
                        <h5 className="font-bold font-mono text-sm mb-2">Check Settings</h5>
                                                 <p className="font-mono text-xs text-gray-600 dark:text-gray-400 mb-2">Navigate to: Cursor → Settings → Cursor Settings</p>
                         <p className="font-mono text-xs text-gray-600 dark:text-gray-400">Look for &quot;MCP&quot; or &quot;Tools &amp; Integrations&quot; section</p>
                      </div>
                      <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-4 rounded">
                        <h5 className="font-bold font-mono text-sm mb-2">Enable MCP</h5>
                        <p className="font-mono text-xs text-gray-600 dark:text-gray-400 mb-2">Ensure MCP is enabled with green indicator</p>
                        <p className="font-mono text-xs text-gray-600 dark:text-gray-400">Click refresh icon to update MCP servers</p>
                      </div>
                      <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-4 rounded">
                        <h5 className="font-bold font-mono text-sm mb-2">Test Connection</h5>
                                                 <p className="font-mono text-xs text-gray-600 dark:text-gray-400 mb-2">Set AI dropdown to &quot;Agent&quot; and &quot;claude-4-sonnet&quot;</p>
                         <p className="font-mono text-xs text-gray-600 dark:text-gray-400">Ask: &quot;are you using mcp?&quot; to verify connection</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Claude Desktop Setup (Alternative) */}
              <div className="bg-white dark:bg-black border border-gray-300 dark:border-gray-700 shadow-xl rounded-lg overflow-hidden">
                <div className="bg-gray-600 text-white p-4">
                  <h3 className="text-xl font-bold font-mono flex items-center">
                    <span className="mr-3">🔧</span>
                    Claude Desktop Setup (Alternative)
                  </h3>
                  <p className="font-mono text-sm mt-2 opacity-90">
                    Alternative method using NPM package installation
                  </p>
                </div>

                <div className="p-8 space-y-6">
                  <div>
                    <h4 className="text-lg font-bold font-mono mb-4 flex items-center">
                      <span className="w-6 h-6 bg-gray-600 text-white rounded-full flex items-center justify-center text-xs mr-3">A</span>
                      Install Aptos NPM MCP
                    </h4>
                    <div className="bg-gray-900 text-gray-100 p-4 rounded font-mono text-sm">
                      <div className="mb-2 text-gray-400"># Install globally via npm</div>
                      <div className="text-green-400">npm install -g @aptos-labs/aptos-npm-mcp</div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-bold font-mono mb-4 flex items-center">
                      <span className="w-6 h-6 bg-gray-600 text-white rounded-full flex items-center justify-center text-xs mr-3">B</span>
                      Configure Claude Desktop
                    </h4>
                    <div className="bg-gray-900 text-gray-100 p-4 rounded font-mono text-xs overflow-x-auto mb-4">
                      <div className="mb-1 text-gray-400"># Config file locations:</div>
                      <div className="mb-1 text-gray-400"># macOS: ~/Library/Application Support/Claude/claude_desktop_config.json</div>
                      <div className="mb-1 text-gray-400"># Windows: %APPDATA%\Claude\claude_desktop_config.json</div>
                      <div className="mb-3 text-gray-400"># Linux: ~/.config/Claude/claude_desktop_config.json</div>
                      
                      <div className="text-yellow-300">&#123;</div>
                      <div className="text-yellow-300">&nbsp;&nbsp;&quot;mcpServers&quot;: &#123;</div>
                      <div className="text-yellow-300">&nbsp;&nbsp;&nbsp;&nbsp;&quot;aptos-npm-mcp&quot;: &#123;</div>
                      <div className="text-yellow-300">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&quot;command&quot;: &quot;npx&quot;,</div>
                      <div className="text-yellow-300">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&quot;args&quot;: [&quot;@aptos-labs/aptos-npm-mcp&quot;]</div>
                      <div className="text-yellow-300">&nbsp;&nbsp;&nbsp;&nbsp;&#125;</div>
                      <div className="text-yellow-300">&nbsp;&nbsp;&#125;</div>
                      <div className="text-yellow-300">&#125;</div>
                    </div>

                    <div className="bg-green-50 dark:bg-green-900 border border-green-200 dark:border-green-700 p-4 rounded">
                      <h5 className="font-bold font-mono text-sm mb-2 text-green-800 dark:text-green-200">✅ Success Indicators:</h5>
                      <ul className="font-mono text-xs space-y-1 text-green-700 dark:text-green-300">
                        <li>• MCP tool icon appears in interface</li>
                        <li>• AI can access Aptos documentation</li>
                        <li>• Smart contract templates available</li>
                        <li>• Deployment commands work</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Usage Examples */}
          <section>
            <div className="mb-8">
              <h2 className="text-3xl font-bold font-mono mb-4 border-b-2 border-black dark:border-white pb-2 inline-block">
                Usage Examples
              </h2>
            </div>
            <div className="bg-white dark:bg-black border border-gray-300 dark:border-gray-700 shadow-xl rounded-lg overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6">
                <h3 className="text-xl font-bold font-mono mb-2">Official Example Prompts</h3>
                <p className="font-mono text-sm opacity-90">
                  From the official Aptos NPM MCP repository. Use these exact prompts for best results:
                </p>
              </div>
              
              <div className="p-8 space-y-6">
                <div className="space-y-6">
                  <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                    <h4 className="font-bold font-mono text-lg mb-3 text-blue-600 dark:text-blue-400">Full End-to-End DApp</h4>
                                         <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded font-mono text-sm mb-3">
                       &quot;Help me build a todo list dapp on Aptos. Build the smart contract to handle the dapp logic and help me with deploying the contract, the frontend for the UI and wallet connection for users to be able to connect with their wallet.&quot;
                     </div>
                    <p className="font-mono text-xs text-gray-600 dark:text-gray-400">
                      Generates complete dApp: smart contract + deployment + frontend + wallet integration
                    </p>
                  </div>

                  <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                    <h4 className="font-bold font-mono text-lg mb-3 text-green-600 dark:text-green-400">Frontend Only</h4>
                                         <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded font-mono text-sm mb-3">
                       &quot;Help me build a frontend for a todo list dapp on Aptos. Build the UI and wallet connection for users to be able to connect with their wallet.&quot;
                     </div>
                    <p className="font-mono text-xs text-gray-600 dark:text-gray-400">
                      Creates React frontend with wallet integration and TypeScript SDK usage
                    </p>
                  </div>

                  <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                    <h4 className="font-bold font-mono text-lg mb-3 text-purple-600 dark:text-purple-400">Smart Contract Only</h4>
                                         <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded font-mono text-sm mb-3">
                       &quot;Help me build a todo list smart contract on Aptos using Move language.&quot;
                     </div>
                    <p className="font-mono text-xs text-gray-600 dark:text-gray-400">
                      Generates Move smart contract with proper structure and deployment scripts
                    </p>
                  </div>

                  <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                    <h4 className="font-bold font-mono text-lg mb-3 text-orange-600 dark:text-orange-400">Deployment Help</h4>
                                         <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded font-mono text-sm mb-3">
                       &quot;Help me deploy my Move smart contract to Aptos testnet.&quot;
                     </div>
                    <p className="font-mono text-xs text-gray-600 dark:text-gray-400">
                      Provides deployment commands and configuration for testnet publishing
                    </p>
                  </div>
                </div>

                <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 mt-8">
                  <h4 className="text-xl font-bold font-mono mb-4">Best Practices for Prompting</h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <h5 className="font-bold font-mono text-sm text-green-600 dark:text-green-400 mb-3">✅ Do This</h5>
                      <ul className="font-mono text-xs space-y-2 text-gray-700 dark:text-gray-300">
                        <li>• Be specific about your dApp functionality</li>
                        <li>• Mention both frontend and smart contract needs</li>
                        <li>• Ask for deployment help explicitly</li>
                        <li>• Request wallet connection setup</li>
                        <li>• Specify if you need testnet deployment</li>
                      </ul>
                    </div>
                    <div className="space-y-3">
                      <h5 className="font-bold font-mono text-sm text-red-600 dark:text-red-400 mb-3">❌ Avoid This</h5>
                      <ul className="font-mono text-xs space-y-2 text-gray-700 dark:text-gray-300">
                                                 <li>• Generic &quot;build me a dApp&quot; requests</li>
                        <li>• Asking for mainnet deployment</li>
                        <li>• Requesting non-Aptos blockchain features</li>
                        <li>• Vague functional requirements</li>
                        <li>• Forgetting about wallet integration</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Troubleshooting */}
          <section>
            <div className="mb-8">
              <h2 className="text-3xl font-bold font-mono mb-4 border-b-2 border-black dark:border-white pb-2 inline-block">
                Troubleshooting
              </h2>
            </div>
            <div className="bg-white dark:bg-black border border-gray-300 dark:border-gray-700 shadow-xl rounded-lg overflow-hidden">
              <div className="bg-red-600 text-white p-4">
                <h3 className="text-xl font-bold font-mono">Common Issues & Solutions</h3>
              </div>
              
              <div className="p-8 space-y-6">
                <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                  <h4 className="font-bold font-mono text-sm mb-3">MCP Not Connecting</h4>
                  <div className="bg-gray-900 text-gray-100 p-3 rounded font-mono text-xs mb-3">
                    <div>npm uninstall -g @aptos-labs/aptos-npm-mcp</div>
                    <div>npm install -g @aptos-labs/aptos-npm-mcp</div>
                  </div>
                </div>

                <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                  <h4 className="font-bold font-mono text-sm mb-3">Check MCP Version</h4>
                  <div className="bg-gray-900 text-gray-100 p-3 rounded font-mono text-xs mb-3">
                    <div>npx @aptos-labs/aptos-npm-mcp --version</div>
                  </div>
                </div>

                <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                  <h4 className="font-bold font-mono text-sm mb-3">Find Claude Config Directory</h4>
                  <div className="bg-gray-900 text-gray-100 p-3 rounded font-mono text-xs mb-3">
                    <div>echo $HOME/Library/Application\\ Support/Claude/</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Support Resources */}
          <section>
            <div className="mb-8">
              <h2 className="text-3xl font-bold font-mono mb-4 border-b-2 border-black dark:border-white pb-2 inline-block">
                Support Resources
              </h2>
            </div>
            <div className="bg-white dark:bg-black border border-gray-300 dark:border-gray-700 shadow-xl rounded-lg overflow-hidden">
              <div className="p-8">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <h4 className="font-bold font-mono mb-3">Official Docs</h4>
                    <div className="space-y-2">
                      <Link 
                        href="https://github.com/aptos-labs/aptos-npm-mcp"
                        target="_blank"
                        className="block font-mono text-sm hover:underline text-blue-600 dark:text-blue-400"
                      >
                        → Aptos NPM MCP Repository
                      </Link>
                      <Link 
                        href="https://aptos.dev"
                        target="_blank"
                        className="block font-mono text-sm hover:underline text-blue-600 dark:text-blue-400"
                      >
                        → Aptos Documentation
                      </Link>
                    </div>
                  </div>

                  <div className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <h4 className="font-bold font-mono mb-3">Hackathon Support</h4>
                    <div className="space-y-2">
                      <div className="font-mono text-sm text-gray-600 dark:text-gray-400">💬 Slack: #vibe-hack-2025</div>
                      <Link 
                        href="https://www.notion.so/MCP-Feedback-22b8b846eb7280debf3ad4ab2046674f"
                        target="_blank"
                        className="block font-mono text-sm hover:underline text-blue-600 dark:text-blue-400"
                      >
                        → MCP Feedback Form
                      </Link>
                    </div>
                  </div>

                  <div className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <h4 className="font-bold font-mono mb-3">Community</h4>
                    <div className="space-y-2">
                      <Link 
                        href="https://discord.gg/aptoslabs"
                        target="_blank"
                        className="block font-mono text-sm hover:underline text-blue-600 dark:text-blue-400"
                      >
                        → Aptos Discord
                      </Link>
                      <Link 
                        href="https://github.com/aptos-labs"
                        target="_blank"
                        className="block font-mono text-sm hover:underline text-blue-600 dark:text-blue-400"
                      >
                        → Aptos GitHub
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <section className="text-center">
            <div className="bg-gradient-to-r from-black to-gray-800 dark:from-white dark:to-gray-200 text-white dark:text-black p-8 rounded-lg shadow-xl">
              <h3 className="text-2xl font-mono font-bold mb-4">
                🚀 Ready to Build with MCP?
              </h3>
                             <p className="font-mono text-sm mb-6 opacity-90">
                 Now that you have MCP set up, you&apos;re ready to create amazing Aptos dApps!<br/>
                 Use the power of AI assistance to accelerate your Vibe Coding experience.
               </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/submit"
                  className="px-8 py-3 bg-white dark:bg-black text-black dark:text-white border-2 border-white dark:border-black font-mono hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors no-underline"
                >
                  Submit Your Project
                </Link>
                <Link
                  href="/"
                  className="px-8 py-3 bg-transparent border-2 border-white dark:border-black font-mono hover:bg-white hover:text-black dark:hover:bg-black dark:hover:text-white transition-colors no-underline"
                >
                  View Submissions
                </Link>
              </div>
            </div>
          </section>

        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-300 dark:border-gray-700 bg-white dark:bg-black">
        <div className="container mx-auto px-6 py-8">
          <div className="text-center">
            <div className="flex flex-col md:flex-row justify-center items-center font-mono text-sm">
              <div>
                Aptos Vibe Hack 2025 - Internal Company Hackathon
              </div>
            </div>
            <div className="mt-4 text-xs font-mono text-gray-600 dark:text-gray-400">
              Powered by Aptos blockchain and Move smart contracts | Built with serious vibes and hella style
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
} 