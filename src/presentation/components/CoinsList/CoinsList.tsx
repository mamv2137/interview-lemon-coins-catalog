import React from 'react';
import { FlatList, View } from 'react-native';
import CoinItem from './components/CoinItem.tsx/index.ts';

const CoinsList = ({ coins }) => {
  return (
    <FlatList
      style={{
        padding: 15,
        gap: 12,
      }}
      data={coins}
      ItemSeparatorComponent={() => <View style={{height: 20}} />}
      renderItem={({ item }) => <CoinItem coin={item} />}
      // onEndReached={() => fetchCoins(coins.length / 50 + 1)}
    />
  );
};

export default CoinsList;
