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

        <main>
          <ZECVault />
        </main>

        <footer className="mt-16 text-center text-gray-400">
          <p>Powered by NEAR Intents & Zcash</p>
        </footer>
      </div>
    </div>
  );
}
