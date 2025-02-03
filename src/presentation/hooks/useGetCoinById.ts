import { useQuery } from '@tanstack/react-query';
import { getCoinById } from '../../services/CMC';

const useGetCoinById = (id: number) => {
  return useQuery({
    queryKey: [`coin-${id}`],
    queryFn: () => getCoinById(id),
    refetchInterval: 30 * 1000,
    refetchIntervalInBackground: true,
  });
};

export default useGetCoinById;
