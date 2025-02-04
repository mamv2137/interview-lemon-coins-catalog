import { useAuth } from '../contexts/AuthContext';
import useFavoritesStore from '../store/favorites';

const useGetIsFavorite = (coinId: number): boolean => {
  const { user } = useAuth();
  const { getIsFavoriteById } = useFavoritesStore();

  return getIsFavoriteById(user?.id, coinId);
};

export default useGetIsFavorite;
