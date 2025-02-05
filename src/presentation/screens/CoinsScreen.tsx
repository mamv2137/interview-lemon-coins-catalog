import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import CoinsList from '../components/CoinsList';
import useGetCoinsList from '../hooks/useGetCoinsList';
import Header from '../components/Headers';
import AppLayout from '../layout/App';
import useCoinsStore from '../store/coins';

const CoinsScreen = () => {
  const { setCoins, coins } = useCoinsStore();
  const { isLoading, error, data = [], refetch, isRefetching } = useGetCoinsList();

  useEffect(() => {
    setCoins(data);
  }, [isLoading, isRefetching]);

  const hasError = Boolean(error);

  return (
    <AppLayout>
      <Header />
      {
        <View>
          {hasError ? <Text>Hubo un error</Text> : <CoinsList coins={coins} isLoading={isLoading || isRefetching} onRefresh={refetch} />}
        </View>
      }
    </AppLayout>
  );
};

export default CoinsScreen;
