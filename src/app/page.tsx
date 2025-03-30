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
import { ZECVault } from "@/components/ZECVault";

export default function Home() {
  const activeTabSelectId = useId();
  const [chain] = useState<ChainType>(ChainType.Near);
  const [activeTab, setActiveTab] = useState("swap");
  const { signedAccountId, signMessage, signAndSendTransactions } =
    useWalletSelector();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="container mx-auto px-4 py-8">
        <header className="flex justify-between items-center mb-12">
          <div>
            <h1 className="text-4xl font-bold">ZEC Vault</h1>
            <p className="text-gray-400">Privacy-Preserving DeFi Platform</p>
          </div>
          <Account />
        </header>

        <main className="space-y-8">
          {/* Original Swap UI */}
          <div className="bg-gray-800 rounded-lg p-6">
            <div className="mb-6">
              <span id={activeTabSelectId}>Active Tab</span>
              <select
                className="form-select ml-4 bg-gray-700 border-gray-600 text-white rounded"
                id={activeTabSelectId}
                value={activeTab}
                onChange={(e) => setActiveTab(e.target.value)}
              >
                <option value={"deposit"}>Deposit</option>
                <option value={"swap"}>Swap</option>
                <option value={"withdraw"}>Withdraw</option>
              </select>
            </div>

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

          {/* ZEC Vault Features */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6">Advanced Features</h2>
            <ZECVault />
          </div>
        </main>

        <footer className="mt-16 text-center text-gray-400">
          <p>Powered by NEAR Intents & Zcash</p>
        </footer>
      </div>
    </div>
  );
}
