import { useWalletSelector } from "@near-wallet-selector/react-hook";

export const Account = () => {
  const { signedAccountId, signIn, signOut } = useWalletSelector();

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        {!!signedAccountId && (
          <>
            <p className="text-3xl">Your account: {signedAccountId}</p>
            <button onClick={() => signOut()}>Logout</button>
          </>
        )}
        {!signedAccountId && (
          <>
            <button onClick={() => signIn()}>Login</button>
          </>
        )}
      </div>
    </nav>
  );
};
