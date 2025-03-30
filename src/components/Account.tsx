"use client";

import { useWalletSelector } from "@/contexts/WalletSelectorContext";

export const Account = () => {
  const { modal, accountId } = useWalletSelector();

  const handleSignIn = () => {
    modal?.show();
  };

  const handleSignOut = async () => {
    modal?.hide();
    const wallet = await modal?.wallet();
    await wallet?.signOut();
  };

  return (
    <nav className="flex items-center space-x-4">
      {!!accountId ? (
        <>
          <p className="text-sm text-gray-300">
            Connected: <span className="font-medium text-white">{accountId}</span>
          </p>
          <button
            onClick={handleSignOut}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
          >
            Disconnect
          </button>
        </>
      ) : (
        <button
          onClick={handleSignIn}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        >
          Connect Wallet
        </button>
      )}
    </nav>
  );
};
