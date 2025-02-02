import React, { useEffect, useState } from 'react';
import { SafeAreaView, Switch, TextInput, View } from 'react-native';
import CoinsList from '../components/CoinsList';
import useGetCoinsList from '../hooks/useGetCoinsList';
import { useNavigation } from '@react-navigation/native';
import Header from '../components/Header';

const CoinsScreen = () => {
  const [showFavorite, setShowFavorite] = useState(false);
  const navigator = useNavigation();
  const { coins, favorites } = useGetCoinsList();


  // Filters
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    navigator?.setOptions({
      headerShown: false,
    });
  });

  const coinsList = showFavorite ? favorites : coins;

  const getFilteredCoin = (searchParam: string) => {
    return coinsList?.filter(crypto => {
      const bySymbol = crypto?.symbol.toLowerCase().includes(searchParam.toLowerCase());
      const byName = crypto?.name.toLowerCase().includes(searchParam.toLowerCase());
      return byName || bySymbol;
    });
  };

  const filteredCoins = getFilteredCoin(searchValue);

  return (
    <SafeAreaView>
      <Header />
      <View>
        <TextInput
          placeholder='Buscar por simbolo o nombre'
          autoCorrect={false}
          onChangeText={setSearchValue}
        />
        <Switch
          onValueChange={setShowFavorite}
          value={showFavorite}
        />
      </View>
      <CoinsList coins={filteredCoins} />
    </SafeAreaView>
  );
};

export default CoinsScreen;
