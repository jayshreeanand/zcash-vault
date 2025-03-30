import { useState } from 'react';
import { LIST_TOKENS } from '@/constants/tokens';

interface CreateIntentFormProps {
  onSubmit: (intent: {
    fromToken: string;
    toToken: string;
    condition: {
      type: "price" | "time";
      value: string;
    };
    amount: string;
    isShielded: boolean;
  }) => void;
}

export const CreateIntentForm = ({ onSubmit }: CreateIntentFormProps) => {
  const [fromToken, setFromToken] = useState('ZEC');
  const [toToken, setToToken] = useState('NEAR');
  const [conditionType, setConditionType] = useState<'price' | 'time'>('price');
  const [conditionValue, setConditionValue] = useState('');
  const [amount, setAmount] = useState('');
  const [isShielded, setIsShielded] = useState(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      fromToken,
      toToken,
      condition: {
        type: conditionType,
        value: conditionValue
      },
      amount,
      isShielded
    });

    // Reset form
    setConditionValue('');
    setAmount('');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">From Token</label>
          <select
            value={fromToken}
            onChange={(e) => setFromToken(e.target.value)}
            className="w-full p-2 border rounded bg-gray-800 border-gray-700"
          >
            {LIST_TOKENS.map((token) => (
              <option key={token.symbol} value={token.symbol}>
                {token.symbol}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">To Token</label>
          <select
            value={toToken}
            onChange={(e) => setToToken(e.target.value)}
            className="w-full p-2 border rounded bg-gray-800 border-gray-700"
          >
            {LIST_TOKENS.map((token) => (
              <option key={token.symbol} value={token.symbol}>
                {token.symbol}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Amount</label>
        <input
          type="text"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter amount"
          className="w-full p-2 border rounded bg-gray-800 border-gray-700"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">Condition Type</label>
          <select
            value={conditionType}
            onChange={(e) => setConditionType(e.target.value as 'price' | 'time')}
            className="w-full p-2 border rounded bg-gray-800 border-gray-700"
          >
            <option value="price">Price</option>
            <option value="time">Time</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            {conditionType === 'price' ? 'Target Price' : 'Execute At (UTC)'}
          </label>
          <input
            type={conditionType === 'time' ? 'datetime-local' : 'text'}
            value={conditionValue}
            onChange={(e) => setConditionValue(e.target.value)}
            placeholder={conditionType === 'price' ? 'Enter target price' : 'Select time'}
            className="w-full p-2 border rounded bg-gray-800 border-gray-700"
          />
        </div>
      </div>

      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          id="isShielded"
          checked={isShielded}
          onChange={(e) => setIsShielded(e.target.checked)}
          className="rounded border-gray-700"
        />
        <label htmlFor="isShielded" className="text-sm font-medium">
          Use Shielded Transaction
        </label>
      </div>

      <button
        type="submit"
        className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
      >
        Create Intent
      </button>
    </form>
  );
}; 