export const mockBitcoinData = {
  id: 1,
  name: 'Bitcoin',
  symbol: 'BTC',
  slug: 'bitcoin',
  quote: {
    USD: {
      price: 50000,
      percent_change_24h: 5,
      market_cap: 1000000000,
      volume_24h: 50000000,
    },
  },
  circulating_supply: 18000000,
};

export const mockEthereumData = {
  id: 2,
  name: 'Ethereum',
  symbol: 'ETH',
  slug: 'ethereum',
  quote: {
    USD: {
      price: 50000,
      percent_change_24h: 5,
      market_cap: 1000000000,
      volume_24h: 50000000,
    },
  },
  circulating_supply: 18000000,
};

export const mockCoins = [mockBitcoinData, mockEthereumData];
