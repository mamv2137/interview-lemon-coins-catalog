import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { Coin } from '../types';
import { getCoinsList } from '../../services/CMC';
import { storageStore } from './storage';

interface CoinsStore {
  coins: Coin[];
  favorites: Coin[];
  setCoins: (coins: Coin[]) => void;
  addFavorite: (coin: Coin) => void;
  removeFavorite: (coin: Coin) => void;
  fetchAsyncCoins: () => Promise<void>;
}

const useCoinsStore = create<CoinsStore>()(persist(
  (set) => ({
    coins: [],
    favorites: [],
    setCoins: (coins: Coin[]) => set({ coins }),
    addFavorite: (coinToAdd) => set(state => ({
      favorites: [...state?.favorites, coinToAdd],
    })),
    removeFavorite: (coinToRemove) => set(state => ({
      favorites: state?.favorites?.filter(coin => coin?.id !== coinToRemove?.id),
    })),
    fetchAsyncCoins: async () => {
      const { data } = await getCoinsList();
      const coins = data?.data;
      set({ coins })
    },
  }),
  {
    name: 'coins-storage',
    storage: createJSONStorage(() => storageStore),
  }
));

export default useCoinsStore;
