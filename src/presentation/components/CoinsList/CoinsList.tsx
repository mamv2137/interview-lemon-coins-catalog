import React from 'react';
import { FlatList, View } from 'react-native';
import CoinItem from './components/CoinItem';
import EmptyList from './components/EmptyList';
import { CoinsListProps } from './types';
import styles from './styles';

const CoinsList = ({ coins }: CoinsListProps) => {
  return (
    <FlatList
      data={coins}
      numColumns={2}
      columnWrapperStyle={[styles.list, coins?.length > 3 ? styles.space : styles.start]}
      ListEmptyComponent={<EmptyList />}
      ItemSeparatorComponent={() => <View style={{height: 16}} />}
      renderItem={({ item }) => <CoinItem coin={item} />}
    />
  );
};

export default CoinsList;
