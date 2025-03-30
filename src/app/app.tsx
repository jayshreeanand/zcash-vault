"use client";

import { WalletSelectorProvider } from "@near-wallet-selector/react-hook";
import { SetupParams } from "@near-wallet-selector/react-hook/src/lib/WalletSelectorProvider";
import { setupMyNearWallet } from "@near-wallet-selector/my-near-wallet";
import "@near-wallet-selector/modal-ui/styles.css";
import Home from "./page";
import { ThemeProvider } from "next-themes";
import { Theme } from "@radix-ui/themes";

// NEAR Intents contract on mainnet
const CONTRACT_ID = "v1.intents.near";

const walletSelectorConfig: SetupParams = {
  network: "mainnet",
  createAccessKeyFor: CONTRACT_ID,
  modules: [
    setupMyNearWallet({
      walletUrl: "https://app.mynearwallet.com",
      iconUrl: "/icons/network/near.svg",
      successUrl: typeof window !== 'undefined' ? `${window.location.origin}` : undefined,
      failureUrl: typeof window !== 'undefined' ? `${window.location.origin}` : undefined,
    }),
  ],
};

export default function App() {
  return (
    <ThemeProvider attribute="class" forcedTheme="light">
      <Theme accentColor="green" hasBackground={false}>
        <WalletSelectorProvider config={walletSelectorConfig}>
          <Home />
        </WalletSelectorProvider>
      </Theme>
    </ThemeProvider>
  );
}
