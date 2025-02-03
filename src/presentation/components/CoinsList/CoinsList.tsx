import React from 'react';
import { FlatList, View } from 'react-native';
import CoinItem from './components/CoinItem';
import EmptyList from './components/EmptyList';

const CoinsList = ({ coins }) => {
  return (
    <FlatList
      data={coins}
      numColumns={2}
      columnWrapperStyle={{
        flexWrap: 'wrap',
        justifyContent: coins?.length > 3 ? 'space-around' : 'flex-start',
        gap: 6

      }}
      ListEmptyComponent={() => <EmptyList />}
      ItemSeparatorComponent={() => <View style={{height: 16}} />}
      renderItem={({ item }) => <CoinItem coin={item} />}
    />
  );
};

export default CoinsList;
