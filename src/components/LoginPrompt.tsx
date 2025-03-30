import { Account } from "./Account";

export const LoginPrompt = () => {
  return (
    <div className="w-full max-w-md mx-auto bg-gray-900 rounded-xl p-8 text-center">
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Connect Your Wallet</h2>
        <p className="text-gray-400">
          Connect your wallet to access your portfolio, create intents, and manage your privacy settings.
        </p>
      </div>

      <div className="bg-gray-800/50 rounded-lg p-6 mb-8">
        <h3 className="text-lg font-semibold mb-4">Features Available After Login</h3>
        <ul className="space-y-3 text-left">
          <li className="flex items-center gap-3 text-gray-300">
            <span className="text-blue-400 text-xl">•</span>
            View and manage your portfolio
          </li>
          <li className="flex items-center gap-3 text-gray-300">
            <span className="text-blue-400 text-xl">•</span>
            Create private trading intents
          </li>
          <li className="flex items-center gap-3 text-gray-300">
            <span className="text-blue-400 text-xl">•</span>
            Access privacy analytics
          </li>
          <li className="flex items-center gap-3 text-gray-300">
            <span className="text-blue-400 text-xl">•</span>
            Perform shielded transactions
          </li>
        </ul>
      </div>

      <div className="flex justify-center">
        <Account />
      </div>
    </div>
  );
}; 