import React, { useState } from 'react';
import { StyleSheet, Switch, Text, TextInput, View } from 'react-native';
import CoinsList from '../components/CoinsList';
import useGetCoinsList from '../hooks/useGetCoinsList';
import Header from '../components/Headers';
import AppLayout from '../layout/App';
import Card from '../components/ui/Card';
import Icon from '@react-native-vector-icons/fontawesome';

const CoinsScreen = () => {
  const [showFavorite, setShowFavorite] = useState(false);
  const { coins, favorites } = useGetCoinsList();


  // Filters
  const [searchValue, setSearchValue] = useState('');

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
    <AppLayout>
      <Header />
      <View style={styles.listContainer}>
        <View style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-end',
          gap: 6
        }}>
          <Text>Ver Favoritos</Text>
          <Switch
            onValueChange={setShowFavorite}
            value={showFavorite}
            aria-label="ver favoritos"
          />
        </View>
        <Card>
          <TextInput
            placeholder="Buscar por simbolo o nombre"
            autoCorrect={false}
            onChangeText={setSearchValue}
          />
        </Card>
      </View>
      <CoinsList coins={filteredCoins} />
    </AppLayout>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    marginVertical: 16,
    gap: 8
  },
});

export default CoinsScreen;
