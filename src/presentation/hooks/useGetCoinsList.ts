import { useEffect, useState } from 'react';
import useCoinsStore from '../store/coins';

const useGetCoinsList = () => {
  const { fetchAsyncCoins, ...store } = useCoinsStore();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState([]);

  const fetchCoinsList = async () => {
    setIsLoading(true);
    try {
      await fetchAsyncCoins();
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCoinsList();
  }, []);

  return {
    ...store,
    isLoading,
    error,
  };
};

export default useGetCoinsList;
