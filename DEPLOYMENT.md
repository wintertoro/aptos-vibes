# 🚀 On-Chain Voting Deployment Guide

This guide will walk you through deploying the Aptos Vibes on-chain voting system to Aptos Testnet.

## 📋 Prerequisites

Before deploying, ensure you have:

1. **Node.js** (v18 or higher)
2. **Aptos CLI** installed globally
3. **Git** for version control

### Install Aptos CLI

```bash
# macOS (using Homebrew)
brew install aptos

# Linux/Windows (using curl)
curl -fsSL "https://aptos.dev/scripts/install_cli.py" | python3

# Verify installation
aptos --version
```

## 🛠️ Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Compile the Move Contract

```bash
npm run move:compile
```

This will:
- Compile the Move smart contract in `move/sources/voting.move`
- Generate bytecode in `move/build/`
- Validate the contract code

### 3. Deploy to Testnet

```bash
npm run deploy
```

This script will:
- Generate a new account for contract deployment
- Fund the account using testnet faucet
- Deploy the voting smart contract
- Initialize the voting system
- Initialize all project voting pools
- Display the contract address and private key

**⚠️ IMPORTANT:** Save the displayed private key securely! You'll need it for future contract management.

### 4. Update Frontend Configuration

After deployment, update the contract address in `app/config/contract.ts`:

```typescript
export const CONTRACT_CONFIG = {
  MODULE_ADDRESS: "YOUR_DEPLOYED_CONTRACT_ADDRESS", // Replace with actual address
  // ... rest of config
};
```

## 🎯 Testing the Deployment

1. **Start the development server:**
   ```bash
   npm run dev
   ```

2. **Connect your wallet:**
   - Install Petra wallet or another Aptos wallet
   - Switch to Testnet
   - Get testnet APT from the faucet: https://aptoslabs.com/testnet-faucet

3. **Test voting functionality:**
   - Click on a project card
   - Try upvoting/downvoting
   - Verify transactions on Aptos Explorer

## 📚 Smart Contract Functions

The deployed contract includes these key functions:

### Entry Functions (require transactions)
- `initialize(admin: &signer)` - Initialize the voting system
- `initialize_project(admin: &signer, project_id: String)` - Setup a new project
- `upvote(voter: &signer, admin_addr: address, project_id: String)` - Cast upvote
- `downvote(voter: &signer, admin_addr: address, project_id: String)` - Cast downvote  
- `remove_vote(voter: &signer, admin_addr: address, project_id: String)` - Remove vote

### View Functions (read-only)
- `get_project_votes(admin_addr: address, project_id: String): (u64, u64)` - Get vote counts
- `get_user_vote(admin_addr: address, project_id: String, user_addr: address): u8` - Get user's vote
- `get_vibe_score(admin_addr: address, project_id: String): i64` - Get vibe score

## 🔧 Contract Features

### ✅ **Voting Rules**
- Each wallet can only vote once per project
- Users can switch votes (up ↔ down)
- Users can remove votes entirely (toggle off)
- No double voting prevention built-in

### 📊 **Data Storage**
- Vote counts stored permanently on-chain
- User voting history tracked by address
- Event emissions for vote actions
- Vibe scores calculated as `upvotes - downvotes`

### 🔒 **Security Features**
- Input validation on all functions
- Proper error handling with custom error codes
- Admin-controlled project initialization
- Type-safe Move language implementation

## 🌍 Network Configuration

**Testnet:**
- Node URL: `https://fullnode.testnet.aptoslabs.com/v1`
- Faucet: `https://faucet.testnet.aptoslabs.com`
- Explorer: `https://explorer.aptoslabs.com/?network=testnet`

**Mainnet (for production):**
- Node URL: `https://fullnode.mainnet.aptoslabs.com/v1`
- Explorer: `https://explorer.aptoslabs.com/?network=mainnet`

## 🔍 Verification

After deployment, verify your contract on Aptos Explorer:

1. Go to https://explorer.aptoslabs.com/?network=testnet
2. Search for your contract address
3. Check the "Modules" tab to see deployed code
4. View transactions in the "Transactions" tab

## 🐛 Troubleshooting

### Common Issues:

**"aptos command not found"**
- Ensure Aptos CLI is installed and in your PATH
- Try restarting your terminal

**"Insufficient funds for transaction"**
- Get more testnet APT from the faucet
- Wait a few seconds between faucet requests

**"Module already exists"**
- The contract address already has a deployed module
- Use a fresh account or upgrade the existing module

**"Function not found"**
- Verify the contract address in `app/config/contract.ts`
- Ensure the contract was deployed successfully

### Debug Commands:

```bash
# Check Aptos CLI status
aptos info

# Test Move compilation
npm run move:test

# Check account balance
aptos account list --account YOUR_ACCOUNT_ADDRESS
```

## 📝 Next Steps

After successful deployment:

1. **Update Documentation**: Update project README with your contract address
2. **Configure Domain**: Point a custom domain to your Vercel deployment  
3. **Monitor Usage**: Track voting activity via Aptos Explorer
4. **Add Features**: Extend the contract with additional functionality
5. **Security Audit**: Consider professional audit for mainnet deployment

## 🤝 Contributing

To add new projects to the voting system:

1. Call `initialize_project()` with a new project ID
2. Update the frontend project list in `app/page.tsx`
3. Deploy the updated frontend

---

**🎉 Congratulations!** Your Aptos Vibes voting system is now fully on-chain and decentralized! 