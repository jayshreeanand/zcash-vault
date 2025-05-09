import { type UnifiedTokenInfo } from "@defuse-protocol/defuse-sdk";

export const LIST_TOKENS: UnifiedTokenInfo[] = [
  {
    unifiedAssetId: "usdc",
    decimals: 6,
    symbol: "USDC",
    name: "USD Coin",
    icon: "https://s2.coinmarketcap.com/static/img/coins/128x128/3408.png",
    groupedTokens: [
      {
        defuseAssetId:
          "nep141:eth-0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48.omft.near",
        address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
        decimals: 6,
        icon: "https://s2.coinmarketcap.com/static/img/coins/128x128/3408.png",
        chainId: "",
        chainIcon: "/static/icons/network/ethereum.svg",
        chainName: "eth",
        routes: [],
        symbol: "USDC",
        name: "USD Coin",
      },
      {
        defuseAssetId:
          "nep141:17208628f84f5d6ad33f0da3bbbeb27ffcb398eac501a31bd6ad2011e36133a1",
        address:
          "17208628f84f5d6ad33f0da3bbbeb27ffcb398eac501a31bd6ad2011e36133a1",
        decimals: 6,
        icon: "https://s2.coinmarketcap.com/static/img/coins/128x128/3408.png",
        chainId: "",
        chainIcon: "/static/icons/network/near.svg",
        chainName: "near",
        routes: [],
        symbol: "USDC",
        name: "USD Coin",
      },
      {
        defuseAssetId:
          "nep141:17208628f84f5d6ad33f0da3bbbeb27ffcb398eac501a31bd6ad2011e36133a1",
        address: "0x368ebb46aca6b8d0787c96b2b20bd3cc3f2c45f7",
        decimals: 6,
        icon: "https://s2.coinmarketcap.com/static/img/coins/128x128/3408.png",
        chainId: "",
        chainIcon: "/static/icons/network/turbochain.png",
        chainName: "turbochain",
        routes: [],
        symbol: "USDC",
        name: "USD Coin",
      },
      {
        defuseAssetId:
          "nep141:17208628f84f5d6ad33f0da3bbbeb27ffcb398eac501a31bd6ad2011e36133a1",
        address: "0x368ebb46aca6b8d0787c96b2b20bd3cc3f2c45f7",
        decimals: 6,
        icon: "https://s2.coinmarketcap.com/static/img/coins/128x128/3408.png",
        chainId: "",
        chainIcon: "/static/icons/network/aurora.svg",
        chainName: "aurora",
        routes: [],
        symbol: "USDC",
        name: "USD Coin",
      },
      {
        defuseAssetId:
          "nep141:base-0x833589fcd6edb6e08f4c7c32d4f71b54bda02913.omft.near",
        address: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
        decimals: 6,
        icon: "https://s2.coinmarketcap.com/static/img/coins/128x128/3408.png",
        chainId: "",
        chainIcon: "/static/icons/network/base.svg",
        chainName: "base",
        routes: [],
        symbol: "USDC",
        name: "USD Coin",
      },
      {
        defuseAssetId:
          "nep141:arb-0xaf88d065e77c8cc2239327c5edb3a432268e5831.omft.near",
        address: "0xaf88d065e77c8cC2239327C5EDb3A432268e5831",
        decimals: 6,
        icon: "https://s2.coinmarketcap.com/static/img/coins/128x128/3408.png",
        chainId: "",
        chainIcon: "/static/icons/network/arbitrum.svg",
        chainName: "arbitrum",
        routes: [],
        symbol: "USDC",
        name: "USD Coin",
      },
      {
        defuseAssetId:
          "nep141:sol-5ce3bf3a31af18be40ba30f721101b4341690186.omft.near",
        address: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
        decimals: 6,
        icon: "https://s2.coinmarketcap.com/static/img/coins/128x128/3408.png",
        chainId: "",
        chainIcon: "/static/icons/network/solana.svg",
        chainName: "solana",
        routes: [],
        symbol: "USDC",
        name: "USD Coin",
      },
    ],
    tags: ["mc:7", "type:stablecoin"],
  },
  {
    defuseAssetId:
      "nep141:sol-c58e6539c2f2e097c251f8edf11f9c03e581f8d4.omft.near",
    address: "6p6xgHyF7AeE6TZkSmFsko444wqoP15icUSqi2jfGiPN",
    decimals: 6,
    icon: "https://s2.coinmarketcap.com/static/img/coins/128x128/35336.png",
    chainId: "",
    chainIcon: "/static/icons/network/solana.svg",
    chainName: "solana",
    routes: [],
    symbol: "TRUMP",
    name: "OFFICIAL TRUMP",
    tags: ["mc:39", "type:meme"],
  },
  {
    defuseAssetId:
      "nep141:sol-d600e625449a4d9380eaf5e3265e54c90d34e260.omft.near",
    address: "FUAfBo2jgks6gB4Z4LfZkqSZgzNucisEHqnNebaRxM1P",
    decimals: 6,
    icon: "https://s2.coinmarketcap.com/static/img/coins/128x128/35347.png",
    chainId: "",
    chainIcon: "/static/icons/network/solana.svg",
    chainName: "solana",
    routes: [],
    symbol: "MELANIA",
    name: "Official Melania Meme",
    tags: ["mc:96", "type:meme"],
  },
  {
    defuseAssetId: "nep141:bera.omft.near",
    type: "native",
    decimals: 18,
    icon: "/static/icons/network/berachain.svg",
    chainId: "",
    chainIcon: "/static/icons/network/berachain.svg",
    chainName: "berachain",
    routes: [],
    symbol: "BERA",
    name: "BERA",
    tags: ["mc:104"],
  },
  {
    defuseAssetId: "nep141:zec.omft.near",
    type: "native",
    decimals: 8,
    icon: "https://s2.coinmarketcap.com/static/img/coins/128x128/1437.png",
    chainId: "",
    chainIcon: "/static/icons/network/zcash-icon-black.svg",
    chainName: "zcash",
    routes: [],
    symbol: "ZEC",
    name: "Zcash",
    tags: ["mc:120"],
  },
  {
    unifiedAssetId: "near",
    decimals: 24,
    symbol: "NEAR",
    name: "Near",
    icon: "https://s2.coinmarketcap.com/static/img/coins/128x128/6535.png",
    groupedTokens: [
      {
        defuseAssetId: "nep141:wrap.near",
        address: "wrap.near",
        decimals: 24,
        icon: "https://s2.coinmarketcap.com/static/img/coins/128x128/6535.png",
        chainId: "",
        chainIcon: "/static/icons/network/near.svg",
        chainName: "near",
        routes: [],
        symbol: "NEAR",
        name: "Near",
      },
      {
        defuseAssetId: "nep141:wrap.near",
        address: "0xC42C30aC6Cc15faC9bD938618BcaA1a1FaE8501d",
        decimals: 24,
        icon: "https://s2.coinmarketcap.com/static/img/coins/128x128/6535.png",
        chainId: "",
        chainIcon: "/static/icons/network/turbochain.png",
        chainName: "turbochain",
        routes: [],
        symbol: "NEAR",
        name: "Near",
      },
      {
        defuseAssetId: "nep141:wrap.near",
        address: "0xC42C30aC6Cc15faC9bD938618BcaA1a1FaE8501d",
        decimals: 24,
        icon: "https://s2.coinmarketcap.com/static/img/coins/128x128/6535.png",
        chainId: "",
        chainIcon: "/static/icons/network/aurora.svg",
        chainName: "aurora",
        routes: [],
        symbol: "NEAR",
        name: "Near",
      },
    ],
    tags: ["mc:31"],
  },
  {
    unifiedAssetId: "usdt",
    decimals: 6,
    symbol: "USDT",
    name: "Tether USD",
    icon: "https://s2.coinmarketcap.com/static/img/coins/128x128/825.png",
    groupedTokens: [
      {
        defuseAssetId:
          "nep141:eth-0xdac17f958d2ee523a2206206994597c13d831ec7.omft.near",
        address: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
        decimals: 6,
        icon: "https://s2.coinmarketcap.com/static/img/coins/128x128/825.png",
        chainId: "",
        chainIcon: "/static/icons/network/ethereum.svg",
        chainName: "eth",
        routes: [],
        symbol: "USDT",
        name: "Tether USD",
      },
      {
        defuseAssetId: "nep141:usdt.tether-token.near",
        address: "usdt.tether-token.near",
        decimals: 6,
        icon: "https://s2.coinmarketcap.com/static/img/coins/128x128/825.png",
        chainId: "",
        chainIcon: "/static/icons/network/near.svg",
        chainName: "near",
        routes: [],
        symbol: "USDT",
        name: "Tether USD",
      },
      {
        defuseAssetId: "nep141:usdt.tether-token.near",
        address: "0x80Da25Da4D783E57d2FCdA0436873A193a4BEccF",
        decimals: 6,
        icon: "https://s2.coinmarketcap.com/static/img/coins/128x128/825.png",
        chainId: "",
        chainIcon: "/static/icons/network/turbochain.png",
        chainName: "turbochain",
        routes: [],
        symbol: "USDT",
        name: "Tether USD",
      },
      {
        defuseAssetId: "nep141:usdt.tether-token.near",
        address: "0x80Da25Da4D783E57d2FCdA0436873A193a4BEccF",
        decimals: 6,
        icon: "https://s2.coinmarketcap.com/static/img/coins/128x128/825.png",
        chainId: "",
        chainIcon: "/static/icons/network/aurora.svg",
        chainName: "aurora",
        routes: [],
        symbol: "USDT",
        name: "Tether USD",
      },
      {
        defuseAssetId:
          "nep141:arb-0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9.omft.near",
        address: "0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9",
        decimals: 6,
        icon: "https://s2.coinmarketcap.com/static/img/coins/128x128/825.png",
        chainId: "",
        chainIcon: "/static/icons/network/arbitrum.svg",
        chainName: "arbitrum",
        routes: [],
        symbol: "USDT",
        name: "Tether USD",
      },
      {
        defuseAssetId:
          "nep141:sol-c800a4bd850783ccb82c2b2c7e84175443606352.omft.near",
        address: "Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB",
        decimals: 6,
        icon: "https://s2.coinmarketcap.com/static/img/coins/128x128/825.png",
        chainId: "",
        chainIcon: "/static/icons/network/solana.svg",
        chainName: "solana",
        routes: [],
        symbol: "USDT",
        name: "Tether USD",
      },
    ],
    tags: ["mc:3", "type:stablecoin"],
  },
  {
    unifiedAssetId: "eth",
    decimals: 18,
    symbol: "ETH",
    name: "ETH",
    icon: "https://s2.coinmarketcap.com/static/img/coins/128x128/1027.png",
    groupedTokens: [
      {
        defuseAssetId: "nep141:eth.omft.near",
        type: "native",
        address: "native",
        decimals: 18,
        icon: "https://s2.coinmarketcap.com/static/img/coins/128x128/1027.png",
        chainId: "",
        chainIcon: "/static/icons/network/ethereum.svg",
        chainName: "eth",
        routes: [],
        symbol: "ETH",
        name: "ETH",
      },
      {
        defuseAssetId: "nep141:aurora",
        address: "aurora",
        decimals: 18,
        icon: "https://s2.coinmarketcap.com/static/img/coins/128x128/1027.png",
        chainId: "",
        chainIcon: "/static/icons/network/near.svg",
        chainName: "near",
        routes: [],
        symbol: "ETH",
        name: "ETH",
      },
      {
        defuseAssetId: "nep141:aurora",
        address: "0x5a524251df27A25AC6b9964a93E1c23AD692688D",
        decimals: 18,
        icon: "https://s2.coinmarketcap.com/static/img/coins/128x128/1027.png",
        chainId: "",
        chainIcon: "/static/icons/network/turbochain.png",
        chainName: "turbochain",
        routes: [],
        symbol: "ETH",
        name: "ETH",
      },
      {
        defuseAssetId: "nep141:aurora",
        type: "native",
        address: "native",
        decimals: 18,
        icon: "https://s2.coinmarketcap.com/static/img/coins/128x128/1027.png",
        chainId: "",
        chainIcon: "/static/icons/network/aurora.svg",
        chainName: "aurora",
        routes: [],
        symbol: "ETH",
        name: "ETH",
      },
      {
        defuseAssetId: "nep141:base.omft.near",
        type: "native",
        address: "native",
        decimals: 18,
        icon: "https://s2.coinmarketcap.com/static/img/coins/128x128/1027.png",
        chainId: "",
        chainIcon: "/static/icons/network/base.svg",
        chainName: "base",
        routes: [],
        symbol: "ETH",
        name: "ETH",
      },
      {
        defuseAssetId: "nep141:arb.omft.near",
        type: "native",
        address: "native",
        decimals: 18,
        icon: "https://s2.coinmarketcap.com/static/img/coins/128x128/1027.png",
        chainId: "",
        chainIcon: "/static/icons/network/arbitrum.svg",
        chainName: "arbitrum",
        routes: [],
        symbol: "ETH",
        name: "ETH",
      },
    ],
    tags: ["mc:2"],
  },
  {
    unifiedAssetId: "aurora",
    decimals: 18,
    symbol: "AURORA",
    name: "Aurora",
    icon: "https://s2.coinmarketcap.com/static/img/coins/128x128/14803.png",
    groupedTokens: [
      {
        defuseAssetId:
          "nep141:aaaaaa20d9e0e2461697782ef11675f668207961.factory.bridge.near",
        address: "aaaaaa20d9e0e2461697782ef11675f668207961.factory.bridge.near",
        decimals: 18,
        icon: "https://s2.coinmarketcap.com/static/img/coins/128x128/14803.png",
        chainId: "",
        chainIcon: "/static/icons/network/near.svg",
        chainName: "near",
        routes: [],
        symbol: "AURORA",
        name: "Aurora",
      },
      {
        defuseAssetId:
          "nep141:aaaaaa20d9e0e2461697782ef11675f668207961.factory.bridge.near",
        address: "0x8BEc47865aDe3B172A928df8f990Bc7f2A3b9f79",
        decimals: 18,
        icon: "https://s2.coinmarketcap.com/static/img/coins/128x128/14803.png",
        chainId: "",
        chainIcon: "/static/icons/network/turbochain.png",
        chainName: "turbochain",
        routes: [],
        symbol: "AURORA",
        name: "Aurora",
      },
      {
        defuseAssetId:
          "nep141:aaaaaa20d9e0e2461697782ef11675f668207961.factory.bridge.near",
        address: "0x8BEc47865aDe3B172A928df8f990Bc7f2A3b9f79",
        decimals: 18,
        icon: "https://s2.coinmarketcap.com/static/img/coins/128x128/14803.png",
        chainId: "",
        chainIcon: "/static/icons/network/aurora.svg",
        chainName: "aurora",
        routes: [],
        symbol: "AURORA",
        name: "Aurora",
      },
      {
        defuseAssetId:
          "nep141:eth-0xaaaaaa20d9e0e2461697782ef11675f668207961.omft.near",
        address: "0xAaAAAA20D9E0e2461697782ef11675f668207961",
        decimals: 18,
        icon: "https://s2.coinmarketcap.com/static/img/coins/128x128/14803.png",
        chainId: "",
        chainIcon: "/static/icons/network/eth.svg",
        chainName: "eth",
        routes: [],
        symbol: "AURORA",
        name: "Aurora",
      },
    ],
    tags: ["mc:462"],
  },
  {
    defuseAssetId: "nep141:btc.omft.near",
    type: "native",
    address: "native",
    decimals: 8,
    icon: "https://s2.coinmarketcap.com/static/img/coins/128x128/1.png",
    chainId: "",
    chainIcon: "/static/icons/network/btc.svg",
    chainName: "bitcoin",
    routes: [],
    symbol: "BTC",
    name: "Bitcoin",
    tags: ["mc:1"],
  },
  {
    defuseAssetId:
      "nep141:eth-0x6982508145454ce325ddbe47a25d4ec3d2311933.omft.near",
    address: "0x6982508145454Ce325dDbE47a25d4ec3d2311933",
    decimals: 18,
    icon: "https://s2.coinmarketcap.com/static/img/coins/128x128/24478.png",
    chainId: "",
    chainIcon: "/static/icons/network/ethereum.svg",
    chainName: "eth",
    routes: [],
    symbol: "PEPE",
    name: "Pepe",
    tags: ["mc:30", "type:meme"],
  },
  {
    defuseAssetId:
      "nep141:eth-0x95ad61b0a150d79219dcf64e1e6cc01f0b64c4ce.omft.near",
    address: "0x95aD61b0a150d79219dCF64E1E6Cc01f0B64C4cE",
    decimals: 18,
    icon: "https://s2.coinmarketcap.com/static/img/coins/128x128/5994.png",
    chainId: "",
    chainIcon: "/static/icons/network/ethereum.svg",
    chainName: "eth",
    routes: [],
    symbol: "SHIB",
    name: "Shiba Inu",
    tags: ["mc:15", "type:meme"],
  },
  {
    defuseAssetId:
      "nep141:eth-0x514910771af9ca656af840dff83e8264ecf986ca.omft.near",
    address: "0x514910771AF9Ca656af840dff83E8264EcF986CA",
    decimals: 18,
    icon: "https://s2.coinmarketcap.com/static/img/coins/128x128/1975.png",
    chainId: "",
    chainIcon: "/static/icons/network/ethereum.svg",
    chainName: "eth",
    routes: [],
    symbol: "LINK",
    name: "Chainlink",
    tags: ["mc:11"],
  },
  {
    defuseAssetId:
      "nep141:eth-0x1f9840a85d5af5bf1d1762f925bdaddc4201f984.omft.near",
    address: "0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984",
    decimals: 18,
    icon: "https://s2.coinmarketcap.com/static/img/coins/128x128/7083.png",
    chainId: "",
    chainIcon: "/static/icons/network/ethereum.svg",
    chainName: "eth",
    routes: [],
    symbol: "UNI",
    name: "Uniswap",
    tags: ["mc:25"],
  },
  {
    defuseAssetId:
      "nep141:arb-0x912ce59144191c1204e64559fe8253a0e49e6548.omft.near",
    address: "0x912CE59144191C1204E64559FE8253a0e49E6548",
    decimals: 18,
    icon: "https://s2.coinmarketcap.com/static/img/coins/128x128/11841.png",
    chainId: "",
    chainIcon: "/static/icons/network/arbitrum.svg",
    chainName: "arbitrum",
    routes: [],
    symbol: "ARB",
    name: "Arbitrum",
    tags: ["mc:49"],
  },
  {
    defuseAssetId:
      "nep141:eth-0x7fc66500c84a76ad7e9c93437bfc5ac33e2ddae9.omft.near",
    address: "0x7Fc66500c84A76Ad7e9c93437bFc5Ac33E2DDaE9",
    decimals: 18,
    icon: "https://s2.coinmarketcap.com/static/img/coins/128x128/7278.png",
    chainId: "",
    chainIcon: "/static/icons/network/ethereum.svg",
    chainName: "eth",
    routes: [],
    symbol: "AAVE",
    name: "Aave",
    tags: ["mc:32"],
  },
  {
    defuseAssetId:
      "nep141:arb-0xfc5a1a6eb076a2c7ad06ed22c90d7e710e35ad0a.omft.near",
    address: "0xfc5A1A6EB076a2C7aD06eD22C90d7E710E35ad0a",
    decimals: 18,
    icon: "https://s2.coinmarketcap.com/static/img/coins/128x128/11857.png",
    chainId: "",
    chainIcon: "/static/icons/network/arbitrum.svg",
    chainName: "arbitrum",
    routes: [],
    symbol: "GMX",
    name: "GMX",
    tags: ["mc:183"],
  },
  {
    defuseAssetId:
      "nep141:eth-0xaaee1a9723aadb7afa2810263653a34ba2c21c7a.omft.near",
    address: "0xaaeE1A9723aaDB7afA2810263653A34bA2C21C7a",
    decimals: 18,
    icon: "https://s2.coinmarketcap.com/static/img/coins/128x128/27659.png",
    chainId: "",
    chainIcon: "/static/icons/network/ethereum.svg",
    chainName: "eth",
    routes: [],
    symbol: "MOG",
    name: "Mog Coin",
    tags: ["mc:160", "type:meme"],
  },
  {
    defuseAssetId:
      "nep141:base-0x532f27101965dd16442e59d40670faf5ebb142e4.omft.near",
    address: "0x532f27101965dd16442E59d40670FaF5eBB142E4",
    decimals: 18,
    icon: "https://s2.coinmarketcap.com/static/img/coins/128x128/29743.png",
    chainId: "",
    chainIcon: "/static/icons/network/base.svg",
    chainName: "base",
    routes: [],
    symbol: "BRETT",
    name: "Brett",
    tags: ["mc:139", "type:meme"],
  },
  {
    defuseAssetId: "nep141:token.sweat",
    address: "token.sweat",
    decimals: 18,
    icon: "https://s2.coinmarketcap.com/static/img/coins/128x128/21351.png",
    chainId: "",
    chainIcon: "/static/icons/network/near.svg",
    chainName: "near",
    routes: [],
    symbol: "SWEAT",
    name: "Sweat Economy",
    tags: ["mc:571"],
  },
  {
    defuseAssetId: "nep141:sol.omft.near",
    type: "native",
    address: "native",
    decimals: 9,
    icon: "https://s2.coinmarketcap.com/static/img/coins/128x128/5426.png",
    chainId: "",
    chainIcon: "/static/icons/network/solana.svg",
    chainName: "solana",
    routes: [],
    symbol: "SOL",
    name: "Solana",
    tags: ["mc:6"],
  },
  {
    defuseAssetId: "nep141:doge.omft.near",
    type: "native",
    address: "native",
    decimals: 8,
    icon: "https://s2.coinmarketcap.com/static/img/coins/128x128/74.png",
    chainId: "",
    chainIcon: "/static/icons/network/dogecoin.svg",
    chainName: "dogecoin",
    routes: [],
    symbol: "DOGE",
    name: "Dogecoin",
    tags: ["mc:8", "type:meme"],
  },
  {
    unifiedAssetId: "turbo",
    decimals: 18,
    symbol: "TURBO",
    name: "Turbo",
    icon: "https://s2.coinmarketcap.com/static/img/coins/128x128/24911.png",
    groupedTokens: [
      {
        defuseAssetId:
          "nep141:eth-0xa35923162c49cf95e6bf26623385eb431ad920d3.omft.near",
        address: "0xA35923162C49cF95e6BF26623385eb431ad920D3",
        decimals: 18,
        icon: "https://s2.coinmarketcap.com/static/img/coins/128x128/24911.png",
        chainId: "",
        chainIcon: "/static/icons/network/eth.svg",
        chainName: "eth",
        routes: [],
        symbol: "TURBO",
        name: "Turbo",
      },
      {
        defuseAssetId:
          "nep141:a35923162c49cf95e6bf26623385eb431ad920d3.factory.bridge.near",
        type: "native",
        address: "native",
        decimals: 18,
        icon: "https://s2.coinmarketcap.com/static/img/coins/128x128/24911.png",
        chainId: "",
        chainIcon: "/static/icons/network/turbochain.png",
        chainName: "turbochain",
        routes: [],
        symbol: "TURBO",
        name: "Turbo",
      },
      {
        defuseAssetId:
          "nep141:a35923162c49cf95e6bf26623385eb431ad920d3.factory.bridge.near",
        address: "a35923162c49cf95e6bf26623385eb431ad920d3.factory.bridge.near",
        decimals: 18,
        icon: "https://s2.coinmarketcap.com/static/img/coins/128x128/24911.png",
        chainId: "",
        chainIcon: "/static/icons/network/near.svg",
        chainName: "near",
        routes: [],
        symbol: "TURBO",
        name: "Turbo",
      },
      {
        defuseAssetId:
          "nep141:sol-df27d7abcc1c656d4ac3b1399bbfbba1994e6d8c.omft.near",
        address: "2Dyzu65QA9zdX1UeE7Gx71k7fiwyUK6sZdrvJ7auq5wm",
        decimals: 8,
        icon: "https://s2.coinmarketcap.com/static/img/coins/128x128/24911.png",
        chainId: "",
        chainIcon: "/static/icons/network/solana.svg",
        chainName: "solana",
        routes: [],
        symbol: "TURBO",
        name: "Turbo",
      },
    ],
    tags: ["mc:183", "type:meme"],
  },
  {
    defuseAssetId: "nep141:xrp.omft.near",
    type: "native",
    address: "native",
    decimals: 6,
    icon: "https://s2.coinmarketcap.com/static/img/coins/128x128/52.png",
    chainId: "",
    chainIcon: "/static/icons/network/xrpledger.svg",
    chainName: "xrpledger",
    routes: [],
    symbol: "XRP",
    name: "XRP",
    tags: ["mc:4"],
  },
  {
    defuseAssetId:
      "nep141:sol-b9c68f94ec8fd160137af8cdfe5e61cd68e2afba.omft.near",
    address: "EKpQGSJtjMFqKZ9KQanSqYXRcF8fBopzLHYxdM65zcjm",
    decimals: 6,
    icon: "https://s2.coinmarketcap.com/static/img/coins/128x128/28752.png",
    chainId: "",
    chainIcon: "/static/icons/network/solana.svg",
    chainName: "solana",
    routes: [],
    symbol: "WIF",
    name: "dogwifhat",
    tags: ["mc:112", "type:meme"],
  },
  {
    defuseAssetId:
      "nep141:sol-57d087fd8c460f612f8701f5499ad8b2eec5ab68.omft.near",
    address: "ukHH6c7mMyiWCf1b9pnWe25TSpkDDt3H5pQZgZ74J82",
    decimals: 6,
    icon: "https://s2.coinmarketcap.com/static/img/coins/128x128/29870.png",
    chainId: "",
    chainIcon: "/static/icons/network/solana.svg",
    chainName: "solana",
    routes: [],
    symbol: "BOME",
    name: "BOOK OF MEME",
    tags: ["mc:305", "type:meme"],
  },
  {
    defuseAssetId: "nep141:blackdragon.tkn.near",
    address: "blackdragon.tkn.near",
    decimals: 24,
    icon: "https://s2.coinmarketcap.com/static/img/coins/128x128/29627.png",
    chainId: "",
    chainIcon: "/static/icons/network/near.svg",
    chainName: "near",
    routes: [],
    symbol: "BLACKDRAGON",
    name: "Black Dragon",
    tags: ["mc:4666", "type:meme"],
  },
  {
    defuseAssetId: "nep141:token.0xshitzu.near",
    address: "token.0xshitzu.near",
    decimals: 18,
    icon: "https://s2.coinmarketcap.com/static/img/coins/128x128/19354.png",
    chainId: "",
    chainIcon: "/static/icons/network/near.svg",
    chainName: "near",
    routes: [],
    symbol: "SHITZU",
    name: "Shitzu",
    tags: ["mc:999999", "type:meme"],
  },
  {
    defuseAssetId: "nep141:purge-558.meme-cooking.near",
    address: "purge-558.meme-cooking.near",
    decimals: 18,
    icon: "data:image/png;base64,UklGRrIDAABXRUJQVlA4IKYDAAAwGACdASpgAGAAP7G6zmc8ryknvH94A5A2CWoAzkCCqaGFPaS9yv83xxkQvw+Konsv/3wkCUUQ1Oq2Qz9qOOkUY1hDSymYmVqiZagBtpTgBjSXnvmiIWVEkKtAewltk9gBFQ6x5KBAnSChG+08xYO4vyI2YizvPlNVV2Z5ypjEyb8YWAHmL/fHe4LBHR7y8u6lcrQ9v7tj92poQcgjyrtb8Ejwv0VtC51uD3geQjzhIi2RVOM2qzWb+DyZ6RPRrMkJKdLFKUDPMJNAAPJv5vhOy7BgcCIMMJ1XglA8W3PstAv/VFDmqQSf03x6lmEw7drRJkAkEZS1o1Zxi7vuxWme5dlaFsep8L93ni75ZuC1ac5zBIXVzqkwXj1Y5rAah85aVfbUVN0ZSqv5RroDzs1MpiZ33/eqXG+udld11eDn4vxkjCDziWOa0JwTTpXYpwRGIFwGCwka81dIvk1w8SM7BbS0ad83FcM32tBX9CfS1CIu3xkT8UFENC9BpdZiosh6aLBBNFZJRAEcFBF9cuV2vMxzzmDEDm8nzZ76nyZSVgD+r2CP6DwWqABDqUwX48V2tpjvD7BgGSwsCjKCTTzYdBuWTXOMwz53jD2M6kN6bUr4e6ICJgv4GygYwCTs4lWdn5LXyMaDEQiUGn2V3T/KTMlzGpd9sRQyguh6RuYArudcezBDrN8lbmTrFFe2eGR7qEdySQn/lJg5Z5gkphPICr1KkZSepuAeF21pT5jAcB6MS/0KU7N/ahGT3od/0TGzW+0GGpoVWmbaxupLdGFAHfHhvrLl8T3XyuxUkl8mkFv6JFvPVwomr4yv0GVgg7CcOxBHhJKMbRl7VqWORgeyfEzPpSiv87l6326/Txg/emIFICrtnOcXcr46GBT/jNdDgdlsMOHD6QiArvwtrUrcJTyv3gzyrO4MfSuwJTgeTYSDud8rH+Fyh2qDhKumJjVcI3kS5r1tTMi/9XF8y1uFGYLPkG/Ra/eYEGug5YFR+9hIlnHTmusGOyPdhCSnO4eXz3hDtGLTIpaqhaMmhopxRNdneBhSnPSIGgL1r4B1jG760bJqMCCcNNNNl6Hh6cuNQaoGnwlZ6vsXe26i89ALMz4TZk/R6MvVbGAP/6tdGIPdB7WQa8bBg3/CxmnfKnMGwjbk/iXNOSsmjGYkKWEmsY9RIrKaGTAibzrCnC32H3Y9HedSxq67ACnzFPVEbKP2O/2Z5p4S+ro6rLuHAdETfSIGcAAA",
    chainId: "",
    chainIcon: "/static/icons/network/near.svg",
    chainName: "near",
    routes: [],
    symbol: "PURGE",
    name: "Forgive Me Father",
    tags: ["mc:999999", "type:meme"],
  },
  {
    defuseAssetId: "nep141:token.burrow.near",
    address: "token.burrow.near",
    decimals: 18,
    icon: "https://s2.coinmarketcap.com/static/img/coins/128x128/20604.png",
    chainId: "",
    chainIcon: "/static/icons/network/near.svg",
    chainName: "near",
    routes: [],
    symbol: "BRRR",
    name: "Burrow",
    tags: ["mc:6091"],
  },
  {
    defuseAssetId: "nep141:abg-966.meme-cooking.near",
    address: "abg-966.meme-cooking.near",
    decimals: 18,
    icon: "data:image/png;base64,UklGRvQAAABXRUJQVlA4IOgAAADQCgCdASpgAGAAP9Hg622/tjKqKdRqO/A6CWcA1Er9hfpalM0KjtQ3QolBZ0DnFkdZsShp72kk1LVeIHWCpNrbxil8dJpNCM9b1CZa4mOf7XgxcsJKQUYldLsGu2kW8AD+59NNqUjGXZSNo958Qn3F8SUFLm4pjEffyYQfmDlTwNDx2xo5ikBuCess5ZsoPg8R5Ah37d1DNsfg8BvWhgVSLFDX+dLKBbuT9bzxz5Z4nil4PnUAbh5Iasayl/ia08ZjHQj0KhYntw4l4TrPWkp0njlSWPg2xwoZ564qYl13AGAjvunKR5AA",
    chainId: "",
    chainIcon: "/static/icons/network/near.svg",
    chainName: "near",
    routes: [],
    symbol: "ABG",
    name: "Asian Girl Boss",
    tags: ["mc:999999", "type:meme"],
  },
  {
    defuseAssetId: "nep141:noear-324.meme-cooking.near",
    address: "noear-324.meme-cooking.near",
    decimals: 18,
    icon: "data:image/png;base64,UklGRngCAABXRUJQVlA4IGwCAABQEgCdASpgAGAAP83U22c/tCunsPycO/A5iWwAyRGrVKi/U7KnSqpEPDSRCDGcwAaoinEHq7dsJf0zolbSY81ZE7ONfKGLcStEMwiyGADz9rGhOo+63MUC/qPniOnANlHdRKDsejjCqUj0Up7z3zrQkfDbrgtTSW236t7K1sYpqNzqwWJRv3VW+1RDAagReGZSzxMHNfFqucIhoAD+6SiwWMdyfpdWWgixevAFIGXl/gL15AHcPU1/6t9inv65LQ1Q3X/Fr2+i1AyW6NmIlu1ZdBdg2YRRQscvLMBkj43Is/Xl8BthEhMn3i7bg9YekHrVGvVY0NxDRpAXz0JyK18tuaXRLp/pcjWxWz9We1fh6HXhC95EPRdSTjQWu+5SaraUI52YC9GQY9en1LpE4YcuVDL3rR3FSnr/0uS5pWdszjhuCciOFRuD0tNSnhLTbvCscTDUqlkc30f0jqN25O+JsFwloOsJRp2P60J/KUundPUzKUP2G7GxaOwUVlq/v5oSRxmZlVG6ZVy3043WHjTfnAlBPcTxREaQsTOjcg4S25EgudiBhWr3GYmttx0CKru7Lsfn80PhyqgWgEbIvLZjBftaj7wb9UodqeJ47OCM/DFrPR3/t2JAv7H+dIIvwKbUI/YSTiMg4V7rb9hNPZ06OZskoWd5RbYj7y16zqS3U8/O2DRclC5tdT66/iE6xofHOwAlNZP2wi5XdtmWUA6zV/qsS99+jAvNu2G4/u0dRGD3RU5mvY06KqOeoWEuaSrgEjn266CEWhJwNRrIqmovWEgYZn+7HSzyGzGeo94ZolZ/IDIuZ+fE8I0AAA==",
    chainId: "",
    chainIcon: "/static/icons/network/near.svg",
    chainName: "near",
    routes: [],
    symbol: "NOEAR",
    name: "NOEAR",
    tags: ["mc:999999", "type:meme"],
  },
  {
    defuseAssetId: "nep141:token.v2.ref-finance.near",
    address: "token.v2.ref-finance.near",
    decimals: 18,
    icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='16 24 248 248' style='background: %23000'%3E%3Cpath d='M164,164v52h52Zm-45-45,20.4,20.4,20.6-20.6V81H119Zm0,18.39V216h41V137.19l-20.6,20.6ZM166.5,81H164v33.81l26.16-26.17A40.29,40.29,0,0,0,166.5,81ZM72,153.19V216h43V133.4l-11.6-11.61Zm0-18.38,31.4-31.4L115,115V81H72ZM207,121.5h0a40.29,40.29,0,0,0-7.64-23.66L164,133.19V162h2.5A40.5,40.5,0,0,0,207,121.5Z' fill='%23fff'/%3E%3Cpath d='M189 72l27 27V72h-27z' fill='%2300c08b'/%3E%3C/svg%3E%0A",
    chainId: "",
    chainIcon: "/static/icons/network/near.svg",
    chainName: "near",
    routes: [],
    symbol: "REF",
    name: "Ref Finance",
    tags: ["mc:1452"],
  },
  {
    defuseAssetId: "nep141:mpdao-token.near",
    address: "mpdao-token.near",
    decimals: 6,
    icon: "data:image/svg+xml,%3csvg width='96' height='96' viewBox='0 0 96 96' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='96' height='96' rx='48' fill='white'/%3e%3cpath d='M29.2241 28.7456C28.396 27.9423 27.0094 28.5289 27.0091 29.6825L27 66.6773C26.9997 67.8501 28.4257 68.4286 29.2426 67.5872L48.6529 47.5943L29.2241 28.7456Z' fill='%23231B51'/%3e%3cpath d='M66.7759 28.7456C67.604 27.9423 68.9906 28.5289 68.9909 29.6825L69 66.6773C69.0003 67.8501 67.5743 68.4286 66.7574 67.5872L47.3471 47.5943L66.7759 28.7456Z' fill='%23231B51'/%3e%3c/svg%3e",
    chainId: "",
    chainIcon: "/static/icons/network/near.svg",
    chainName: "near",
    routes: [],
    symbol: "mpDAO",
    name: "Meta DAO Governance Token",
    tags: ["mc:999999"],
  },
  {
    defuseAssetId: "nep141:gnear-229.meme-cooking.near",
    address: "gnear-229.meme-cooking.near",
    decimals: 18,
    icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzNiAzNiI+PHBhdGggZmlsbD0iIzNFNzIxRCIgZD0iTTEyLjQzNCAyOS44MzNjLjYyNi02LjcwOC00LjQxNy03LjU0Mi02LjQxNy02LjA4My0xLjA5Ny44LTEuMzUzIDIuMzIzLS40NzkgMS41MjEgMS41NDItMS40MTYgMi4wODMtLjM3NS45MTcuMzc1cy0xLjM3NSAyLjE0NS0uMDgzIDEuMTg4YzEuMjkyLS45NTggMS42NDYtLjMzNC42NDYuODk1LS42MDUuNzQ0LjA0MiAxLjQzOCAxLjE2Ny0uMDYyLjkzOC0xLjI1MSAzLjItMS4yOTQgMi42NjIgMi45OS0uMjIyIDEuNzU2IDEuNDUzLjYwOCAxLjU4Ny0uODI0em03Ljk0MS0yMS4wMjJjLS41ODMtMy41LTEuMTI1LTUuMjQ4LTQuNjI1LTUuODMycy02LjQxNyAxLjc1LTYuNDE3IDEuNzUuNTgzLTMuNSAyLjMzMy00LjY2N2MuNjg2LS40NTggMS4xNjcgMS43NSAxLjc1IDEuNzVzMS4xNjctMS43NSAyLjkxNy0xLjc1Yy41ODMgMCAuNTgzIDEuNzUgMS4xNjcgMS43NS41ODMgMCAyLjI0My0uNTc3IDIuMzMzIDAgLjEyNi44MTItLjE2NyAxLjcyOS4yOTIgMi4xMDRzMS41NTMtLjE0OCAxLjkwMS40ODljLjM0OS42MzYtLjYxIDEuNTUzLS41MjYgMS45N3MuNzE5LjU4My41MjYgMS4zNzUtLjY1LjgzMy0uNjkyIDEuNDE3Ljg4NSAxLjA4MS42OTIgMS42ODZjLS4xOTIuNjA2LS42NTEuNjg4LS44NTkgMS40NTktLjIwOC43NzEuNTQxLjY0OS4zMzMgMS40MzktLjIwOC43OS0uOTU4Ljk5MS0xLjIwOCAxLjc2Ni0uMjUuNzc0LjY2Ni45NDEuMjA4IDEuNjkxcy0xLjI5MS44NzUtMS4zMzMgMS4zMzMuMjA5LjgxOC4wNDIgMS41NTVjLS4xNjcuNzM2LTEuMTI2LjM2Mi0xLjIwOS45NDVzLjIwOS44NzUuMjA5IDEuNTgzLS43MDkuODM0LS42MjUgMS41NDIuNzUuMTY3IDEuMTY3IDEtLjI0OSAxLjU4My4yMDkgMi4wODMgMS4wODMtLjY2NyAxLjcwOC0uMjVjLjYyNS40MTcuNjc3IDEuMjUgMS4zNTkgMS4zNzVzLjg5MS0xLjI5MiAxLjM5MS0xLjI1IDEuNjI1LjcwOSAyLjIwOC40MTcuNTQxLTEuNDU5IDEtMS45NTkgMS4wNDItLjA0MSAxLjQ1OC0uNTgzLS4xNDUtMS4xNzUtLjA2Mi0xLjk2Ny44NTQtMS4yNDEuODEyLTEuODY2LS42NjctLjYyNS0uOTE3LTEuMjkyLjQ1OC0xLjI1LjIwOC0xLjg3NS0xLjMzMi0uODMzLTEuMjkxLTEuNDU4LjQ1OS0xLjMzMy4yNS0yLjA0Mi0xLjA4NC0xLjE2Ni0xLjA0Mi0xLjcwNy40OTktMS4yNS41ODMtMS42NDYtLjc0OS0uODEyLS42NjYtMS40NzkuNjI0LS42MjEuODMyLTEuMjIzYy4yMDgtLjYwMi0uNzQ5LS45MDEtLjI0OS0xLjY3MnMuNzUxLS4yNyAxLjE2Ny0uNjg4Yy40MTYtLjQxNy0uMDAxLTEuMzM0LjQxNi0xLjU0Mi40MTctLjIwOCAxLjI1LS4wNDIgMS42NjctLjMzM3MuNDE3LS43MDguODc1LS44NzVjLjQ1OC0uMTY3IDEuMDQyLjU0MiAxLjQxNy41NDJzMS4wNDEtLjcwOCAxLjU0MS0uNTQyYy41LjE2NyAxLjU4NCAxLjMzMy45MTcgMS42ODhzLTUuNzUxLjYwNS01Ljc5MiAyLjkzOCAyLjc5MyAxMi45MTcgMS45NTkgMTUuNTgzLTQuMjkxIDguMzM0LTguMjUgNy4yNWMtMy45NTktMS4wODQtOC42NjctMy41MDEtNy41NDItNy4yMDkgMS4xMjUtMy43MDkgNC43NDktMTEuMjk2IDUuNDU4LTE0Ljc3M3oiLz48cGF0aCBmaWxsPSIjNzdCMjU1IiBkPSJNMjEgNy44OTdjMCAzLjk3OC0yLjM4MiA4LjE0NC01LjgzMyA3LjU2Ni01LjMyMy0uODktNS42MDYtMi41ODctNi40MTctMS41NDYtMi45MTcgMy43NDMtNC42NDQtLjQ4NS01LjMwNy0xLjE4NkMzLjI3NiAxMi41NTUgMCAxMS41OSAwIDkuNzQ0YzAtMS4xOTcgMS43NS0yLjQxOCAyLjkxNy0xLjIzMSAxLjcyMi0uMDQzIDguMTY3LTYuMTU2IDEyLjI1LTYuMTU2QzE5LjI1IDIuMzU2IDIxIDUuNDM1IDIxIDcuODk3eiIvPjxwYXRoIGZpbGw9IiMyOTJGMzMiIGQ9Ik0xNC41ODMgNy4wNjJjMCAuNjQ0LS41MjMgMS4xNjctMS4xNjcgMS4xNjdzLTEuMTY3LS41MjMtMS4xNjctMS4xNjcuNTIzLTEuMTY3IDEuMTY3LTEuMTY3Yy42NDUuMDAxIDEuMTY3LjUyMyAxLjE2NyAxLjE2N3oiLz48cGF0aCBmaWxsPSIjM0U3MjFEIiBkPSJNMi45MTcgMTAuMjcxYzAgLjQ4My0uMzkyLjI5Mi0uODc1LjI5MnMtLjg3NS4xOTEtLjg3NS0uMjkyLjM5Mi0uODc1Ljg3NS0uODc1Ljg3NS4zOTIuODc1Ljg3NXoiLz48cGF0aCBmaWxsPSIjRkZGIiBkPSJNMTEuMDgzIDExLjE0NGMwIC42NDUtLjM5Mi41ODMtLjg3NS41ODNzLS44NzUuMDYxLS44NzUtLjU4M2MwLS42NDQuMzkyLTIuMzMzLjg3NS0yLjMzM3MuODc1IDEuNjg5Ljg3NSAyLjMzM3ptLTIuMzMzLjU4M2MwIC42NDUtLjM5Mi41ODMtLjg3NS41ODMtLjQ4My4wMDEtLjg3NS4wNjItLjg3NS0uNTgzIDAtLjY0NC4zOTItMi4zMzMuODc1LTIuMzMzcy44NzUgMS42ODkuODc1IDIuMzMzeiIvPjxwYXRoIGZpbGw9IiMzRTcyMUQiIGQ9Ik0xMS4wMDEgMTEuMTUyYy0zLjA5NS40NDItNi4yMTUgMS4yMjQtNy41NTggMS41NzkuMTY3LjE3Ny40MDMuNTc5LjcwOSAxLjAyMSAxLjQ3Mi0uMzggNC4yNTMtMS4wNTEgNy4wMTUtMS40NDQuMzE5LS4wNDYuNTQtLjM0Mi40OTUtLjY2MS0uMDQ3LS4zMi0uMzQ0LS41NDItLjY2MS0uNDk1eiIvPjxwYXRoIGZpbGw9IiM3N0IyNTUiIGQ9Ik0yMC45NDYgOC45MzdjMCA0LjM3NS0xLjcxNCA4LjIwMS0yLjk0NiAxMS4xNy0xLjMzMyAzLjIxMi0xIDkgNCA5czYuNTExLTMuMTkxIDctNWMxLjM1OC01LjAyMS0yLTgtMi0xMyAwLTkgOC03IDgtNnMtNi45MzQgMS4zNzQtMyA5UzM2IDM2IDIyIDM2IDggMjcuMTA3IDEwIDIzLjEwN2MxLjQxNi0yLjgzMiA0LTcuMTA3LjUtOS4wNDUtMi4yODItMS4yNjMgMTAuNDQ2LTUuMTI1IDEwLjQ0Ni01LjEyNXoiLz48cGF0aCBmaWxsPSIjM0U3MjFEIiBkPSJNMTEuMzM1IDcuNzcxYy0uMjU2IDAtLjUxMi0uMDk4LS43MDctLjI5My0uMzkxLS4zOTEtLjM5MS0xLjAyMyAwLTEuNDE0LjA4My0uMDgzIDIuMDgxLTIuMDQzIDUuMzc0LTIuMDQzLjU1MiAwIDEgLjQ0OCAxIDFzLS40NDggMS0xIDFjLTIuNDM1IDAtMy45NDUgMS40NDItMy45NiAxLjQ1Ny0uMTk1LjE5NS0uNDUxLjI5My0uNzA3LjI5M3oiLz48cGF0aCBmaWxsPSIjNUM5MTNCIiBkPSJNMTAuNzA4IDI1LjMzM2MuNjI3LTYuNzA4LTUuNDE3LTcuNTQyLTcuNDE3LTYuMDgzLTEuMDk3LjgtMS4zNTMgMi4zMjMtLjQ3OSAxLjUyMSAxLjU0Mi0xLjQxNiAyLjA4My0uMzc1LjkxNy4zNzUtMS4xNjcuNzUtMS4zNzUgMi4xNDYtLjA4MyAxLjE4OHMxLjY0Ni0uMzM0LjY0Ni44OTVjLS42MDUuNzQ0LjA0MiAxLjQzOCAxLjE2Ny0uMDYyLjkzOC0xLjI1MSA0LjItMS4yOTQgMy42NjIgMi45OS0uMjIyIDEuNzU2IDEuNDU0LjYwOCAxLjU4Ny0uODI0eiIvPjwvc3ZnPg==",
    chainId: "",
    chainIcon: "/static/icons/network/near.svg",
    chainName: "near",
    routes: [],
    symbol: "gnear",
    name: "gnear",
    tags: ["mc:999999", "type:meme"],
  },
];
