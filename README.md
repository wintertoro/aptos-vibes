# 🔥 Aptos Vibes

**A vibecoded showcase for innovative Aptos blockchain projects with on-chain voting**

[![Live Demo](https://img.shields.io/badge/Demo-Live-brightgreen)](https://aptos-vibes-d0o5yggje-jings-projects-01d0d4a6.vercel.app)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Aptos](https://img.shields.io/badge/Blockchain-Aptos-orange)](https://aptos.dev)

---

## 🌟 Overview

Aptos Vibes is a curated showcase of innovative blockchain projects built on the Aptos ecosystem. Each project demonstrates unique approaches to decentralized computing, combining technical excellence with creative vision—what we call **"vibecoding."**

### ✨ Features

- 🗳️ **On-Chain Voting System** - Vote on projects using Aptos smart contracts
- 🎨 **Retro Terminal UI** - Unique cyberpunk-inspired design
- 📱 **Wallet Integration** - Connect with Petra, Martian, and other Aptos wallets
- 🏆 **Vibe Scores** - Community-driven project rankings
- 📊 **Real-Time Data** - Live vote counts and project metrics
- 🔗 **Easy Submissions** - Simple JSON-based project addition process

---

## 🚀 Live Demo

**🌐 [Visit Aptos Vibes](https://aptos-vibes-d0o5yggje-jings-projects-01d0d4a6.vercel.app)**

---

## 🛠️ Tech Stack

### Frontend
- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Aptos Wallet Adapter** - Wallet connectivity

### Blockchain
- **Aptos Blockchain** - Layer 1 blockchain platform
- **Move Language** - Smart contract development
- **Aptos TypeScript SDK** - Blockchain interactions

### Deployment
- **Vercel** - Frontend hosting
- **Aptos Testnet** - Smart contract deployment

---

## 🏗️ Project Structure

```
aptos-vibes/
├── app/                    # Next.js app directory
│   ├── components/         # React components
│   ├── config/            # Configuration files
│   └── docs/              # Documentation pages
├── data/                  # Project data
│   ├── projects.json      # Main project database
│   └── README.md          # Submission guide
├── move/                  # Move smart contracts
│   └── sources/           # Contract source code
├── scripts/               # Deployment scripts
└── public/                # Static assets
```

---

## 🎯 What is Vibecoding?

**Vibecoding** is our philosophy of blockchain development that emphasizes:

### 🎨 Creative Expression
- Unique UI/UX design approaches
- Innovative smart contract patterns
- Novel blockchain interactions

### 🔧 Technical Excellence
- High-quality code standards
- Leveraging Aptos' advanced features
- Gas-optimized implementations

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

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Git

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

Adding your project is super easy! Just follow these steps:

1. **Fork this repository**
2. **Edit `data/projects.json`**
3. **Add your project to the array**
4. **Submit a pull request**

### 📋 Project Template

```json
{
  "id": "your-project-id",
  "title": "Your Project Name",
  "description": "Brief description of your Aptos project",
  "imageUrl": "/api/placeholder/400/300",
  "projectUrl": "https://your-project-url.com",
  "tags": ["Tag1", "Tag2", "Tag3"],
  "status": "live"
}
```

### ✅ Submission Requirements

- ✅ Built on or for the Aptos blockchain
- ✅ Demonstrates creative or innovative approach
- ✅ Open source or has public repository
- ✅ Clear documentation and description

**📖 [Full Submission Guide](data/README.md)**

---

## 🌐 Deployment

### Frontend (Vercel)
```bash
vercel --prod
```

### Smart Contracts (Aptos Testnet)
```bash
npm run deploy
```

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🤝 Contributing

We welcome contributions! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📞 Contact & Support

- **GitHub Issues** - Bug reports and feature requests
- **Aptos Discord** - [Join the community](https://discord.gg/aptoslabs)
- **Documentation** - [Aptos Developer Docs](https://aptos.dev)

---

## 🙏 Acknowledgments

- [Aptos Labs](https://aptos.dev) - For the amazing blockchain platform
- [Next.js](https://nextjs.org) - For the React framework
- [Vercel](https://vercel.com) - For hosting and deployment
- The vibecoded community - For building innovative projects

---

**🔥 Built with passion for the Aptos ecosystem 🔥**
