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
import { useId, useState } from "react";
import { Portfolio } from "@/components/Portfolio";

const LandingHero = () => (
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
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-all">
            Launch App
          </button>
          <button className="border border-blue-600 text-blue-400 hover:bg-blue-600/10 font-bold py-3 px-8 rounded-lg transition-all">
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
        <h2 className="text-3xl font-bold mb-8">Supported Networks</h2>
        <div className="flex justify-center gap-8 flex-wrap">
          <NetworkIcon name="ZCash" icon="/static/icons/network/zcash-icon-black.svg" />
          <NetworkIcon name="NEAR" icon="/static/icons/network/near.svg" />
          <NetworkIcon name="Ethereum" icon="/static/icons/network/ethereum.svg" />
          <NetworkIcon name="Bitcoin" icon="/static/icons/network/bitcoin.svg" />
        </div>
      </div>
    </div>
  </div>
);

const FeatureCard = ({ title, description, icon }: { title: string; description: string; icon: string }) => (
  <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all">
    <div className="text-4xl mb-4">{icon}</div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
);

const NetworkIcon = ({ name, icon }: { name: string; icon: string }) => (
  <div className="flex flex-col items-center gap-2">
    <img src={icon} alt={name} className="w-12 h-12 invert" />
    <span className="text-sm">{name}</span>
  </div>
);

export default function Home() {
  const activeTabSelectId = useId();
  const [chain] = useState<ChainType>(ChainType.Near);
  const [activeTab, setActiveTab] = useState("portfolio");
  const [showApp, setShowApp] = useState(false);
  const { signedAccountId, signMessage, signAndSendTransactions } = useWalletSelector();

  if (!showApp) {
    return (
      <div className="min-h-screen bg-black text-white">
        <nav className="fixed top-0 w-full bg-black/50 backdrop-blur-md border-b border-gray-800 z-50">
          <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
            <div className="text-xl font-bold">ZCash Vault</div>
            <button 
              onClick={() => setShowApp(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition-all"
            >
              Launch App
            </button>
          </div>
        </nav>
        <LandingHero />
      </div>
    );
  }

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-black text-white">
      <nav className="fixed top-0 w-full bg-black/50 backdrop-blur-md border-b border-gray-800 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-xl font-bold">ZCash Vault</div>
          <Account />
        </div>
      </nav>

      <div className="flex flex-col gap-8 row-start-2 items-center sm:items-start mt-16">
        <div className="my-8">
          <span id={activeTabSelectId} className="sr-only">Active Tab</span>
          <select
            className="form-select bg-gray-800 text-white border-gray-700 rounded-lg px-4 py-2"
            id={activeTabSelectId}
            value={activeTab}
            onChange={(e) => setActiveTab(e.target.value)}
          >
            <option value="portfolio">Portfolio</option>
            <option value="swap">Swap</option>
            <option value="deposit">Deposit</option>
            <option value="withdraw">Withdraw</option>
          </select>
        </div>

        {activeTab === "portfolio" && <Portfolio />}

        {activeTab === "deposit" && (
          <DepositWidget
            tokenList={LIST_TOKENS}
            chainType={chain}
            userAddress={signedAccountId || undefined}
            sendTransactionEVM={async () => {
              throw new Error(`EVM transactions aren't supported`);
            }}
            sendTransactionSolana={async () => {
              throw new Error(`Solana transactions aren't supported`);
            }}
            sendTransactionNear={async (txs) => {
              const result = await signAndSendTransactions({
                transactions: txs.map(({ receiverId, actions }) => ({
                  signerId: signedAccountId!,
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
        )}

        {activeTab === "swap" && (
          <SwapWidget
            tokenList={LIST_TOKENS}
            sendNearTransaction={async (tx) => {
              const result = await signAndSendTransactions({
                transactions: [
                  {
                    receiverId: tx.receiverId,
                    actions: tx.actions,
                    signerId: signedAccountId!,
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
            userAddress={signedAccountId || null}
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
        )}

        {activeTab === "withdraw" && (
          <WithdrawWidget
            tokenList={LIST_TOKENS}
            userAddress={signedAccountId || undefined}
            chainType={chain}
            sendNearTransaction={async (tx) => {
              const result = await signAndSendTransactions({
                transactions: [
                  {
                    receiverId: tx.receiverId,
                    actions: tx.actions,
                    signerId: signedAccountId!,
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
        )}
      </div>
    </div>
  );
}
