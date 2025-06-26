import Link from "next/link";
import { WalletButton } from "../components/WalletButton";

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white retro-crt retro-scanlines">
      {/* ASCII Art Header */}
      <div className="border-b-4 border-black dark:border-white">
        <pre className="text-xs md:text-sm text-center py-4 font-mono overflow-x-auto">
{`
 █████╗ ██████╗ ████████╗ ██████╗ ███████╗    ██╗   ██╗██╗██████╗ ███████╗███████╗
██╔══██╗██╔══██╗╚══██╔══╝██╔═══██╗██╔════╝    ██║   ██║██║██╔══██╗██╔════╝██╔════╝
███████║██████╔╝   ██║   ██║   ██║███████╗    ██║   ██║██║██████╔╝█████╗  ███████╗
██╔══██║██╔═══╝    ██║   ██║   ██║╚════██║    ╚██╗ ██╔╝██║██╔══██╗██╔══╝  ╚════██║
██║  ██║██║        ██║   ╚██████╔╝███████║     ╚████╔╝ ██║██████╔╝███████╗███████║
╚═╝  ╚═╝╚═╝        ╚═╝    ╚═════╝ ╚══════╝      ╚═══╝  ╚═╝╚═════╝ ╚══════╝╚══════╝
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
              href="/submit"
              className="retro-button px-4 py-2 no-underline"
            >
              [SUBMIT]
            </Link>
          </div>
          <WalletButton />
        </div>
        
        <div className="text-center mb-12">
          <Link
            href="https://github.com/wintertoro/aptos-vibes"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block hover:opacity-80 transition-opacity"
          >
            <h1 className="text-4xl md:text-5xl font-bold font-mono mb-4 retro-typewriter hover:underline cursor-pointer">
              &gt; SYSTEM_DOCUMENTATION.TXT
            </h1>
          </Link>
          <div className="border-2 border-black dark:border-white p-6 mb-6 bg-white dark:bg-black max-w-4xl mx-auto">
            <p className="text-lg font-mono">
              APTOS_VIBES_DOCUMENTATION_SYSTEM v1.0
            </p>
            <p className="text-sm font-mono text-gray-600 dark:text-gray-400 mt-2">
              COMPREHENSIVE GUIDE TO VIBECODING AND BLOCKCHAIN DEVELOPMENT
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 pb-16">
        <div className="max-w-4xl mx-auto space-y-12">
          
          {/* What is Vibecoding */}
          <section>
            <div className="border-4 border-black dark:border-white bg-white dark:bg-black p-4 mb-6">
              <h2 className="text-2xl font-bold font-mono">
                C:\DOCS&gt; TYPE VIBECODING.TXT
              </h2>
            </div>
            <div className="retro-card p-8">
              <pre className="font-mono text-sm mb-6">
{`┌─────────────────────────────────────────────────────────────────────┐
│                           VIBECODING.TXT                            │
├─────────────────────────────────────────────────────────────────────┤
│  A PHILOSOPHY OF BLOCKCHAIN DEVELOPMENT                             │
│  EMPHASIZING CREATIVITY, PASSION, AND UNIQUE APPROACHES            │
└─────────────────────────────────────────────────────────────────────┘`}
              </pre>
              <p className="font-mono text-sm leading-relaxed mb-6">
                // VIBECODING: Beyond functional code to craft applications<br/>
                // with personality, style, and innovative user experiences.<br/>
                // Combines technical excellence with creative vision.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="border-2 border-black dark:border-white bg-white dark:bg-black p-4">
                  <h3 className="text-lg font-bold font-mono mb-3 text-white">[CREATIVE_EXPRESSION]</h3>
                  <p className="font-mono text-sm text-white">
                    Express creativity through unique UI/UX design, innovative smart contract patterns, and novel blockchain interactions.
                  </p>
                </div>
                <div className="border-2 border-black dark:border-white bg-white dark:bg-black p-4">
                  <h3 className="text-lg font-bold font-mono mb-3 text-white">[TECHNICAL_EXCELLENCE]</h3>
                  <p className="font-mono text-sm text-white">
                    Maintain high technical standards while leveraging Aptos' Move language and advanced blockchain features.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Aptos Resources */}
          <section>
            <div className="border-4 border-black dark:border-white bg-white dark:bg-black p-4 mb-6">
              <h2 className="text-2xl font-bold font-mono">
                C:\DOCS&gt; DIR APTOS_RESOURCES
              </h2>
            </div>
            <div className="retro-card p-8">
              <div className="mb-8">
                <h3 className="text-xl font-bold font-mono mb-4">[APTOS_NPM_MCP]</h3>
                <p className="font-mono text-sm mb-4 leading-relaxed">
                  // The Aptos NPM Model Context Protocol (MCP) provides essential<br/>
                  // tools and resources for Aptos development. This powerful toolkit<br/>
                  // helps developers build, test, and deploy vibecoded projects efficiently.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    href="https://github.com/aptos-labs/aptos-npm-mcp/blob/main/README.md"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="retro-button px-6 py-3 no-underline"
                  >
                    [EXPLORE_APTOS_NPM_MCP]
                  </Link>
                  <Link 
                    href="https://github.com/wintertoro/aptos-vibes"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="retro-button px-6 py-3 no-underline"
                  >
                    [APTOS_VIBES_GH_REPO]
                  </Link>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="border border-black dark:border-white p-4">
                  <h4 className="font-bold font-mono mb-2">[OFFICIAL_DOCS]</h4>
                  <p className="text-xs font-mono mb-3">
                    Comprehensive guides and API references
                  </p>
                  <Link 
                    href="https://aptos.dev" 
                    target="_blank"
                    className="font-mono text-xs hover:underline"
                  >
                    &gt; VISIT_APTOS_DOCS
                  </Link>
                </div>
                <div className="border border-black dark:border-white p-4">
                  <h4 className="font-bold font-mono mb-2">[COMMUNITY]</h4>
                  <p className="text-xs font-mono mb-3">
                    Join the developer community
                  </p>
                  <Link 
                    href="https://discord.gg/aptoslabs" 
                    target="_blank"
                    className="font-mono text-xs hover:underline"
                  >
                    &gt; JOIN_DISCORD
                  </Link>
                </div>
                <div className="border border-black dark:border-white p-4">
                  <h4 className="font-bold font-mono mb-2">[GITHUB]</h4>
                  <p className="text-xs font-mono mb-3">
                    Core Aptos blockchain source code
                  </p>
                  <Link 
                    href="https://github.com/aptos-labs" 
                    target="_blank"
                    className="font-mono text-xs hover:underline"
                  >
                    &gt; BROWSE_CODE
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Using the Showcase */}
          <section>
            <div className="border-4 border-black dark:border-white bg-white dark:bg-black p-4 mb-6">
              <h2 className="text-2xl font-bold font-mono">
                C:\DOCS&gt; TYPE USAGE_GUIDE.TXT
              </h2>
            </div>
            <div className="retro-card p-8">
              
              <div className="mb-8">
                <h3 className="text-xl font-bold font-mono mb-4">[VOTING_SYSTEM_PROTOCOL]</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="border-2 border-black dark:border-white bg-black text-white dark:bg-white dark:text-black p-2 w-8 h-8 flex items-center justify-center font-mono text-xs">
                      1
                    </div>
                    <div>
                      <h4 className="font-bold font-mono">CONNECT_WALLET.EXE</h4>
                      <p className="font-mono text-sm">Click [CONNECT_WALLET] to link your Aptos wallet (Petra, Martian, etc.)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="border-2 border-black dark:border-white bg-black text-white dark:bg-white dark:text-black p-2 w-8 h-8 flex items-center justify-center font-mono text-xs">
                      2
                    </div>
                    <div>
                      <h4 className="font-bold font-mono">VOTE_ON_PROJECTS.EXE</h4>
                      <p className="font-mono text-sm">Each wallet can vote once per project: [+] (upvote) or [-] (downvote)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="border-2 border-black dark:border-white bg-black text-white dark:bg-white dark:text-black p-2 w-8 h-8 flex items-center justify-center font-mono text-xs">
                      3
                    </div>
                    <div>
                      <h4 className="font-bold font-mono">MANAGE_VOTES.EXE</h4>
                      <p className="font-mono text-sm">Switch votes or remove them by clicking the same button again</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold font-mono mb-4">[VIBE_SCORE_CALCULATION]</h3>
                <p className="font-mono text-sm mb-4">
                  Each project displays a VIBE_SCORE calculated as: UPVOTES - DOWNVOTES
                </p>
                <div className="border-2 border-black dark:border-white bg-black text-white dark:bg-white dark:text-black p-4">
                  <div className="flex items-center gap-4 text-sm font-mono">
                    <span>UP:15</span>
                    <span>-</span>
                    <span>DN:3</span>
                    <span>=</span>
                    <span className="font-bold">SCORE:+12</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Smart Contract */}
          <section>
            <div className="border-4 border-black dark:border-white bg-white dark:bg-black p-4 mb-6">
              <h2 className="text-2xl font-bold font-mono">
                C:\DOCS&gt; TYPE SMART_CONTRACT.TXT
              </h2>
            </div>
            <div className="retro-card p-8">
              <p className="font-mono text-sm leading-relaxed mb-6">
                // The Aptos Vibes voting system is powered by a fully on-chain<br/>
                // Move smart contract deployed on Aptos testnet.
              </p>
              
              <div className="space-y-6">
                <div className="border-4 border-black dark:border-white bg-black text-white dark:bg-white dark:text-black p-6">
                  <h3 className="text-lg font-bold font-mono mb-3">[CONTRACT_DEPLOYED_SUCCESSFULLY]</h3>
                  <div className="space-y-3 text-sm font-mono">

                    <div className="flex items-center gap-2">
                      <span>NETWORK:</span>
                      <span className="bg-white text-black dark:bg-black dark:text-white px-2 py-1">
                        APTOS_TESTNET
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span>MODULE:</span>
                      <code className="bg-white text-black dark:bg-black dark:text-white px-2 py-1">
                        aptos_vibes::vibe_voting
                      </code>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-bold font-mono mb-3">[BLOCKCHAIN_EXPLORER]</h3>
                  <p className="font-mono text-sm mb-4">
                    View the contract deployment transaction and explore the on-chain data:
                  </p>
                  <Link 
                    href="https://explorer.aptoslabs.com/txn/0x39550b287726cc809799113654709972a65172888e03930cce4de59ba7719af5?network=testnet"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="retro-button px-6 py-3 no-underline"
                  >
                    [VIEW_DEPLOYMENT_TRANSACTION]
                  </Link>
                </div>

                <div>
                  <h3 className="text-lg font-bold font-mono mb-3">[CONTRACT_FUNCTIONS]</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="border border-black dark:border-white p-4">
                      <h4 className="font-bold font-mono mb-2">[VOTING_FUNCTIONS]</h4>
                      <ul className="text-xs font-mono space-y-1">
                        <li>&gt; upvote(project_id)</li>
                        <li>&gt; downvote(project_id)</li>
                        <li>&gt; One vote per wallet enforcement</li>
                        <li>&gt; Vote switching and removal</li>
                      </ul>
                    </div>
                    <div className="border border-black dark:border-white p-4">
                      <h4 className="font-bold font-mono mb-2">[VIEW_FUNCTIONS]</h4>
                      <ul className="text-xs font-mono space-y-1">
                        <li>&gt; get_project_votes(id)</li>
                        <li>&gt; get_user_vote(user, id)</li>
                        <li>&gt; get_vibe_score(id)</li>
                        <li>&gt; Real-time vote counting</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="border-2 border-black dark:border-white bg-white dark:bg-black p-6">
                  <h4 className="font-bold font-mono mb-2 text-white">[TECHNICAL_IMPLEMENTATION]</h4>
                  <p className="font-mono text-sm mb-4 text-white">
                    Built with Move language leveraging Aptos' advanced features including:
                  </p>
                  <ul className="text-xs font-mono space-y-1 text-white">
                    <li>&gt; Resource-oriented programming for secure state management</li>
                    <li>&gt; Event emission for transparent voting activity</li>
                    <li>&gt; Efficient storage using Aptos Tables</li>
                    <li>&gt; Gas-optimized transaction processing</li>
                  </ul>
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
                vibecoded by{' '}
                <Link
                  href="https://github.com/wintertoro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline font-bold"
                >
                  @wintertoro
                </Link>
              </div>
              <div className="flex gap-6">
                <Link
                  href="https://aptos.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  [APTOS_DOCS]
                </Link>
                <Link
                  href="https://github.com/aptos-labs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  [GITHUB]
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
          </div>
        </div>
      </footer>
    </div>
  );
} 