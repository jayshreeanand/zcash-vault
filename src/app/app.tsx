"use client";

import { WalletSelectorProvider } from "@near-wallet-selector/react-hook";
import { SetupParams } from "@near-wallet-selector/react-hook/src/lib/WalletSelectorProvider";
import { setupBitteWallet } from "@near-wallet-selector/bitte-wallet";
import { setupMeteorWallet } from "@near-wallet-selector/meteor-wallet";
import Home from "./page";
import { ThemeProvider } from "next-themes";
import { Theme } from "@radix-ui/themes";

const walletSelectorConfig: SetupParams = {
  network: "mainnet",
  createAccessKeyFor: undefined,
  modules: [
    setupBitteWallet(),
    setupMeteorWallet(),
    // doesn't work properly as it requires redirecting
    // setupMyNearWallet(),
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
