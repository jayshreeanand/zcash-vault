import { useWalletSelector } from "@near-wallet-selector/react-hook";
import { useCallback } from "react";

export const Account = () => {
  const { signedAccountId, signIn, signOut } = useWalletSelector();

  const handleSignIn = useCallback(() => {
    console.log('Starting sign in process');
    signIn();
  }, [signIn]);

  const handleSignOut = useCallback(() => {
    console.log('Starting sign out process');
    signOut();
    // Clear app state on sign out
    if (typeof window !== 'undefined') {
      localStorage.removeItem('showApp');
    }
  }, [signOut]);

  console.log('Account component state:', { 
    signedAccountId,
    currentUrl: typeof window !== 'undefined' ? window.location.href : '',
  });

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        {!!signedAccountId && (
          <>
            <p className="text-3xl">Your account: {signedAccountId}</p>
            <button onClick={handleSignOut}>Logout</button>
          </>
        )}
        {!signedAccountId && (
          <>
            <button onClick={handleSignIn}>Login</button>
          </>
        )}
      </div>
    </nav>
  );
};
