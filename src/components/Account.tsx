import { useWalletSelector } from "@near-wallet-selector/react-hook";
import { useCallback } from "react";

export const Account = () => {
  const { signedAccountId, signIn, signOut } = useWalletSelector();

  const handleSignIn = useCallback(() => {
    signIn();
  }, [signIn]);

  const handleSignOut = useCallback(() => {
    signOut();
  }, [signOut]);

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
