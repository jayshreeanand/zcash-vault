import { useWalletSelector } from "@near-wallet-selector/react-hook";
import { useCallback, useEffect, useState } from "react";

export const Account = () => {
  const { wallet, signIn, signOut } = useWalletSelector();
  const [signedAccountId, setSignedAccountId] = useState<string | null>(null);

  useEffect(() => {
    const getAccounts = async () => {
      if (!wallet) return;
      const accounts = await wallet.getAccounts();
      setSignedAccountId(accounts[0]?.accountId || null);
    };
    getAccounts();
  }, [wallet]);

  const handleSignIn = useCallback(async () => {
    console.log('Starting sign in process');
    await signIn();
  }, [signIn]);

  const handleSignOut = useCallback(async () => {
    console.log('Starting sign out process');
    await signOut();
    setSignedAccountId(null);
    // Clear app state on sign out
    if (typeof window !== 'undefined') {
      localStorage.removeItem('showApp');
    }
  }, [signOut]);

  // Log account state changes
  useEffect(() => {
    console.log('Account state:', {
      signedAccountId,
      currentUrl: typeof window !== 'undefined' ? window.location.href : '',
      hasLocalStorage: typeof window !== 'undefined' ? !!localStorage.getItem('showApp') : false
    });
  }, [signedAccountId]);

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        {!!signedAccountId ? (
          <div className="flex items-center gap-4">
            <p className="text-sm text-gray-300 m-0">Connected: <span className="font-medium text-white">{signedAccountId}</span></p>
            <button 
              onClick={handleSignOut}
              className="bg-red-600 hover:bg-red-700 text-white text-sm font-medium py-2 px-4 rounded-lg transition-all"
            >
              Disconnect
            </button>
          </div>
        ) : (
          <button 
            onClick={handleSignIn}
            className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 px-4 rounded-lg transition-all"
          >
            Connect Wallet
          </button>
        )}
      </div>
    </nav>
  );
};
