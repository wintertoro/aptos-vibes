"use client";

import React, { useState, useEffect } from "react";
import { useWallet } from "@aptos-labs/wallet-adapter-react";
import { Aptos, AptosConfig, Network } from "@aptos-labs/ts-sdk";

interface VotingSystemProps {
  projectId: string;
  projectTitle: string;
}

interface VoteData {
  upvotes: number;
  downvotes: number;
  totalVotes: number;
  userVote: 'up' | 'down' | null;
}

export function VotingSystem({ projectId, projectTitle }: VotingSystemProps) {
  const { connected, account, signAndSubmitTransaction } = useWallet();
  const [voteData, setVoteData] = useState<VoteData>({
    upvotes: 0,
    downvotes: 0,
    totalVotes: 0,
    userVote: null,
  });
  const [isLoading, setIsLoading] = useState(false);
  
  // Initialize Aptos client
  const aptosConfig = new AptosConfig({ network: Network.TESTNET });
  const aptos = new Aptos(aptosConfig);

  // Load vote data from localStorage (simulating on-chain data for now)
  useEffect(() => {
    const savedVotes = localStorage.getItem(`votes_${projectId}`);
    if (savedVotes) {
      setVoteData(JSON.parse(savedVotes));
    }
    
    // Load user's previous vote
    if (account) {
      const userVote = localStorage.getItem(`user_vote_${projectId}_${account.address}`);
      if (userVote) {
        setVoteData(prev => ({ ...prev, userVote: userVote as 'up' | 'down' }));
      }
    }
  }, [projectId, account]);

  const handleVote = async (voteType: 'up' | 'down') => {
    if (!connected || !account) {
      alert("Please connect your wallet to vote!");
      return;
    }

    setIsLoading(true);
    
    try {
      // For now, we'll simulate on-chain voting with localStorage
      // In a real implementation, you would submit a transaction to the blockchain
      
      const newVoteData = { ...voteData };
      const previousVote = voteData.userVote;
      
      // Remove previous vote if exists
      if (previousVote === 'up') {
        newVoteData.upvotes -= 1;
      } else if (previousVote === 'down') {
        newVoteData.downvotes -= 1;
      }
      
      // Add new vote
      if (voteType === 'up') {
        newVoteData.upvotes += 1;
      } else {
        newVoteData.downvotes += 1;
      }
      
      newVoteData.userVote = voteType;
      newVoteData.totalVotes = newVoteData.upvotes - newVoteData.downvotes;
      
      // Save to localStorage (simulating blockchain storage)
      localStorage.setItem(`votes_${projectId}`, JSON.stringify(newVoteData));
      localStorage.setItem(`user_vote_${projectId}_${account.address}`, voteType);
      
      // Simulate blockchain transaction
      const payload = {
        type: "entry_function_payload",
        function: "0x1::voting::vote",
        arguments: [projectId, voteType === 'up' ? 1 : 0],
        type_arguments: [],
      };
      
      // Comment out actual transaction for now since we need a deployed contract
      // await signAndSubmitTransaction(payload);
      
      setVoteData(newVoteData);
      
    } catch (error) {
      console.error("Voting failed:", error);
      alert("Voting failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-between bg-gray-50 dark:bg-gray-700 rounded-lg p-3 mt-4">
      <div className="flex items-center gap-4">
        <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
          Vibe Score: 
          <span className={`ml-2 font-bold ${voteData.totalVotes >= 0 ? 'text-green-600' : 'text-red-600'}`}>
            {voteData.totalVotes > 0 ? '+' : ''}{voteData.totalVotes}
          </span>
        </div>
        
        <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
          <span className="text-green-600">↑{voteData.upvotes}</span>
          <span>•</span>
          <span className="text-red-600">↓{voteData.downvotes}</span>
        </div>
      </div>
      
      <div className="flex items-center gap-2">
        {connected ? (
          <>
            <button
              onClick={() => handleVote('up')}
              disabled={isLoading || voteData.userVote === 'up'}
              className={`p-2 rounded-lg transition-colors ${
                voteData.userVote === 'up'
                  ? 'bg-green-500 text-white'
                  : 'bg-gray-200 dark:bg-gray-600 hover:bg-green-100 dark:hover:bg-green-800 text-gray-600 dark:text-gray-300'
              } ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              👍
            </button>
            
            <button
              onClick={() => handleVote('down')}
              disabled={isLoading || voteData.userVote === 'down'}
              className={`p-2 rounded-lg transition-colors ${
                voteData.userVote === 'down'
                  ? 'bg-red-500 text-white'
                  : 'bg-gray-200 dark:bg-gray-600 hover:bg-red-100 dark:hover:bg-red-800 text-gray-600 dark:text-gray-300'
              } ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              👎
            </button>
          </>
        ) : (
          <div className="text-xs text-gray-500 dark:text-gray-400">
            Connect wallet to vote
          </div>
        )}
      </div>
    </div>
  );
} 