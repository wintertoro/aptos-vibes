import Link from "next/link";
import { WalletButton } from "../components/WalletButton";

export default function HowToMCPPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white retro-crt retro-scanlines">
      {/* ASCII Art Header */}
      <div className="border-b-4 border-black dark:border-white">
        <pre className="text-xs md:text-sm text-center py-4 font-mono overflow-x-auto">
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
      <header className="container mx-auto px-6 py-8">
        <div className="flex justify-between items-start mb-8">
          <div className="flex gap-4">
            <Link 
              href="/" 
              className="retro-button px-4 py-2 no-underline"
            >
              [HOME]
            </Link>
            <Link 
              href="/readme"
              className="retro-button px-4 py-2 no-underline"
            >
              [README]
            </Link>
            <Link 
              href="/submit"
              className="retro-button px-4 py-2 no-underline"
            >
              [SUBMIT]
            </Link>
          </div>
          <WalletButton />
        </div>
        
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold font-mono mb-4 retro-typewriter">
            &gt; HOW_TO_MCP.EXE
          </h1>
          <div className="border-2 border-black dark:border-white p-6 bg-white dark:bg-black max-w-4xl mx-auto">
            <p className="text-lg font-mono">
              MODEL CONTEXT PROTOCOL SETUP GUIDE
            </p>
            <p className="text-sm font-mono text-gray-600 dark:text-gray-400 mt-2">
              STEP-BY-STEP INSTRUCTIONS FOR APTOS VIBE CODING
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 pb-16">
        <div className="max-w-6xl mx-auto space-y-12">
          
          {/* What is MCP */}
          <section>
            <div className="border-4 border-black dark:border-white bg-white dark:bg-black p-4 mb-6">
              <h2 className="text-2xl font-bold font-mono">
                C:\MCP&gt; TYPE WHAT_IS_MCP.TXT
              </h2>
            </div>
            <div className="retro-card p-8">
              <pre className="font-mono text-sm mb-6">
{`┌─────────────────────────────────────────────────────────────────────┐
│                    MODEL CONTEXT PROTOCOL (MCP)                     │
├─────────────────────────────────────────────────────────────────────┤
│  BRIDGE BETWEEN AI ASSISTANTS AND DEVELOPMENT TOOLS                │
│  ENABLES SEAMLESS APTOS BLOCKCHAIN DEVELOPMENT                     │
└─────────────────────────────────────────────────────────────────────┘`}
              </pre>
              
              <p className="font-mono text-sm leading-relaxed mb-6">
                MCP (Model Context Protocol) connects AI coding assistants like Claude or Cursor<br/>
                with specialized development tools and resources. For this hackathon, the Aptos<br/>
                NPM MCP provides essential blockchain development capabilities.
              </p>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="border-2 border-black dark:border-white bg-white dark:bg-black p-4">
                  <h3 className="text-lg font-bold font-mono mb-3">[AI_INTEGRATION]</h3>
                  <p className="font-mono text-sm">
                    Connect your AI assistant to Aptos development tools, documentation, and smart contract templates.
                  </p>
                </div>
                <div className="border-2 border-black dark:border-white bg-white dark:bg-black p-4">
                  <h3 className="text-lg font-bold font-mono mb-3">[RAPID_DEVELOPMENT]</h3>
                  <p className="font-mono text-sm">
                    Generate boilerplate code, deploy contracts, and build DApps faster with AI assistance.
                  </p>
                </div>
                <div className="border-2 border-black dark:border-white bg-white dark:bg-black p-4">
                  <h3 className="text-lg font-bold font-mono mb-3">[BEST_PRACTICES]</h3>
                  <p className="font-mono text-sm">
                    Follow Aptos development patterns and security guidelines automatically.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Prerequisites */}
          <section>
            <div className="border-4 border-black dark:border-white bg-white dark:bg-black p-4 mb-6">
              <h2 className="text-2xl font-bold font-mono">
                C:\MCP&gt; TYPE PREREQUISITES.TXT
              </h2>
            </div>
            <div className="retro-card p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold font-mono mb-4">[REQUIRED_SOFTWARE]</h3>
                  <div className="space-y-3">
                    <div className="border border-black dark:border-white p-3">
                      <h4 className="font-bold font-mono text-sm mb-1">Node.js 18+</h4>
                      <p className="font-mono text-xs">JavaScript runtime for development tools</p>
                      <Link href="https://nodejs.org" target="_blank" className="font-mono text-xs text-blue-600 dark:text-blue-400 hover:underline">
                        &gt; Download Node.js
                      </Link>
                    </div>
                    <div className="border border-black dark:border-white p-3">
                      <h4 className="font-bold font-mono text-sm mb-1">Aptos CLI</h4>
                      <p className="font-mono text-xs">Command-line tool for Aptos development</p>
                      <Link href="https://aptos.dev/tools/install-cli" target="_blank" className="font-mono text-xs text-blue-600 dark:text-blue-400 hover:underline">
                        &gt; Install Aptos CLI
                      </Link>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold font-mono mb-4">[AI_ASSISTANT]</h3>
                  <div className="space-y-3">
                    <div className="border border-black dark:border-white p-3">
                      <h4 className="font-bold font-mono text-sm mb-1">Claude Desktop</h4>
                      <p className="font-mono text-xs">Anthropic&apos;s AI assistant with MCP support</p>
                      <Link href="https://claude.ai/download" target="_blank" className="font-mono text-xs text-blue-600 dark:text-blue-400 hover:underline">
                        &gt; Download Claude
                      </Link>
                    </div>
                    <div className="border border-black dark:border-white p-3">
                      <h4 className="font-bold font-mono text-sm mb-1">Cursor IDE</h4>
                      <p className="font-mono text-xs">AI-powered code editor (alternative option)</p>
                      <Link href="https://cursor.sh" target="_blank" className="font-mono text-xs text-blue-600 dark:text-blue-400 hover:underline">
                        &gt; Download Cursor
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Setup Instructions */}
          <section>
            <div className="border-4 border-black dark:border-white bg-white dark:bg-black p-4 mb-6">
              <h2 className="text-2xl font-bold font-mono">
                C:\MCP&gt; RUN SETUP_INSTRUCTIONS.BAT
              </h2>
            </div>
            <div className="retro-card p-8">
              
              <div className="mb-8">
                <h3 className="text-xl font-bold font-mono mb-4">[STEP 1: INSTALL APTOS NPM MCP]</h3>
                <div className="bg-black text-green-400 p-4 font-mono text-sm mb-4 overflow-x-auto">
                  <div className="mb-2"># Install globally via npm</div>
                  <div className="text-white">npm install -g @aptos-labs/aptos-npm-mcp</div>
                </div>
                <p className="font-mono text-sm mb-4">
                  This installs the Aptos MCP server that provides AI assistants with<br/>
                  access to Aptos development tools and documentation.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold font-mono mb-4">[STEP 2: CONFIGURE CLAUDE DESKTOP]</h3>
                <p className="font-mono text-sm mb-4">
                  Add the following configuration to your Claude Desktop config file:
                </p>
                <div className="bg-black text-green-400 p-4 font-mono text-xs mb-4 overflow-x-auto">
                  <div className="mb-1 text-gray-400"># Config file location:</div>
                  <div className="mb-1 text-gray-400"># macOS: ~/Library/Application Support/Claude/claude_desktop_config.json</div>
                  <div className="mb-1 text-gray-400"># Windows: %APPDATA%\Claude\claude_desktop_config.json</div>
                  <div className="mb-3 text-gray-400"># Linux: ~/.config/Claude/claude_desktop_config.json</div>
                  
                  <div className="text-white">&#123;</div>
                  <div className="text-white">&nbsp;&nbsp;&quot;mcpServers&quot;: &#123;</div>
                  <div className="text-white">&nbsp;&nbsp;&nbsp;&nbsp;&quot;aptos-npm-mcp&quot;: &#123;</div>
                  <div className="text-white">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&quot;command&quot;: &quot;npx&quot;,</div>
                  <div className="text-white">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&quot;args&quot;: [&quot;@aptos-labs/aptos-npm-mcp&quot;]</div>
                  <div className="text-white">&nbsp;&nbsp;&nbsp;&nbsp;&#125;</div>
                  <div className="text-white">&nbsp;&nbsp;&#125;</div>
                  <div className="text-white">&#125;</div>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold font-mono mb-4">[STEP 3: RESTART CLAUDE]</h3>
                <p className="font-mono text-sm mb-4">
                  Restart Claude Desktop to load the MCP configuration. You should see<br/>
                  a small tool icon indicating MCP is connected.
                </p>
                
                <div className="border-2 border-green-500 bg-green-50 dark:bg-green-900 p-4">
                  <h4 className="font-bold font-mono text-sm text-green-700 dark:text-green-300 mb-2">✅ SUCCESS INDICATORS:</h4>
                  <ul className="font-mono text-xs text-green-700 dark:text-green-300 space-y-1">
                    <li>• MCP tool icon appears in Claude interface</li>
                    <li>• Claude can access Aptos documentation</li>
                    <li>• Smart contract templates available</li>
                    <li>• Deployment commands work</li>
                  </ul>
                </div>
              </div>

            </div>
          </section>

          {/* Usage Examples */}
          <section>
            <div className="border-4 border-black dark:border-white bg-white dark:bg-black p-4 mb-6">
              <h2 className="text-2xl font-bold font-mono">
                C:\MCP&gt; TYPE USAGE_EXAMPLES.TXT
              </h2>
            </div>
            <div className="retro-card p-8">
              
              <div className="mb-8">
                <h3 className="text-xl font-bold font-mono mb-4">[EXAMPLE PROMPTS]</h3>
                <p className="font-mono text-sm mb-6">
                  Once MCP is set up, you can use these prompts with Claude:
                </p>
                
                <div className="space-y-6">
                  <div className="border border-black dark:border-white p-4">
                    <h4 className="font-bold font-mono text-sm mb-2 text-blue-600 dark:text-blue-400">[PROJECT_CREATION]</h4>
                    <div className="bg-gray-100 dark:bg-gray-800 p-3 font-mono text-xs mb-2">
                      &quot;Create a new Aptos DApp for employee recognition with token rewards&quot;
                    </div>
                    <p className="font-mono text-xs">
                      Generates project structure, smart contracts, and frontend boilerplate
                    </p>
                  </div>

                  <div className="border border-black dark:border-white p-4">
                    <h4 className="font-bold font-mono text-sm mb-2 text-purple-600 dark:text-purple-400">[SMART_CONTRACT]</h4>
                    <div className="bg-gray-100 dark:bg-gray-800 p-3 font-mono text-xs mb-2">
                      &quot;Write a Move smart contract for voting with one vote per address&quot;
                    </div>
                    <p className="font-mono text-xs">
                      Creates secure Move code following Aptos best practices
                    </p>
                  </div>

                  <div className="border border-black dark:border-white p-4">
                    <h4 className="font-bold font-mono text-sm mb-2 text-green-600 dark:text-green-400">[DEPLOYMENT]</h4>
                    <div className="bg-gray-100 dark:bg-gray-800 p-3 font-mono text-xs mb-2">
                      &quot;Deploy this contract to Aptos testnet and create a frontend interface&quot;
                    </div>
                    <p className="font-mono text-xs">
                      Handles deployment process and generates TypeScript integration
                    </p>
                  </div>

                  <div className="border border-black dark:border-white p-4">
                    <h4 className="font-bold font-mono text-sm mb-2 text-red-600 dark:text-red-400">[DEBUGGING]</h4>
                    <div className="bg-gray-100 dark:bg-gray-800 p-3 font-mono text-xs mb-2">
                      &quot;Debug this Move error: &#39;FUNCTION_NOT_FOUND&#39; in my voting contract&quot;
                    </div>
                    <p className="font-mono text-xs">
                      Analyzes errors and suggests fixes with Aptos-specific context
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </section>

          {/* Troubleshooting */}
          <section>
            <div className="border-4 border-black dark:border-white bg-white dark:bg-black p-4 mb-6">
              <h2 className="text-2xl font-bold font-mono">
                C:\MCP&gt; TYPE TROUBLESHOOTING.TXT
              </h2>
            </div>
            <div className="retro-card p-8">
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold font-mono mb-4">[COMMON_ISSUES]</h3>
                  <div className="space-y-4">
                    <div className="border-2 border-red-500 bg-red-50 dark:bg-red-900 p-4">
                      <h4 className="font-bold font-mono text-sm text-red-700 dark:text-red-300 mb-2">❌ MCP NOT CONNECTING</h4>
                      <ul className="font-mono text-xs text-red-700 dark:text-red-300 space-y-1">
                        <li>• Check Node.js version (18+ required)</li>
                        <li>• Verify config file path and syntax</li>
                        <li>• Restart Claude completely</li>
                        <li>• Check npm global installation</li>
                      </ul>
                    </div>

                    <div className="border-2 border-yellow-500 bg-yellow-50 dark:bg-yellow-900 p-4">
                      <h4 className="font-bold font-mono text-sm text-yellow-700 dark:text-yellow-300 mb-2">⚠️ PERMISSION ERRORS</h4>
                      <ul className="font-mono text-xs text-yellow-700 dark:text-yellow-300 space-y-1">
                        <li>• Run npm with sudo on macOS/Linux</li>
                        <li>• Use admin prompt on Windows</li>
                        <li>• Configure npm global prefix</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold font-mono mb-4">[QUICK_FIXES]</h3>
                  <div className="space-y-4">
                    <div className="bg-black text-green-400 p-4 font-mono text-xs">
                      <div className="mb-2 text-gray-400"># Reinstall if having issues</div>
                      <div className="text-white">npm uninstall -g @aptos-labs/aptos-npm-mcp</div>
                      <div className="text-white">npm install -g @aptos-labs/aptos-npm-mcp</div>
                    </div>

                    <div className="bg-black text-green-400 p-4 font-mono text-xs">
                      <div className="mb-2 text-gray-400"># Check if MCP is installed</div>
                      <div className="text-white">npx @aptos-labs/aptos-npm-mcp --version</div>
                    </div>

                    <div className="bg-black text-green-400 p-4 font-mono text-xs">
                      <div className="mb-2 text-gray-400"># Find config file location</div>
                      <div className="text-white">echo $HOME/Library/Application\\ Support/Claude/</div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </section>

          {/* Support Resources */}
          <section>
            <div className="border-4 border-black dark:border-white bg-white dark:bg-black p-4 mb-6">
              <h2 className="text-2xl font-bold font-mono">
                C:\MCP&gt; DIR SUPPORT_RESOURCES
              </h2>
            </div>
            <div className="retro-card p-8">
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="border border-black dark:border-white p-4">
                  <h4 className="font-bold font-mono mb-2">[OFFICIAL_DOCS]</h4>
                  <div className="space-y-2">
                    <Link 
                      href="https://github.com/aptos-labs/aptos-npm-mcp"
                      target="_blank"
                      className="block font-mono text-xs hover:underline"
                    >
                      &gt; Aptos NPM MCP Repository
                    </Link>
                    <Link 
                      href="https://aptos.dev"
                      target="_blank"
                      className="block font-mono text-xs hover:underline"
                    >
                      &gt; Aptos Documentation
                    </Link>
                  </div>
                </div>

                <div className="border border-black dark:border-white p-4">
                  <h4 className="font-bold font-mono mb-2">[HACKATHON_SUPPORT]</h4>
                  <div className="space-y-2">
                    <div className="font-mono text-xs">💬 Slack: #vibe-hack-2025</div>
                    <Link 
                      href="https://www.notion.so/MCP-Feedback-22b8b846eb7280debf3ad4ab2046674f"
                      target="_blank"
                      className="block font-mono text-xs hover:underline"
                    >
                      &gt; MCP Feedback Form
                    </Link>
                  </div>
                </div>

                <div className="border border-black dark:border-white p-4">
                  <h4 className="font-bold font-mono mb-2">[COMMUNITY]</h4>
                  <div className="space-y-2">
                    <Link 
                      href="https://discord.gg/aptoslabs"
                      target="_blank"
                      className="block font-mono text-xs hover:underline"
                    >
                      &gt; Aptos Discord
                    </Link>
                    <Link 
                      href="https://github.com/aptos-labs"
                      target="_blank"
                      className="block font-mono text-xs hover:underline"
                    >
                      &gt; Aptos GitHub
                    </Link>
                  </div>
                </div>
              </div>

              <div className="text-center mt-8">
                <div className="border-4 border-black dark:border-white bg-black text-white dark:bg-white dark:text-black p-6 max-w-4xl mx-auto">
                  <p className="text-xl font-mono font-bold mb-4">
                    🚀 READY TO BUILD WITH MCP! 🚀
                  </p>
                  <p className="font-mono text-sm mb-6">
                    MCP supercharges your Vibe Coding experience!<br/>
                    Create amazing Aptos DApps faster than ever before.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                      href="/submit"
                      className="retro-button px-6 py-3 no-underline"
                    >
                      [START_BUILDING]
                    </Link>
                    <Link
                      href="/readme"
                      className="retro-button px-6 py-3 no-underline"
                    >
                      [HACKATHON_RULES]
                    </Link>
                  </div>
                </div>
              </div>

            </div>
          </section>

        </div>
      </main>

      {/* Footer */}
      <footer className="border-t-4 border-black dark:border-white bg-white dark:bg-black">
        <div className="container mx-auto px-6 py-8">
          <div className="text-center">
            <div className="flex flex-col md:flex-row justify-between items-center font-mono text-sm">
              <div className="mb-4 md:mb-0">
                Aptos Vibe Hack 2025 - Internal Company Hackathon
              </div>
              <div className="flex gap-6">
                <Link
                  href="https://github.com/aptos-labs/aptos-npm-mcp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  [MCP_GUIDE]
                </Link>
                <Link
                  href="https://aptos.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  [APTOS_DOCS]
                </Link>
                <Link
                  href="https://discord.gg/aptoslabs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  [DISCORD]
                </Link>
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