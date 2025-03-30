# ZCash Vault - Privacy-First Cross-Chain Trading with NEAR Intents

ZCash Vault is a decentralized application built on NEAR Intents that enables privacy-preserving portfolio management and cross-chain trading between ZCash, NEAR, and other supported networks. The platform leverages NEAR Intents for efficient order matching and execution while using shielded transactions and off-chain intent storage to protect user privacy and prevent front-running.

## Features

- **NEAR Intents Integration**: Utilizes NEAR Intents for efficient and secure order matching and execution
- **Cross-Chain Trading**: Seamlessly swap between ZCash, NEAR, and other supported cryptocurrencies
- **Privacy-Preserving Intents**: Create and manage trading intents with privacy features enabled
- **Portfolio Rebalancing**: Automatically rebalance your portfolio based on target allocations
- **Shielded Transactions**: Execute trades through shielded transactions for enhanced privacy
- **Multi-Network Support**: Currently supports:
  - ZCash (ZEC)
  - NEAR Protocol (with Intents)
  - Ethereum (ETH)

## How NEAR Intents Works

The application leverages NEAR Intents for:

- **Order Matching**: Efficient matching of buy/sell orders across chains
- **Intent Resolution**: Automatic resolution of trading intents based on market conditions
- **Cross-Chain Settlement**: Secure settlement of trades between different blockchains
- **Privacy Protection**: Integration with privacy features while maintaining intent functionality

## Getting Started

### Prerequisites

- Node.js 16.x or later
- npm or yarn
- A NEAR wallet account
- A ZCash wallet (optional)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/zcash-near-frontend-demo.git
cd zcash-near-frontend-demo
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Project Structure

```
├── public/
│   └── icons/              # Network and UI icons
├── src/
│   ├── app/               # Next.js app router components
│   ├── components/        # React components
│   ├── config/           # Configuration files
│   ├── providers/        # Context providers
│   └── types/            # TypeScript type definitions
├── next.config.js        # Next.js configuration
└── package.json          # Project dependencies
```

## Key Components

- **IntentCreation**: Create and manage trading intents with privacy features
- **WalletProvider**: Manages wallet connections and state
- **Account**: Handles user authentication and account display
- **SwapWidget**: Interface for cross-chain token swaps

## Technologies Used

- **Frontend Framework**: Next.js 14 with App Router
- **Intent System**: NEAR Intents for order matching and execution
- **Styling**: Tailwind CSS
- **Wallet Integration**: NEAR Wallet Selector
- **Language**: TypeScript
- **UI Components**: Custom components with modern design system

## Development Notes

- The project uses Next.js App Router for routing
- Build errors are currently ignored in production (see `next.config.js`)
- React Strict Mode is disabled to prevent double rendering issues
- Tailwind CSS is used for styling with a custom color scheme

## Privacy Features

The application implements several privacy-preserving features:

1. **Shielded Transactions**: All trades are executed through shielded transactions
2. **Off-Chain Intent Storage**: Trading intents are encrypted and stored off-chain
3. **Front-Running Protection**: Privacy features prevent malicious front-running
4. **Encrypted Communication**: Secure communication between different chains

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- NEAR Protocol team
- ZCash team
- Electric Coin Co.
- The cross-chain privacy community

## Contact

For questions and support, please open an issue in the GitHub repository.
