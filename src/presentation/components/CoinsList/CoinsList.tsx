import React from 'react';
import { FlatList } from 'react-native';
import CoinItem from './components/CoinItem.tsx/index.ts';

const coins = [{
  name: 'btc',
  price: 120000
}];

const CoinsList = ({ items }) => {
  return (
    <FlatList
      style={{
        padding: 15
      }}
      data={coins}
      renderItem={({ item }) => <CoinItem coin={item} />}
      // onEndReached={() => fetchCoins(coins.length / 50 + 1)}
      // refreshControl={
      //   <RefreshControl
      //     // refreshing={loading}
      //     tintColor="white"
      //     // onRefresh={refetchCoins}
      //   />
      // }
    />
  );
};

export default CoinsList;
