import { useState } from 'react';
import { ChainType } from "@defuse-protocol/defuse-sdk";

interface IntentFormData {
  type: 'swap' | 'rebalance';
  fromToken: string;
  toToken: string;
  triggerCondition: string;
  triggerValue: string;
  isPrivate: boolean;
  amount: string;
}

export const IntentCreation = () => {
  const [formData, setFormData] = useState<IntentFormData>({
    type: 'swap',
    fromToken: 'ZEC',
    toToken: 'NEAR',
    triggerCondition: 'price',
    triggerValue: '',
    isPrivate: true,
    amount: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement intent creation logic
    console.log('Creating intent:', formData);
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-gray-900 rounded-xl p-6">
      <h2 className="text-2xl font-bold mb-6">Create New Intent</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">
              Intent Type
            </label>
            <select
              className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white"
              value={formData.type}
              onChange={(e) => setFormData({...formData, type: e.target.value as 'swap' | 'rebalance'})}
            >
              <option value="swap">Swap</option>
              <option value="rebalance">Portfolio Rebalance</option>
            </select>
          </div>

          {formData.type === 'swap' && (
            <>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  From Token
                </label>
                <select
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white"
                  value={formData.fromToken}
                  onChange={(e) => setFormData({...formData, fromToken: e.target.value})}
                >
                  <option value="ZEC">ZEC</option>
                  <option value="NEAR">NEAR</option>
                  <option value="ETH">ETH</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  To Token
                </label>
                <select
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white"
                  value={formData.toToken}
                  onChange={(e) => setFormData({...formData, toToken: e.target.value})}
                >
                  <option value="NEAR">NEAR</option>
                  <option value="ZEC">ZEC</option>
                  <option value="ETH">ETH</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Amount
                </label>
                <div className="relative">
                  <input
                    type="text"
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white"
                    placeholder="0.00"
                    value={formData.amount}
                    onChange={(e) => setFormData({...formData, amount: e.target.value})}
                  />
                </div>
              </div>
            </>
          )}

          {formData.type === 'rebalance' && (
            <div className="md:col-span-2 grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  ZEC Target %
                </label>
                <input
                  type="number"
                  min="0"
                  max="100"
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white"
                  placeholder="60"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  NEAR Target %
                </label>
                <input
                  type="number"
                  min="0"
                  max="100"
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white"
                  placeholder="40"
                />
              </div>
            </div>
          )}

          {formData.type === 'swap' && (
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-400 mb-2">
                Trigger Condition
              </label>
              <div className="grid md:grid-cols-2 gap-4">
                <select
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white"
                  value={formData.triggerCondition}
                  onChange={(e) => setFormData({...formData, triggerCondition: e.target.value})}
                >
                  <option value="price">Price Above</option>
                  <option value="ratio">Ratio Above</option>
                  <option value="time">Time Based</option>
                </select>
                <input
                  type="text"
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white"
                  placeholder="Enter value"
                  value={formData.triggerValue}
                  onChange={(e) => setFormData({...formData, triggerValue: e.target.value})}
                />
              </div>
            </div>
          )}
        </div>

        <div className="flex items-center">
          <input
            type="checkbox"
            id="private"
            className="w-4 h-4 bg-gray-800 border-gray-700 rounded"
            checked={formData.isPrivate}
            onChange={(e) => setFormData({...formData, isPrivate: e.target.checked})}
          />
          <label htmlFor="private" className="ml-2 text-sm text-gray-400">
            Enable privacy features (shielded transaction)
          </label>
        </div>

        <div className="bg-gray-800/50 rounded-lg p-4 text-sm text-gray-400">
          <h4 className="font-medium text-white mb-2">Privacy Notice</h4>
          <p>
            When privacy features are enabled, your intent will be:
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Encrypted and stored off-chain</li>
            <li>Executed through shielded transactions</li>
            <li>Protected from front-running</li>
          </ul>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-all"
        >
          Create Intent
        </button>
      </form>
    </div>
  );
}; 