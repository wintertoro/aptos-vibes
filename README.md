# 🔥 Aptos Vibes

**A vibecoded showcase for innovative Aptos blockchain projects with on-chain voting**

[![Live Demo](https://img.shields.io/badge/Demo-Live-brightgreen)](https://aptos-vibes.vercel.app)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Aptos](https://img.shields.io/badge/Blockchain-Aptos-orange)](https://aptos.dev)

---

## 🌟 Overview

Aptos Vibes is a curated showcase of innovative blockchain projects built on the Aptos ecosystem. Each project demonstrates unique approaches to decentralized computing, combining technical excellence with creative vision—what we call **"vibecoding."**

The platform features a retro terminal aesthetic with ASCII art branding and provides a comprehensive database of **FEATURED_PROJECTS.EXE** that inspire the community with their creative blockchain implementations.

### ✨ Features

- 🗳️ **On-Chain Voting System** - Vote on projects using Aptos smart contracts
- 🎨 **Retro Terminal UI** - Unique cyberpunk-inspired design with ASCII art
- 📱 **Wallet Integration** - Connect with Petra, Martian, and other Aptos wallets
- 🏆 **Vibe Scores** - Community-driven project rankings
- 📊 **Advanced Filtering** - Sort by date, vibe score, status, and tags
- 📄 **Pagination System** - Terminal-style project browsing (6 per page)
- 🔗 **Easy Submissions** - Simple JSON-based project addition process
- 📚 **Comprehensive Docs** - Full documentation and vibecoding philosophy
- 🚀 **Project Submission Portal** - Dedicated submission interface

---

## 🚀 Live Demo

**🌐 [Visit Aptos Vibes](https://aptos-vibes.vercel.app)**

### 📖 Navigation
- **Home**: Browse featured projects with filtering and voting
- **Docs**: Learn about vibecoding philosophy and Aptos resources  
- **Submit**: Add your project to the showcase

---

## 🛠️ Tech Stack

### Frontend
- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling with custom retro theme
- **Aptos Wallet Adapter** - Wallet connectivity

### Blockchain
- **Aptos Blockchain** - Layer 1 blockchain platform
- **Move Language** - Smart contract development
- **Aptos TypeScript SDK** - Blockchain interactions

### Deployment
- **Vercel** - Frontend hosting with automatic deployments
- **Aptos Mainnet** - Smart contract deployment

---

## 🏗️ Project Structure

```
aptos-vibes/
├── app/                    # Next.js app directory
│   ├── components/         # React components
│   │   ├── VotingSystem.tsx
│   │   ├── WalletButton.tsx
│   │   └── WalletProvider.tsx
│   ├── config/            # Configuration files
│   ├── docs/              # Documentation pages
│   └── submit/            # Project submission portal
├── data/                  # Project data
│   ├── projects.json      # Main project database
│   └── README.md          # Submission guide
├── move/                  # Move smart contracts
│   └── sources/           # Contract source code
├── scripts/               # Deployment scripts
└── public/                # Static assets and project images
```

---

## 🎯 What is Vibecoding?

**Vibecoding** is our philosophy of blockchain development that emphasizes:

### 🎨 Creative Expression
- Unique UI/UX design approaches
- Innovative smart contract patterns
- Novel blockchain interactions
- Artistic and functional harmony

### 🔧 Technical Excellence
- High-quality code standards
- Leveraging Aptos' advanced features
- Gas-optimized implementations
- Security-first development

### 🌟 Community Impact
- Open source contributions
- Educational value
- Inspiring innovation
- Building the ecosystem

---

## 📊 Smart Contract Features

Our voting system is powered by a fully on-chain Move smart contract:

### 🗳️ Voting Functions
- `upvote(project_id)` - Cast upvote for a project
- `downvote(project_id)` - Cast downvote for a project
- `remove_vote(project_id)` - Remove your vote

### 📈 View Functions
- `get_project_votes(id)` - Get vote counts
- `get_user_vote(user, id)` - Check user's vote
- `get_vibe_score(id)` - Calculate project score

### 🔒 Security Features
- One vote per wallet per project
- Vote switching and removal
- Input validation and error handling
- Sybil attack prevention

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Git
- Aptos CLI (for smart contract development)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/wintertoro/aptos-vibes.git
   cd aptos-vibes
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Visit [http://localhost:3000](http://localhost:3000)

### 🔧 Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run move:compile # Compile Move contracts
npm run move:test    # Test Move contracts
npm run deploy       # Deploy smart contracts
```

---

## 🤝 Contributing Projects

### 📝 How to Submit Your Project

Adding your project is super easy! Visit our [submission portal](https://aptos-vibes.vercel.app/submit) or follow these steps:

1. **Fork this repository**
2. **Edit `data/projects.json`**
3. **Add your project to the array**
4. **Include a project thumbnail (400x300px, <500KB)**
5. **Submit a pull request**

### 📋 Project Template

```json
{
  "id": "unique-project-id",
  "title": "Your Project Name",
  "description": "Brief description of your innovative Aptos project",
  "imageUrl": "/your-thumbnail.png",
  "projectUrl": "https://your-live-demo.com",
  "repoUrl": "https://github.com/your-username/your-repo",
  "tags": ["DeFi", "NFT", "Gaming"],
  "status": "live",
  "creator": "@your-username",
  "creatorUrl": "https://github.com/your-username",
  "dateAdded": "2024-01-15"
}
```

### ✅ Submission Requirements

- ✅ Built on or for the Aptos blockchain
- ✅ Demonstrates creative or innovative approach
- ✅ Open source or has public repository
- ✅ Clear documentation and description
- ✅ Working demo or detailed concept explanation

### 🏷️ Project Categories
- **Status**: `live`, `development`, `concept`
- **Tags**: `DeFi`, `NFT`, `Gaming`, `DApp`, `Tool`, `Educational`, `Infrastructure`

**📖 [Full Submission Guide](https://aptos-vibes.vercel.app/submit)**

---

## 🎨 UI/UX Features

### 🖥️ Retro Terminal Aesthetic
- ASCII art branding across all pages
- Terminal-style navigation and commands
- Cyberpunk color scheme with dark mode
- Scanlines and CRT effects

### 📱 Interactive Elements
- Typewriter animations for headers
- Terminal-style buttons and controls
- Hover effects and transitions
- Responsive design for all devices

### 🔍 Advanced Filtering
- **Sort Options**: Date (Newest↔Oldest), Vibe Score (High↔Low)
- **Status Filters**: All, Live, Development, Concept
- **Tag Filters**: Dynamic filtering by project categories
- **Pagination**: 6 projects per page with terminal-style controls

---

## 🌐 Deployment

### Frontend (Vercel)
The project is automatically deployed to Vercel on every push to main:
```bash
git push origin main  # Triggers automatic deployment
```

### Smart Contracts (Aptos Mainnet)
```bash
npm run deploy
```

### Environment Variables
```env
NEXT_PUBLIC_APTOS_NETWORK=mainnet
NEXT_PUBLIC_CONTRACT_ADDRESS=your_contract_address
```

---

## 🤝 Contributing

We welcome contributions! Here's how you can help:

### 🐛 Bug Reports
- Use the GitHub Issues tab
- Include detailed reproduction steps
- Provide browser/wallet information

### 💡 Feature Requests
- Describe the feature and use case
- Explain how it fits with vibecoding philosophy
- Consider implementation complexity

### 🔧 Code Contributions
- Fork the repository
- Create a feature branch
- Follow the existing code style
- Test thoroughly before submitting PR

---

## 📚 Resources

### 🔗 Links
- **Live Site**: [aptos-vibes.vercel.app](https://aptos-vibes.vercel.app)
- **Documentation**: [aptos-vibes.vercel.app/docs](https://aptos-vibes.vercel.app/docs)
- **Submit Project**: [aptos-vibes.vercel.app/submit](https://aptos-vibes.vercel.app/submit)
- **Aptos Official**: [aptos.dev](https://aptos.dev)
- **Aptos Discord**: [discord.gg/aptoslabs](https://discord.gg/aptoslabs)

### 📖 Learning
- **Vibecoding Philosophy**: Explore our docs for the complete guide
- **Move Language**: Learn Aptos smart contract development
- **Aptos NPM MCP**: Essential development tools and resources

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **Aptos Labs** - For building an incredible blockchain platform
- **Move Language** - For enabling secure smart contract development
- **Community Contributors** - For submitting amazing vibecoded projects
- **@wintertoro** - Original creator and maintainer

---

**Built with serious vibes and hella style** 🔥

*vibecoded by the community, for the community*
