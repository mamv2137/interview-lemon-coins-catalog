import { create } from 'zustand';
import { Coin } from '../types';
import { getCoinsList } from '../../services/CMC';

interface CoinsStore {
  coins: Coin[];
  setCoins: (coins: Coin[]) => void;
  fetchAsyncCoins: () => Promise<void>;
}

const useCoinsStore = create<CoinsStore>((set) => ({
  coins: [],
  setCoins: (coins: Coin[]) => set({ coins }),
  fetchAsyncCoins: async () => {
    const { data } = await getCoinsList();
    return data?.data;
  },
}));

export default useCoinsStore;
