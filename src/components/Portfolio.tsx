import { useState } from 'react';
import { ChainType } from "@defuse-protocol/defuse-sdk";

interface PortfolioAsset {
  symbol: string;
  name: string;
  balance: string;
  value: number;
  chain: ChainType;
  isPrivate: boolean;
}

export const Portfolio = () => {
  const [assets] = useState<PortfolioAsset[]>([
    {
      symbol: "ZEC",
      name: "Zcash",
      balance: "1.5",
      value: 1500,
      chain: ChainType.Near,
      isPrivate: true
    },
    {
      symbol: "NEAR",
      name: "NEAR Protocol",
      balance: "100",
      value: 200,
      chain: ChainType.Near,
      isPrivate: false
    }
  ]);

  const totalValue = assets.reduce((sum, asset) => sum + asset.value, 0);

  return (
    <div className="w-full max-w-4xl mx-auto bg-gray-900 rounded-xl p-6">
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Portfolio Overview</h2>
        <p className="text-gray-400">Total Value: ${totalValue.toLocaleString()}</p>
      </div>

      <div className="grid gap-6">
        <div className="bg-gray-800 rounded-lg p-4">
          <h3 className="text-lg font-semibold mb-4">Assets</h3>
          <div className="grid gap-4">
            {assets.map((asset) => (
              <div 
                key={asset.symbol}
                className="flex items-center justify-between p-4 bg-gray-700/50 rounded-lg"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center">
                    {asset.symbol[0]}
                  </div>
                  <div>
                    <div className="font-medium">{asset.name}</div>
                    <div className="text-sm text-gray-400">{asset.symbol}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-medium">{asset.balance} {asset.symbol}</div>
                  <div className="text-sm text-gray-400">${asset.value.toLocaleString()}</div>
                </div>
                {asset.isPrivate && (
                  <div className="ml-4 px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded-full">
                    Private
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-800 rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-4">Privacy Score</h3>
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 rounded-full border-4 border-green-500 flex items-center justify-center text-2xl font-bold">
                85%
              </div>
              <div className="text-sm text-gray-400">
                Your portfolio has a strong privacy score. Most of your assets are protected by shielded transactions.
              </div>
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-4">Active Intents</h3>
            <div className="space-y-2">
              <div className="p-3 bg-gray-700/50 rounded-lg">
                <div className="font-medium">Swap ZEC to NEAR</div>
                <div className="text-sm text-gray-400">Triggers at ZEC/NEAR {'>'} 0.5</div>
              </div>
              <div className="p-3 bg-gray-700/50 rounded-lg">
                <div className="font-medium">Portfolio Rebalance</div>
                <div className="text-sm text-gray-400">Maintains 60% ZEC, 40% NEAR ratio</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}; 