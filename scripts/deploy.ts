import { Account, Aptos, AptosConfig, Network } from "@aptos-labs/ts-sdk";
import fs from "fs";
import path from "path";

async function deployContract() {
  console.log("🚀 Starting contract deployment...");

  // Initialize Aptos client for testnet
  const config = new AptosConfig({ network: Network.TESTNET });
  const aptos = new Aptos(config);

  // Generate a new account for the contract deployment
  // In production, you'd want to use a secure private key
  const account = Account.generate();
  
  console.log(`📍 Deploying from account: ${account.accountAddress}`);
  console.log(`🔑 Private key: ${account.privateKey}`);
  console.log("⚠️  IMPORTANT: Save this private key securely! You'll need it to manage the contract.");

  try {
    // Fund the account using testnet faucet
    console.log("💰 Funding account from faucet...");
    await aptos.fundAccount({
      accountAddress: account.accountAddress,
      amount: 100000000, // 1 APT
    });

    console.log("✅ Account funded successfully");

    // Read the compiled Move bytecode
    const packageMetadata = fs.readFileSync(
      path.join(__dirname, "../move/build/aptos_vibes/package-metadata.bcs")
    );
    const byteCode = fs.readFileSync(
      path.join(__dirname, "../move/build/aptos_vibes/bytecode_modules/voting.mv")
    );

    console.log("📦 Publishing Move package...");

    // Deploy the contract
    const transaction = await aptos.publishPackageTransaction({
      account: account.accountAddress,
      metadataBytes: packageMetadata,
      moduleBytecode: [byteCode],
    });

    const response = await aptos.signAndSubmitTransaction({
      signer: account,
      transaction,
    });

    await aptos.waitForTransaction({
      transactionHash: response.hash,
    });

    console.log("🎉 Contract deployed successfully!");
    console.log(`📄 Transaction hash: ${response.hash}`);
    console.log(`🏠 Contract address: ${account.accountAddress}`);

    // Initialize the voting system
    console.log("🔧 Initializing voting system...");
    
    const initTransaction = await aptos.transaction.build.simple({
      sender: account.accountAddress,
      data: {
        function: `${account.accountAddress}::voting::initialize`,
        functionArguments: [],
      },
    });

    const initResponse = await aptos.signAndSubmitTransaction({
      signer: account,
      transaction: initTransaction,
    });

    await aptos.waitForTransaction({
      transactionHash: initResponse.hash,
    });

    console.log("✅ Voting system initialized");
    console.log(`📄 Init transaction hash: ${initResponse.hash}`);

    // Initialize projects
    const projectIds = ["1", "2", "3", "4", "5", "6"]; // Matching the project IDs from the frontend
    
    console.log("📋 Initializing projects...");
    for (const projectId of projectIds) {
      const projectTransaction = await aptos.transaction.build.simple({
        sender: account.accountAddress,
        data: {
          function: `${account.accountAddress}::voting::initialize_project`,
          functionArguments: [projectId],
        },
      });

      const projectResponse = await aptos.signAndSubmitTransaction({
        signer: account,
        transaction: projectTransaction,
      });

      await aptos.waitForTransaction({
        transactionHash: projectResponse.hash,
      });

      console.log(`✅ Project ${projectId} initialized`);
    }

    console.log("\n🎯 DEPLOYMENT COMPLETE!");
    console.log("=".repeat(50));
    console.log(`Contract Address: ${account.accountAddress}`);
    console.log(`Network: Testnet`);
    console.log("=".repeat(50));
    console.log("\n📝 Next steps:");
    console.log(`1. Update CONTRACT_CONFIG.MODULE_ADDRESS in app/config/contract.ts to: "${account.accountAddress}"`);
    console.log("2. Save the private key securely for future contract management");
    console.log("3. Test the voting functionality on the frontend");

    return {
      contractAddress: account.accountAddress.toString(),
      privateKey: account.privateKey.toString(),
      deploymentHash: response.hash,
    };

  } catch (error) {
    console.error("❌ Deployment failed:", error);
    throw error;
  }
}

// Run deployment if this script is executed directly
if (require.main === module) {
  deployContract()
    .then((result) => {
      console.log("\n✅ Deployment successful!");
      process.exit(0);
    })
    .catch((error) => {
      console.error("\n❌ Deployment failed:", error);
      process.exit(1);
    });
}

export { deployContract }; 