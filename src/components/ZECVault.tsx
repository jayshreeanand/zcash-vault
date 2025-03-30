import { useWalletSelector } from "@near-wallet-selector/react-hook";
import { useState } from "react";
import { ChainType } from "@defuse-protocol/defuse-sdk";
import { LIST_TOKENS } from "@/constants/tokens";
import { CreateIntentForm } from "./CreateIntentForm";

interface PortfolioAllocation {
  token: string;
  percentage: number;
}

interface TradingIntent {
  fromToken: string;
  toToken: string;
  condition: {
    type: "price" | "time";
    value: string;
  };
  amount: string;
  isShielded: boolean;
}

interface RebalanceAction {
  needsRebalancing: boolean;
  fromToken: string;
  toToken: string;
  amount: string;
}

export const ZECVault = () => {
  const { signedAccountId, signMessage, signAndSendTransactions } = useWalletSelector();
  const [selectedTab, setSelectedTab] = useState<"portfolio" | "intents" | "shielded">("portfolio");
  const [portfolioAllocation, setPortfolioAllocation] = useState<PortfolioAllocation[]>([
    { token: "ZEC", percentage: 50 },
    { token: "NEAR", percentage: 30 },
    { token: "USDC", percentage: 20 },
  ]);
  const [tradingIntents, setTradingIntents] = useState<TradingIntent[]>([]);

  const handleShieldedSwap = async (fromToken: string, toToken: string, amount: string) => {
    try {
      // Create a shielded swap transaction using Defuse Protocol
      const result = await signAndSendTransactions({
        transactions: [{
          signerId: signedAccountId!,
          receiverId: "defuse.near", // Replace with actual contract
          actions: [{
            type: "FunctionCall",
            params: {
              methodName: "shielded_swap",
              args: {
                from_token: fromToken,
                to_token: toToken,
                amount: amount,
                is_shielded: true
              },
              gas: "300000000000000",
              deposit: "1"
            }
          }]
        }]
      });

      console.log("Shielded swap result:", result);
    } catch (error) {
      console.error("Error in shielded swap:", error);
    }
  };

  const handlePortfolioRebalance = async () => {
    try {
      // AI-powered portfolio rebalancing
      const currentPrices = await fetchTokenPrices();
      const optimalAllocation = calculateOptimalAllocation(currentPrices, portfolioAllocation);
      
      // Execute rebalancing transactions
      for (const allocation of optimalAllocation) {
        if (allocation.needsRebalancing) {
          await handleShieldedSwap(
            allocation.fromToken,
            allocation.toToken,
            allocation.amount
          );
        }
      }
    } catch (error) {
      console.error("Error in portfolio rebalance:", error);
    }
  };

  const createTradingIntent = async (intent: TradingIntent) => {
    try {
      // Store the trading intent
      setTradingIntents([...tradingIntents, intent]);

      // Create an intent on the Defuse Protocol
      const result = await signAndSendTransactions({
        transactions: [{
          signerId: signedAccountId!,
          receiverId: "defuse.near", // Replace with actual contract
          actions: [{
            type: "FunctionCall",
            params: {
              methodName: "create_intent",
              args: {
                from_token: intent.fromToken,
                to_token: intent.toToken,
                condition: intent.condition,
                amount: intent.amount,
                is_shielded: intent.isShielded
              },
              gas: "300000000000000",
              deposit: "1"
            }
          }]
        }]
      });

      console.log("Trading intent created:", result);
    } catch (error) {
      console.error("Error creating trading intent:", error);
    }
  };

  // Helper functions
  const fetchTokenPrices = async () => {
    // Implement price fetching logic
    return {};
  };

  const calculateOptimalAllocation = (prices: any, currentAllocation: PortfolioAllocation[]): RebalanceAction[] => {
    // Implement AI-powered allocation calculation
    // This is a placeholder implementation
    return currentAllocation.map(allocation => ({
      needsRebalancing: false,
      fromToken: allocation.token,
      toToken: "USDC",
      amount: "0"
    }));
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-6">
      <div className="flex justify-center space-x-4 mb-8">
        <button
          className={`px-4 py-2 rounded ${selectedTab === "portfolio" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800"}`}
          onClick={() => setSelectedTab("portfolio")}
        >
          Portfolio Management
        </button>
        <button
          className={`px-4 py-2 rounded ${selectedTab === "intents" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800"}`}
          onClick={() => setSelectedTab("intents")}
        >
          Trading Intents
        </button>
        <button
          className={`px-4 py-2 rounded ${selectedTab === "shielded" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800"}`}
          onClick={() => setSelectedTab("shielded")}
        >
          Shielded Swaps
        </button>
      </div>

      {selectedTab === "portfolio" && (
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">AI-Powered Portfolio Management</h2>
          <div className="grid grid-cols-3 gap-4">
            {portfolioAllocation.map((allocation) => (
              <div key={allocation.token} className="p-4 border rounded bg-gray-800 border-gray-700">
                <h3 className="font-bold">{allocation.token}</h3>
                <p>{allocation.percentage}%</p>
              </div>
            ))}
          </div>
          <button
            className="px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
            onClick={handlePortfolioRebalance}
          >
            Rebalance Portfolio
          </button>
        </div>
      )}

      {selectedTab === "intents" && (
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Intent-Based Trading</h2>
          
          <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Create New Intent</h3>
            <CreateIntentForm onSubmit={createTradingIntent} />
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4">Active Intents</h3>
            <div className="grid gap-4">
              {tradingIntents.map((intent, index) => (
                <div key={index} className="p-4 border rounded bg-gray-800 border-gray-700">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-semibold">
                        {intent.fromToken} → {intent.toToken}
                      </p>
                      <p className="text-sm text-gray-400">
                        Amount: {intent.amount} {intent.fromToken}
                      </p>
                      <p className="text-sm text-gray-400">
                        Condition: {intent.condition.type} = {intent.condition.value}
                      </p>
                    </div>
                    <div className="flex items-center">
                      {intent.isShielded && (
                        <span className="px-2 py-1 bg-green-500 text-white text-xs rounded">
                          Shielded
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {selectedTab === "shielded" && (
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Shielded Swaps</h2>
          <div className="grid gap-4">
            {LIST_TOKENS.filter(token => token.symbol === "ZEC").map((token) => (
              <div key={token.symbol} className="p-6 border rounded bg-gray-800 border-gray-700">
                <div className="flex items-center space-x-4">
                  <img
                    src={token.icon}
                    alt={token.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <h3 className="text-xl font-bold">{token.name}</h3>
                    <p className="text-gray-400">{token.symbol}</p>
                  </div>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-4">
                  <button
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
                    onClick={() => handleShieldedSwap("ZEC", "NEAR", "1.0")}
                  >
                    Swap to NEAR
                  </button>
                  <button
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
                    onClick={() => handleShieldedSwap("ZEC", "USDC", "1.0")}
                  >
                    Swap to USDC
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}; 