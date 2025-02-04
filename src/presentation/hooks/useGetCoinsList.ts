import useCoinsStore from '../store/coins';
import { useQuery } from '@tanstack/react-query';

const useGetCoinsList = () => {
  const { fetchAsyncCoins } = useCoinsStore();
  return useQuery({
    queryKey: ['coins'],
    queryFn: () => fetchAsyncCoins(),
  });
};

export default useGetCoinsList;
