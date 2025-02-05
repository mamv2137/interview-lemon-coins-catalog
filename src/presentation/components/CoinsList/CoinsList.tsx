import React, { useState } from 'react';
import { FlatList, View } from 'react-native';
import CoinItem from './components/CoinItem';
import EmptyList from './components/EmptyList';
import { CoinsListProps } from './types';
import SkeletonCoinItem from './components/CoinItem/SkeletonCoinItem';
import styles from './styles';
import HeaderList from './components/HeaderList';
import useFavoritesStore from '../../store/favorites';
import { useAuth } from '../../contexts/AuthContext';

const CoinsList = ({ coins, isLoading = false }: CoinsListProps) => {
  const [showFavorite, setShowFavorite] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const { getFavoritesByUserId } = useFavoritesStore();
  const { user } = useAuth();
  const favorites = getFavoritesByUserId(user?.id!, coins);

  const coinsList = showFavorite ? favorites : coins;

  const getFilteredCoins = (searchParam: string) => {
    return coinsList?.filter(crypto => {
      const bySymbol = crypto?.symbol.toLowerCase().includes(searchParam.toLowerCase());
      const byName = crypto?.name.toLowerCase().includes(searchParam.toLowerCase());
      return byName || bySymbol;
    });
  };

  const filteredCoins = getFilteredCoins(searchValue);

  const mockSlots = [...new Array(4)];

  const data = isLoading ? mockSlots : coins;

  return (
    <View>
      <HeaderList
        showFavorite={showFavorite}
        setShowFavorite={setShowFavorite}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <FlatList
        testID="coins-list"
        data={filteredCoins}
        numColumns={2}
        columnWrapperStyle={[styles.list, data?.length >= 3 ? styles.start : styles.space]}
        ListEmptyComponent={<EmptyList />}
        ItemSeparatorComponent={() => <View style={{height: 16}} />}
        renderItem={({ item }) => isLoading ? <SkeletonCoinItem /> : <CoinItem coin={item} />}
      />
    </View>
  );
};

export default CoinsList;
