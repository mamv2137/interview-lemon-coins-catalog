import React, { useEffect, useState } from 'react';
import { StyleSheet, Switch, Text, TextInput, View } from 'react-native';
import CoinsList from '../components/CoinsList';
import useGetCoinsList from '../hooks/useGetCoinsList';
import Header from '../components/Headers';
import AppLayout from '../layout/App';
import Card from '../components/ui/Card';
import useFavoritesStore from '../store/favorites';
import useCoinsStore from '../store/coins';
import { useAuth } from '../contexts/AuthContext';

const CoinsScreen = () => {
  const [showFavorite, setShowFavorite] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const { getFavoritesByUserId } = useFavoritesStore();
  const { user } = useAuth();
  const { coins, setCoins } = useCoinsStore();
  const { isLoading, error, data = [] } = useGetCoinsList();

  useEffect(() => {
    setCoins(data);
  }, [isLoading]);

  const favorites = getFavoritesByUserId(user?.id!, coins);

  // Filters

  const coinsList = showFavorite ? favorites : coins;

  const getFilteredCoins = (searchParam: string) => {
    return coinsList?.filter(crypto => {
      const bySymbol = crypto?.symbol.toLowerCase().includes(searchParam.toLowerCase());
      const byName = crypto?.name.toLowerCase().includes(searchParam.toLowerCase());
      return byName || bySymbol;
    });
  };

  const filteredCoins = getFilteredCoins(searchValue);

  return (
    <AppLayout>
      <Header />
      {
        error ? (
          <View>
            <Text>Hubo un error</Text>
          </View>
        ) : (
          <View>
            <View style={styles.listContainer}>
              <View style={styles.favoriteBox}>
                <Text>Ver Favoritos</Text>
                <Switch
                  onValueChange={(value) => setShowFavorite(value)}
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
            <CoinsList coins={filteredCoins} isLoading={isLoading}  />
          </View>
        )
      }
    </AppLayout>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    marginVertical: 16,
    gap: 8,
  },
  favoriteBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    gap: 6,
  },
});

export default CoinsScreen;
