import { create, StateCreator } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { storageStore } from './storage';
import '../../config/google';

type AuthState = {
  user: {} | null,
  token: string;
}

type AuthActions = {
  login: () => void;
  logout: () => void;
  getCurrentUser: () => void;
}

type AuthStoreType = AuthState & AuthActions;

const AuthStore: StateCreator<AuthStoreType> = (set) => ({
  user: null,
  token: "",
  login: () => ({}),
  logout: () => ({}),
  getCurrentUser: () => ({}),
});

const useAuthStore = create<AuthStoreType>()(persist(
  AuthStore,
  {
    name: 'auth-storage',
    storage: createJSONStorage(() => storageStore),
  }
));

export default useAuthStore;
