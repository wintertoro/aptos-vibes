import Link from "next/link";
import { WalletButton } from "../components/WalletButton";

export default function Manifesto() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white retro-crt retro-scanlines">
      {/* ASCII Art Header */}
      <div className="border-b-4 border-black dark:border-white">
        <pre className="text-xs md:text-sm text-center py-4 font-mono overflow-x-auto">
{`
██╗   ██╗██╗██████╗ ███████╗     ██████╗ ██████╗ ██████╗ ███████╗
██║   ██║██║██╔══██╗██╔════╝    ██╔════╝██╔═══██╗██╔══██╗██╔════╝
██║   ██║██║██████╔╝█████╗      ██║     ██║   ██║██║  ██║█████╗  
╚██╗ ██╔╝██║██╔══██╗██╔══╝      ██║     ██║   ██║██║  ██║██╔══╝  
 ╚████╔╝ ██║██████╔╝███████╗    ╚██████╗╚██████╔╝██████╔╝███████╗
  ╚═══╝  ╚═╝╚═════╝ ╚══════╝     ╚═════╝ ╚═════╝ ╚═════╝ ╚══════╝
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
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 pb-16">
        {/* Terminal-style Header */}
        <div className="text-center mb-12">
          <div className="border-4 border-black dark:border-white bg-white dark:bg-black p-4 inline-block">
            <h1 className="text-2xl font-bold font-mono">
              C:\APTOS_VIBES&gt; MANIFESTO.TXT
            </h1>
          </div>
          <p className="font-mono mt-4 text-sm">
            THE VIBE_CODE PHILOSOPHY FOR BUILDING APTOS dAPPS
          </p>
        </div>

        {/* Manifesto Content */}
        <div className="max-w-4xl mx-auto">
          {/* The Manifesto Section */}
          <div className="border-2 border-black dark:border-white bg-white dark:bg-black p-8 mb-8">
            <div className="font-mono text-sm mb-6">
              <span className="text-green-600 dark:text-green-400">vibes@aptos:~$</span> cat manifesto.txt
            </div>
            
            <div className="space-y-6 font-mono text-sm leading-relaxed">
              <div className="border-l-4 border-black dark:border-white pl-4">
                <h2 className="text-lg font-bold mb-3 uppercase">// THE VIBE CODE MANIFESTO</h2>
                <p className="mb-4">
                  Building on Aptos isn't just about smart contracts and blockchain infrastructure.
                  It's about crafting experiences that resonate with the human spirit of decentralization.
                </p>
                <p className="mb-4">
                  <strong>VIBE CODING</strong> is a philosophy that prioritizes authentic expression, 
                  creative problem-solving, and building technology that feels alive and engaging.
                </p>
                <p>
                  We reject sterile, corporate approaches to Web3. Instead, we embrace:
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="border border-black dark:border-white p-4">
                  <h3 className="font-bold mb-2">✨ AUTHENTICITY</h3>
                  <p className="text-xs">Code with personality, not just functionality</p>
                </div>
                <div className="border border-black dark:border-white p-4">
                  <h3 className="font-bold mb-2">🎨 CREATIVITY</h3>
                  <p className="text-xs">Unique UX that makes users feel something</p>
                </div>
                <div className="border border-black dark:border-white p-4">
                  <h3 className="font-bold mb-2">🔥 PASSION</h3>
                  <p className="text-xs">Built with love, not just for profit</p>
                </div>
                <div className="border border-black dark:border-white p-4">
                  <h3 className="font-bold mb-2">🌊 FLOW</h3>
                  <p className="text-xs">Seamless interactions that feel natural</p>
                </div>
              </div>
            </div>
          </div>

          {/* How to Vibe Code Section */}
          <div className="border-2 border-black dark:border-white bg-white dark:bg-black p-8 mb-8">
            <div className="font-mono text-sm mb-6">
              <span className="text-green-600 dark:text-green-400">vibes@aptos:~$</span> cat how_to_vibe_code.md
            </div>

            <div className="space-y-8 font-mono text-sm">
              <div>
                <h2 className="text-lg font-bold mb-4 text-center uppercase">
                  🚀 HOW TO VIBE CODE AN APTOS dAPP
                </h2>
              </div>

              {/* Step 1 */}
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="font-bold mb-2">STEP 1: SETUP YOUR VIBE ENVIRONMENT</h3>
                <div className="bg-black text-green-400 p-3 text-xs overflow-x-auto">
                  <div># Install Aptos CLI with style</div>
                  <div>curl -fsSL https://aptos.dev/scripts/install_cli.py | python3</div>
                  <div><br/></div>
                  <div># Initialize your project with intent</div>
                  <div>aptos init --network testnet</div>
                  <div>aptos move init --name my-vibe-dapp</div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-bold mb-2">STEP 2: CRAFT YOUR MOVE CONTRACT WITH SOUL</h3>
                <p className="mb-3 text-xs">
                  Don't just write code - write poetry in Move. Every function should have purpose, 
                  every struct should tell a story.
                </p>
                <div className="bg-black text-blue-400 p-3 text-xs overflow-x-auto">
                  <div>module vibe_dapp::soul_contract &#123;</div>
                  <div>&nbsp;&nbsp;// This isn't just a counter - it's a vibe meter</div>
                  <div>&nbsp;&nbsp;struct VibeState has key &#123;</div>
                  <div>&nbsp;&nbsp;&nbsp;&nbsp;energy: u64,</div>
                  <div>&nbsp;&nbsp;&nbsp;&nbsp;harmony: bool,</div>
                  <div>&nbsp;&nbsp;&#125;</div>
                  <div><br/></div>
                  <div>&nbsp;&nbsp;public entry fun amplify_vibes(account: &signer) &#123;</div>
                  <div>&nbsp;&nbsp;&nbsp;&nbsp;// Every transaction should feel meaningful</div>
                  <div>&nbsp;&nbsp;&#125;</div>
                  <div>&#125;</div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="font-bold mb-2">STEP 3: BUILD A FRONTEND THAT SPARKS JOY</h3>
                <p className="mb-3 text-xs">
                  Your UI should make users smile. Use unexpected animations, delightful micro-interactions, 
                  and design that tells your dApp's story.
                </p>
                <div className="bg-black text-purple-400 p-3 text-xs overflow-x-auto">
                  <div>// Not just a button - a portal to possibilities</div>
                  <div>&lt;button</div>
                  <div>&nbsp;&nbsp;onClick=&#123;amplifyVibes&#125;</div>
                  <div>&nbsp;&nbsp;className="hover:animate-pulse transition-all duration-300"</div>
                  <div>&gt;</div>
                  <div>&nbsp;&nbsp;✨ AMPLIFY THE VIBES ✨</div>
                  <div>&lt;/button&gt;</div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="border-l-4 border-yellow-500 pl-4">
                <h3 className="font-bold mb-2">STEP 4: DEPLOY WITH INTENTION</h3>
                <p className="mb-3 text-xs">
                  Every deployment is a gift to the community. Test thoroughly, document lovingly, 
                  and launch with celebration.
                </p>
                <div className="bg-black text-yellow-400 p-3 text-xs overflow-x-auto">
                  <div># Deploy your creation to the world</div>
                  <div>aptos move compile</div>
                  <div>aptos move test</div>
                  <div>aptos move publish --profile testnet</div>
                  <div><br/></div>
                  <div># Share the vibes</div>
                  <div>echo "🎉 Another vibe-coded dApp is born! 🎉"</div>
                </div>
              </div>

              {/* Step 5 */}
              <div className="border-l-4 border-red-500 pl-4">
                <h3 className="font-bold mb-2">STEP 5: CULTIVATE COMMUNITY</h3>
                <p className="text-xs">
                  Great dApps aren't just about technology - they're about the communities that form around them. 
                  Engage with users, gather feedback, and iterate with love.
                </p>
              </div>
            </div>
          </div>

          {/* Vibe Principles */}
          <div className="border-2 border-black dark:border-white bg-white dark:bg-black p-8 mb-8">
            <h2 className="text-lg font-bold mb-6 text-center font-mono uppercase">
              🌟 THE VIBE PRINCIPLES
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6 font-mono text-sm">
              <div className="space-y-4">
                <div className="border border-black dark:border-white p-3">
                  <h3 className="font-bold text-green-600 dark:text-green-400">PRINCIPLE 1: FEEL THE FLOW</h3>
                  <p className="text-xs mt-1">UX should be intuitive, interactions should be smooth, and users should never feel lost.</p>
                </div>
                
                <div className="border border-black dark:border-white p-3">
                  <h3 className="font-bold text-blue-600 dark:text-blue-400">PRINCIPLE 2: CODE WITH CHARACTER</h3>
                  <p className="text-xs mt-1">Variable names matter. Comments should tell stories. Your code is your signature.</p>
                </div>
                
                <div className="border border-black dark:border-white p-3">
                  <h3 className="font-bold text-purple-600 dark:text-purple-400">PRINCIPLE 3: DESIGN FOR DELIGHT</h3>
                  <p className="text-xs mt-1">Every pixel has purpose. Surprise users with thoughtful details and easter eggs.</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="border border-black dark:border-white p-3">
                  <h3 className="font-bold text-red-600 dark:text-red-400">PRINCIPLE 4: BUILD FOR BELONGING</h3>
                  <p className="text-xs mt-1">Create spaces where people feel welcome, heard, and valued.</p>
                </div>
                
                <div className="border border-black dark:border-white p-3">
                  <h3 className="font-bold text-yellow-600 dark:text-yellow-400">PRINCIPLE 5: ITERATE WITH INTENTION</h3>
                  <p className="text-xs mt-1">Every update should make the experience more vibey, not just add features.</p>
                </div>
                
                <div className="border border-black dark:border-white p-3">
                  <h3 className="font-bold text-indigo-600 dark:text-indigo-400">PRINCIPLE 6: SHARE THE KNOWLEDGE</h3>
                  <p className="text-xs mt-1">Open source your learnings. Help others vibe code their own creations.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="border-4 border-black dark:border-white bg-white dark:bg-black p-8 inline-block max-w-2xl">
              <h2 className="text-xl font-bold font-mono mb-4 uppercase">
                &gt; JOIN_THE_MOVEMENT.EXE
              </h2>
              <p className="font-mono mb-6 text-sm leading-relaxed">
                Ready to build something that matters?<br/>
                Ready to code with purpose and passion?<br/>
                Ready to change how we think about Web3?
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/"
                  className="retro-button px-6 py-3 no-underline"
                >
                  [EXPLORE_VIBES]
                </Link>
                <Link
                  href="/docs"
                  className="retro-button px-6 py-3 no-underline"
                >
                  [START_BUILDING]
                </Link>
              </div>
              <div className="mt-6 font-mono text-xs text-gray-600 dark:text-gray-400">
                // The future of Aptos is vibe-coded
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