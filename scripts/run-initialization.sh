#!/bin/bash

# Run the project initialization script
# Set your private key as an environment variable first:
# export APTOS_PRIVATE_KEY="your_private_key_here"

echo "🚀 Initializing projects in smart contract..."
echo "Make sure you have set the APTOS_PRIVATE_KEY environment variable"
echo ""

# Check if private key is set
if [ -z "$APTOS_PRIVATE_KEY" ]; then
    echo "❌ Error: APTOS_PRIVATE_KEY environment variable is not set"
    echo "Please set it with: export APTOS_PRIVATE_KEY=\"your_private_key_here\""
    exit 1
fi

# Run the TypeScript script
npx tsx scripts/initialize-projects.ts