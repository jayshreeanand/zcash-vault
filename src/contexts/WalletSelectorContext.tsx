"use client";

import { setupWalletSelector } from "@near-wallet-selector/core";
import { setupModal } from "@near-wallet-selector/modal-ui";
import { setupMyNearWallet } from "@near-wallet-selector/my-near-wallet";
import { setupMeteorWallet } from "@near-wallet-selector/meteor-wallet";
import { setupBitteWallet } from "@near-wallet-selector/bitte-wallet";
import type { WalletSelector } from "@near-wallet-selector/core";
import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react";
import { map } from "rxjs";

declare global {
  interface Window {
    selector: WalletSelector;
    modal: any;
  }
}

export interface WalletSelectorContextValue {
  selector: WalletSelector | null;
  modal: any | null;
  accounts: Array<any>;
  accountId: string | null;
}

const WalletSelectorContext = createContext<WalletSelectorContextValue>({
  selector: null,
  modal: null,
  accounts: [],
  accountId: null,
});

export function WalletSelectorContextProvider({ children }: { children: ReactNode }) {
  const [selector, setSelector] = useState<WalletSelector | null>(null);
  const [modal, setModal] = useState<any | null>(null);
  const [accounts, setAccounts] = useState<Array<any>>([]);

  const init = useCallback(async () => {
    const _selector = await setupWalletSelector({
      network: "mainnet",
      debug: true,
      modules: [
        setupMyNearWallet(),
        setupMeteorWallet(),
        setupBitteWallet(),
      ],
    });
    
    const _modal = setupModal(_selector, {
      contractId: "defuse.near",
    });

    const state = _selector.store.getState();
    setAccounts(state.accounts);

    // For debugging
    window.selector = _selector;
    window.modal = _modal;

    setSelector(_selector);
    setModal(_modal);
  }, []);

  useEffect(() => {
    init().catch((err) => {
      console.error(err);
    });
  }, [init]);

  useEffect(() => {
    if (!selector) {
      return;
    }

    const subscription = selector.store.observable
      .pipe(map((state) => state.accounts))
      .subscribe((nextAccounts) => {
        setAccounts(nextAccounts);
      });

    return () => subscription.unsubscribe();
  }, [selector]);

  const accountId = accounts.find((account) => account.active)?.accountId || null;

  return (
    <WalletSelectorContext.Provider
      value={{
        selector,
        modal,
        accounts,
        accountId,
      }}
    >
      {children}
    </WalletSelectorContext.Provider>
  );
}

export function useWalletSelector() {
  const context = useContext(WalletSelectorContext);
  if (!context) {
    throw new Error(
      "useWalletSelector must be used within a WalletSelectorContextProvider"
    );
  }
  return context;
} 