import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CoinsList from '../components/CoinsList';
import useGetCoinsList from '../hooks/useGetCoinsList';
import Header from '../components/Headers';
import AppLayout from '../layout/App';
import useCoinsStore from '../store/coins';

const CoinsScreen = () => {
  const { setCoins, coins } = useCoinsStore();
  const { isLoading, error, data = [] } = useGetCoinsList();

  useEffect(() => {
    setCoins(data);
  }, [isLoading]);

  return (
    <AppLayout>
      <Header />
      {
        <View>
          {error ? <Text>Hubo un error</Text> : <CoinsList coins={coins} isLoading={isLoading} />}
        </View>
      }
    </AppLayout>
  );
};

export default CoinsScreen;
