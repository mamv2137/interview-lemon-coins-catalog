import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { Coin } from '../types';
import { storageStore } from './storage';

type CoinIdType = Coin['id'];
interface FavoritesStore {
  favorites: Record<string, CoinIdType[]>;
  addFavorite: (userId: string, coinId: CoinIdType) => void;
  removeFavorite: (userId: string, coinId: CoinIdType) => void;
  getIsFavoriteById: (userId: string, coinId: CoinIdType) => boolean;
  getFavoritesByUserId: (userId: string, coins: Coin[]) => Coin[];
}

const useFavoritesStore = create<FavoritesStore>()(persist(
  (set, get) => ({
    favorites: {},
    addFavorite: (userId, coinId) => {
      set(state => ({
        favorites: {
          ...state.favorites || {},
          [userId]: [...state?.favorites[userId] || [], coinId],
        },
      }));
    },
    removeFavorite: (userId, coinId) => set(state => ({
      favorites: {
        ...state.favorites,
        [userId]: state?.favorites[userId]?.filter(id => id !== coinId),
      },
    })),
    getIsFavoriteById: (userId, coinId) => get().favorites[userId]?.some(favId => favId === coinId) || false,
    getFavoritesByUserId: (userId, coins) => coins?.filter(coin => get().favorites[userId].includes(coin?.id)),
  }),
  {
    name: 'favorites-storage',
    storage: createJSONStorage(() => storageStore),
  }
));

export default useFavoritesStore;
