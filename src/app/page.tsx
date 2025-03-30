"use client";

import {
  ChainType,
  DepositWidget,
  SwapWidget,
  WithdrawWidget,
} from "@defuse-protocol/defuse-sdk";
import { LIST_TOKENS } from "@/constants/tokens";
import { useWalletSelector } from "@near-wallet-selector/react-hook";
import { Account } from "@/components/Account";
import { useId, useState, useEffect } from "react";
import { Portfolio } from "@/components/Portfolio";
import { IntentCreation } from "@/components/IntentCreation";
import { PrivacyAnalytics } from "@/components/PrivacyAnalytics";
import { LoginPrompt } from "@/components/LoginPrompt";

const LandingHero = ({ onLaunch }: { onLaunch: () => void }) => (
  <div className="w-full bg-gradient-to-r from-gray-900 to-black text-white py-20 px-4">
    <div className="max-w-6xl mx-auto">
      <div className="flex flex-col items-center text-center mb-16">
        <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
          ZCash Vault
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mb-8">
          Privacy-Preserving Portfolio Management & Cross-Chain Trading Platform
        </p>
        <div className="flex gap-4">
          <button 
            onClick={onLaunch}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-lg transition-all shadow-lg"
          >
            Launch App
          </button>
          <button className="border-2 border-blue-500 text-blue-400 hover:bg-blue-500/10 font-bold py-3 px-8 rounded-lg transition-all">
            Learn More
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <FeatureCard
          title="Privacy-First Trading"
          description="Conduct shielded swaps and transfers across multiple blockchains without compromising privacy"
          icon="🛡️"
        />
        <FeatureCard
          title="Intent-Driven Trading"
          description="Set up automated trading conditions that execute privately when your criteria are met"
          icon="🎯"
        />
        <FeatureCard
          title="Portfolio Management"
          description="Privately manage and rebalance your portfolio with customizable strategies"
          icon="📊"
        />
      </div>

      <div className="text-center">
        <h2 className="text-3xl font-bold mb-8 text-white">Supported Networks</h2>
        <div className="flex justify-center gap-8 flex-wrap">
          <NetworkIcon name="ZCash" icon="/icons/network/zcash.svg" />
          <NetworkIcon name="NEAR" icon="/icons/network/near.svg" />
          <NetworkIcon name="Ethereum" icon="/icons/network/ethereum.svg" />
          <NetworkIcon name="Bitcoin" icon="/icons/network/bitcoin.svg" />
        </div>
      </div>
    </div>
  </div>
);

const FeatureCard = ({ title, description, icon }: { title: string; description: string; icon: string }) => (
  <div className="bg-gray-800 p-6 rounded-xl border-2 border-gray-700 hover:border-blue-500 transition-all shadow-lg">
    <div className="text-4xl mb-4">{icon}</div>
    <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
    <p className="text-gray-300">{description}</p>
  </div>
);

const NetworkIcon = ({ name, icon }: { name: string; icon: string }) => (
  <div className="flex flex-col items-center gap-2">
    <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center p-2 border border-gray-700 shadow-lg">
      <img 
        src={icon} 
        alt={name} 
        className="w-8 h-8"
        onError={(e) => {
          e.currentTarget.src = `/icons/network/fallback.svg`;
        }}
      />
    </div>
    <span className="text-sm text-gray-300">{name}</span>
  </div>
);

export default function Home() {
  const activeTabSelectId = useId();
  const [chain] = useState<ChainType>(ChainType.Near);
  const [activeTab, setActiveTab] = useState("portfolio");
  const [showApp, setShowApp] = useState(() => {
    // Check if we're returning from wallet connection
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      return params.has('account_id') || localStorage.getItem('showApp') === 'true';
    }
    return false;
  });
  const { signedAccountId, signMessage, signAndSendTransactions } = useWalletSelector();

  // Persist showApp state
  useEffect(() => {
    if (showApp) {
      localStorage.setItem('showApp', 'true');
    }
  }, [showApp]);

  // Handle wallet return
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      if (params.has('account_id')) {
        setShowApp(true);
        // Clean up URL
        window.history.replaceState({}, '', window.location.pathname);
      }
    }
  }, []);

  // Add debugging for wallet connection state
  useEffect(() => {
    console.log('Wallet state changed:', {
      signedAccountId,
      showApp,
      searchParams: typeof window !== 'undefined' ? window.location.search : '',
      hasLocalStorage: typeof window !== 'undefined' ? !!localStorage.getItem('showApp') : false
    });
  }, [signedAccountId, showApp]);

  if (!showApp) {
    return (
      <div className="min-h-screen bg-[#1F2937] text-white">
        <nav className="fixed top-0 w-full bg-gray-900/90 backdrop-blur-md border-b border-gray-800 z-50 shadow-lg">
          <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
            <div className="text-xl font-bold text-white">ZCash Vault</div>
            <button 
              onClick={() => setShowApp(true)}
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-lg transition-all shadow-lg"
            >
              Launch App
            </button>
          </div>
        </nav>
        <LandingHero onLaunch={() => setShowApp(true)} />
      </div>
    );
  }

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-gray-400 text-white">
      <nav className="fixed top-0 w-full bg-gray-900/90 backdrop-blur-md border-b border-gray-800 z-50 shadow-lg">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-xl font-bold text-white">ZCash Vault</div>
          <Account />
        </div>
      </nav>

      <div className="flex flex-col gap-8 row-start-2 items-center sm:items-start mt-16">
        {!signedAccountId ? (
          <LoginPrompt />
        ) : (
          <>
            <div className="my-8">
              <span id={activeTabSelectId} className="sr-only">Active Tab</span>
              <select
                className="form-select bg-gray-800 text-white border-2 border-gray-700 rounded-lg px-4 py-2 shadow-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                id={activeTabSelectId}
                value={activeTab}
                onChange={(e) => setActiveTab(e.target.value)}
              >
                <option value="portfolio">Portfolio</option>
                <option value="create-intent">Create Intent</option>
                <option value="privacy">Privacy Analytics</option>
                <option value="swap">Swap</option>
                <option value="deposit">Deposit</option>
                <option value="withdraw">Withdraw</option>
              </select>
            </div>

            {activeTab === "portfolio" && <Portfolio />}
            {activeTab === "create-intent" && <IntentCreation />}
            {activeTab === "privacy" && <PrivacyAnalytics />}

            {activeTab === "deposit" && (
              <div className="w-full max-w-2xl mx-auto bg-gray-800 rounded-xl p-8 border-2 border-gray-700 shadow-lg">
                <DepositWidget
                  tokenList={LIST_TOKENS}
                  chainType={chain}
                  userAddress={signedAccountId}
                  sendTransactionEVM={async () => {
                    throw new Error(`EVM transactions aren't supported`);
                  }}
                  sendTransactionSolana={async () => {
                    throw new Error(`Solana transactions aren't supported`);
                  }}
                  sendTransactionNear={async (txs) => {
                    const result = await signAndSendTransactions({
                      transactions: txs.map(({ receiverId, actions }) => ({
                        signerId: signedAccountId,
                        receiverId,
                        actions,
                      })),
                    });

                    if (typeof result === "string") {
                      return result;
                    }

                    const outcome = result![0];
                    if (!outcome) {
                      throw new Error("No outcome");
                    }

                    return outcome.transaction.hash;
                  }}
                />
              </div>
            )}

            {activeTab === "swap" && (
              <div className="w-full max-w-2xl mx-auto bg-gray-800 rounded-xl p-8 border-2 border-gray-700 shadow-lg">
                <SwapWidget
                  tokenList={LIST_TOKENS}
                  sendNearTransaction={async (tx) => {
                    const result = await signAndSendTransactions({
                      transactions: [
                        {
                          receiverId: tx.receiverId,
                          actions: tx.actions,
                          signerId: signedAccountId,
                        },
                      ],
                    });

                    if (typeof result === "string") {
                      return { txHash: result };
                    }

                    const outcome = result![0];
                    if (!outcome) {
                      throw new Error("No outcome");
                    }

                    return { txHash: outcome.transaction.hash };
                  }}
                  userAddress={signedAccountId}
                  userChainType={chain}
                  signMessage={async (params) => {
                    switch (chain) {
                      case ChainType.Near: {
                        const signedData = {
                          ...params.NEP413,
                          nonce: Buffer.from(params.NEP413.nonce),
                        };

                        const signedMessage = await signMessage(signedData);

                        if (!signedMessage) throw new Error("No signature");

                        return {
                          type: "NEP413",
                          signatureData: signedMessage,
                          signedData,
                        };
                      }

                      default: {
                        throw new Error(`Chain ${chain} isn't supported!`);
                      }
                    }
                  }}
                  onSuccessSwap={() => {}}
                />
              </div>
            )}

            {activeTab === "withdraw" && (
              <div className="w-full max-w-2xl mx-auto bg-gray-800 rounded-xl p-8 border-2 border-gray-700 shadow-lg">
                <WithdrawWidget
                  tokenList={LIST_TOKENS}
                  userAddress={signedAccountId}
                  chainType={chain}
                  sendNearTransaction={async (tx) => {
                    const result = await signAndSendTransactions({
                      transactions: [
                        {
                          receiverId: tx.receiverId,
                          actions: tx.actions,
                          signerId: signedAccountId,
                        },
                      ],
                    });

                    if (typeof result === "string") {
                      return { txHash: result };
                    }

                    const outcome = result![0];
                    if (!outcome) {
                      throw new Error("No outcome");
                    }

                    return { txHash: outcome.transaction.hash };
                  }}
                  signMessage={async (params) => {
                    switch (chain) {
                      case ChainType.Near: {
                        const signedData = {
                          ...params.NEP413,
                          nonce: Buffer.from(params.NEP413.nonce),
                        };

                        const signedMessage = await signMessage(signedData);

                        if (!signedMessage) throw new Error("No signature");

                        return {
                          type: "NEP413",
                          signatureData: signedMessage,
                          signedData,
                        };
                      }

                      default: {
                        throw new Error(`Chain ${chain} isn't supported!`);
                      }
                    }
                  }}
                />
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
