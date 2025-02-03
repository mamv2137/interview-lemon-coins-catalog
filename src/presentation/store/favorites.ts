import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { Coin } from '../types';
import { storageStore } from './storage';

interface FavoritesStore {
  favorites: Coin[];
  addFavorite: (coin: Coin) => void;
  removeFavorite: (coin: Coin) => void;
}

const useFavoritesStore = create<FavoritesStore>()(persist(
  (set) => ({
    favorites: [],
    addFavorite: (coinToAdd) => set(state => ({
      favorites: [...state?.favorites, coinToAdd],
    })),
    removeFavorite: (coinToRemove) => set(state => ({
      favorites: state?.favorites?.filter(coin => coin?.id !== coinToRemove?.id),
    })),
  }),
  {
    name: 'favorites-storage',
    storage: createJSONStorage(() => storageStore),
  }
));

export default useFavoritesStore;
