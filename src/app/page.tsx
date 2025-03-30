"use client";

import { Account } from "@/components/Account";
import { ZECVault } from "@/components/ZECVault";

export default function Home() {
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
