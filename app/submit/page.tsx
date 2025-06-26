import Link from "next/link";
import { WalletButton } from "../components/WalletButton";
import { SubmissionForm } from "../components/SubmissionForm";

export default function Submit() {
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
              href="/docs"
              className="retro-button px-4 py-2 no-underline"
            >
              [DOCS]
            </Link>
          </div>
          <WalletButton />
        </div>
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold font-mono mb-4 retro-typewriter">
            &gt; SUBMIT_PROJECT.EXE
          </h1>
          <div className="border-2 border-black dark:border-white p-6 mb-6 bg-white dark:bg-black">
            <p className="text-xl font-mono mb-2">
              SYSTEM: PROJECT_SUBMISSION_PROTOCOL
            </p>
            <p className="text-sm font-mono text-gray-600 dark:text-gray-400">
              STATUS: [ACCEPTING_ENTRIES] | QUEUE: OPEN | TARGET: APTOS_ECOSYSTEM
            </p>
          </div>
          <p className="text-lg font-mono max-w-4xl mx-auto leading-relaxed">
            // Share your innovative Aptos blockchain projects<br/>
            // Join our curated database of vibecoded applications<br/>
            // Inspire the community with your creative vision
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 pb-16">

        {/* Submit Form */}
        <SubmissionForm />

        {/* Submission Guidelines */}
        <div className="max-w-4xl mx-auto mt-12">
          <div className="border-2 border-black dark:border-white bg-white dark:bg-black p-8 mb-8">
            <div className="font-mono text-sm mb-6">
              <span className="text-green-600 dark:text-green-400">submit@aptos:~$</span> cat submission_guidelines.txt
            </div>
            
            <div className="space-y-6 font-mono text-sm">
              <div className="border-l-4 border-black dark:border-white pl-4 mb-6">
                <p className="leading-relaxed">
                  // Have a vibecoded Aptos project you'd like to showcase?<br/>
                  // We'd love to feature it in our database!
                </p>
              </div>

              <div>
                <h2 className="text-lg font-bold mb-4 uppercase">
                  📋 SUBMISSION GUIDELINES
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="border border-black dark:border-white p-4">
                    <h3 className="font-bold text-green-600 dark:text-green-400 mb-2">✅ WHAT WE ACCEPT</h3>
                    <ul className="text-xs space-y-1">
                      <li>• Aptos-based dApps and smart contracts</li>
                      <li>• Move language projects</li>
                      <li>• Developer tools for Aptos ecosystem</li>
                      <li>• Educational resources and tutorials</li>
                      <li>• Creative blockchain experiments</li>
                    </ul>
                  </div>

                  <div className="border border-black dark:border-white p-4">
                    <h3 className="font-bold text-blue-600 dark:text-blue-400 mb-2">🎯 SUBMISSION CRITERIA</h3>
                    <ul className="text-xs space-y-1">
                      <li className="flex items-start gap-2">
                        <span>[✓]</span>
                        Built on or for the Aptos blockchain
                      </li>
                      <li className="flex items-start gap-2">
                        <span>[✓]</span>
                        Demonstrates creative or innovative approach
                      </li>
                      <li className="flex items-start gap-2">
                        <span>[✓]</span>
                        Open source or has public repository
                      </li>
                      <li className="flex items-start gap-2">
                        <span>[✓]</span>
                        Clear documentation and description
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="border border-black dark:border-white p-4">
                    <h3 className="font-bold text-purple-600 dark:text-purple-400 mb-2">📝 REQUIRED INFO</h3>
                    <ul className="text-xs space-y-1">
                      <li>• Project name and description</li>
                      <li>• Live demo URL (if applicable)</li>
                      <li>• GitHub repository link</li>
                      <li>• Creator/team information</li>
                      <li>• Project status (live/dev/concept)</li>
                    </ul>
                  </div>

                  <div className="border border-black dark:border-white p-4">
                    <h3 className="font-bold text-red-600 dark:text-red-400 mb-2">⚡ SUBMISSION PROCESS</h3>
                    <ul className="text-xs space-y-1">
                      <li>• Fork the aptos-vibes repository</li>
                      <li>• Edit data/projects.json file</li>
                      <li>• Add your project to the JSON array</li>
                      <li>• Include a project thumbnail image</li>
                      <li>• Submit a pull request</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Quick Submit Guide */}
              <div className="border-4 border-black dark:border-white bg-black text-white dark:bg-white dark:text-black p-6 mt-6">
                <h4 className="font-bold font-mono mb-2">[READY_TO_SUBMIT]</h4>
                <p className="font-mono text-sm mb-4">
                  Adding your project is easy! Just edit one file and submit a pull request.
                </p>
                <div className="space-y-3 mb-4">
                  <div className="font-mono text-xs">
                    <span className="font-bold">STEP 1:</span> Fork the repository
                  </div>
                  <div className="font-mono text-xs">
                    <span className="font-bold">STEP 2:</span> Edit <code className="bg-white text-black dark:bg-black dark:text-white px-1">data/projects.json</code>
                  </div>
                  <div className="font-mono text-xs">
                    <span className="font-bold">STEP 3:</span> Add your project to the JSON array
                  </div>
                  <div className="font-mono text-xs">
                    <span className="font-bold">STEP 4:</span> Submit pull request
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-2">
                  <Link 
                    href="https://github.com/wintertoro/aptos-vibes"
                    target="_blank"
                    className="retro-button px-4 py-2 no-underline"
                  >
                    [VIEW_REPOSITORY]
                  </Link>
                  <Link 
                    href="https://github.com/wintertoro/aptos-vibes/blob/main/README.md"
                    target="_blank"
                    className="retro-button px-4 py-2 no-underline"
                  >
                    [READ_GUIDE]
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Technical Guide */}
          <div className="border-2 border-black dark:border-white bg-white dark:bg-black p-8 mb-8">
            <div className="font-mono text-sm mb-6">
              <span className="text-green-600 dark:text-green-400">submit@aptos:~$</span> cat quick_guide.md
            </div>

            <div className="space-y-6 font-mono text-sm">
              <h2 className="text-lg font-bold mb-4 uppercase">
                ⚡ QUICK TECHNICAL GUIDE
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="border-l-4 border-green-500 pl-4">
                  <h3 className="font-bold mb-2">PROJECT DATA FORMAT</h3>
                  <div className="bg-black text-green-400 p-3 text-xs overflow-x-auto">
                    <div>&#123;</div>
                    <div>&nbsp;&nbsp;"id": "unique-id",</div>
                    <div>&nbsp;&nbsp;"title": "Project Name",</div>
                    <div>&nbsp;&nbsp;"description": "Brief description",</div>
                    <div>&nbsp;&nbsp;"imageUrl": "/thumbnail.png",</div>
                    <div>&nbsp;&nbsp;"projectUrl": "https://demo.com",</div>
                    <div>&nbsp;&nbsp;"repoUrl": "https://github.com/user/repo",</div>
                    <div>&nbsp;&nbsp;"tags": ["aptos", "defi"],</div>
                    <div>&nbsp;&nbsp;"status": "live",</div>
                    <div>&nbsp;&nbsp;"creator": "@username"</div>
                    <div>&#125;</div>
                  </div>
                </div>

                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="font-bold mb-2">REQUIREMENTS</h3>
                  <ul className="text-xs space-y-1">
                    <li>• <strong>Image:</strong> 400x300px, under 500KB</li>
                    <li>• <strong>Status:</strong> "live", "development", or "concept"</li>
                    <li>• <strong>Tags:</strong> Relevant categories (dApp, DeFi, NFT, etc.)</li>
                    <li>• <strong>Links:</strong> Working demo + GitHub repo</li>
                    <li>• <strong>Quality:</strong> Clean code, good documentation</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Final CTA */}
          <div className="text-center">
            <div className="border-4 border-black dark:border-white bg-white dark:bg-black p-8 inline-block max-w-2xl">
              <h2 className="text-xl font-bold font-mono mb-4 uppercase">
                &gt; READY_TO_SUBMIT.EXE
              </h2>
              <p className="font-mono mb-6 text-sm leading-relaxed">
                Got an innovative Aptos project to showcase?<br/>
                Ready to inspire the community?<br/>
                Let's build the ecosystem together!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="https://github.com/wintertoro/aptos-vibes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="retro-button px-6 py-3 no-underline"
                >
                  [FORK_REPOSITORY]
                </Link>
                <Link
                  href="/docs"
                  className="retro-button px-6 py-3 no-underline"
                >
                  [VIEW_DOCS]
                </Link>
              </div>
              <div className="mt-6 font-mono text-xs text-gray-600 dark:text-gray-400">
                // Building the future, one vibe at a time
              </div>
            </div>
          </div>
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