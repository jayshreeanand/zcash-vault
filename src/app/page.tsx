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

export default function Home() {
  const activeTabSelectId = useId();
  const [chain] = useState<ChainType>(ChainType.Near);
  const [activeTab, setActiveTab] = useState("swap");
  const { signedAccountId, signMessage, signAndSendTransactions } =
    useWalletSelector();

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Account />

        <div className="my-8">
          <span id={activeTabSelectId}>Active Tab</span>
          <select
            className="form-select"
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
    </div>
  );
}
