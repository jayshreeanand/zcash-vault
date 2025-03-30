import { useState } from 'react';

interface PrivacyMetric {
  category: string;
  score: number;
  description: string;
}

interface TransactionPrivacy {
  id: string;
  type: string;
  date: string;
  privacyScore: number;
  details: string;
}

export const PrivacyAnalytics = () => {
  const [metrics] = useState<PrivacyMetric[]>([
    {
      category: 'Transaction Privacy',
      score: 92,
      description: 'Percentage of transactions using shielded addresses'
    },
    {
      category: 'Portfolio Anonymity',
      score: 85,
      description: 'Level of portfolio composition privacy'
    },
    {
      category: 'Intent Protection',
      score: 95,
      description: 'Effectiveness of intent hiding mechanisms'
    }
  ]);

  const [recentTransactions] = useState<TransactionPrivacy[]>([
    {
      id: '1',
      type: 'Swap',
      date: '2024-03-20',
      privacyScore: 100,
      details: 'ZEC → NEAR (Shielded)'
    },
    {
      id: '2',
      type: 'Deposit',
      date: '2024-03-19',
      privacyScore: 90,
      details: 'NEAR → Vault'
    }
  ]);

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      <div className="bg-gray-900 rounded-xl p-6">
        <h2 className="text-2xl font-bold mb-6">Privacy Analytics</h2>
        
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {metrics.map((metric) => (
            <div 
              key={metric.category}
              className="bg-gray-800/50 rounded-lg p-4"
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-medium">{metric.category}</h3>
                <div className="flex items-center">
                  <div 
                    className={`text-lg font-bold ${
                      metric.score >= 90 ? 'text-green-400' :
                      metric.score >= 70 ? 'text-yellow-400' :
                      'text-red-400'
                    }`}
                  >
                    {metric.score}%
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-400">{metric.description}</p>
            </div>
          ))}
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Privacy Recommendations</h3>
          <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-blue-400">•</span>
                Consider using shielded addresses for all transactions to maintain maximum privacy
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400">•</span>
                Enable automatic mixing for improved transaction privacy
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400">•</span>
                Use intent-based trading to hide your trading strategy
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-gray-900 rounded-xl p-6">
        <h3 className="text-lg font-semibold mb-4">Recent Transactions</h3>
        <div className="space-y-3">
          {recentTransactions.map((tx) => (
            <div 
              key={tx.id}
              className="flex items-center justify-between p-4 bg-gray-800/50 rounded-lg"
            >
              <div>
                <div className="font-medium">{tx.type}</div>
                <div className="text-sm text-gray-400">{tx.details}</div>
              </div>
              <div className="text-right">
                <div className="text-sm text-gray-400">{tx.date}</div>
                <div className={`text-sm ${
                  tx.privacyScore >= 90 ? 'text-green-400' :
                  tx.privacyScore >= 70 ? 'text-yellow-400' :
                  'text-red-400'
                }`}>
                  Privacy Score: {tx.privacyScore}%
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gray-900 rounded-xl p-6">
        <h3 className="text-lg font-semibold mb-4">Privacy Features</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <h4 className="font-medium">Active Features</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-sm text-green-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Shielded Transactions
              </li>
              <li className="flex items-center gap-2 text-sm text-green-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Intent Privacy
              </li>
              <li className="flex items-center gap-2 text-sm text-green-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Portfolio Masking
              </li>
            </ul>
          </div>
          
          <div className="space-y-2">
            <h4 className="font-medium">Available Upgrades</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-sm text-gray-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                Advanced Mixing
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                Cross-chain Privacy Bridge
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}; 