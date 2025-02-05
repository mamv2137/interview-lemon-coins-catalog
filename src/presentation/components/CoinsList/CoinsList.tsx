import React from 'react';
import { FlatList, View } from 'react-native';
import CoinItem from './components/CoinItem';
import EmptyList from './components/EmptyList';
import { CoinsListProps } from './types';
import SkeletonCoinItem from './components/CoinItem/SkeletonCoinItem';
import styles from './styles';

const CoinsList = ({ coins, isLoading = false }: CoinsListProps) => {
  const mockSlots = [...new Array(4)];

  const data = isLoading ? mockSlots : coins;

  return (
    <FlatList
      testID="coins-list"
      data={data}
      numColumns={2}
      columnWrapperStyle={[styles.list, data?.length >= 3 ? styles.start : styles.space]}
      ListEmptyComponent={<EmptyList />}
      ItemSeparatorComponent={() => <View style={{height: 16}} />}
      renderItem={({ item }) => isLoading ? <SkeletonCoinItem /> : <CoinItem coin={item} />}
    />
  );
};

export default CoinsList;
