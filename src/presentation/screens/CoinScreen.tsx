import React, { useEffect } from 'react';
import { Text, TouchableHighlight, View } from 'react-native';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { MainStackParams } from '../routes/types';
import useCoinsStore from '../store/coins';
import { Coin } from '../types';

const CoinScreen = () => {
  const { params: coin } = useRoute<RouteProp<MainStackParams>>();
  const { favorites, addFavorite, removeFavorite } = useCoinsStore();
  const navigation = useNavigation();

  const isFavorite = favorites.some((fav: Coin) => fav?.id === coin?.id);

  useEffect(() => {
    navigation?.setOptions({
      headerTitle: () => <Text>{coin?.name}</Text>,
    });
  }, [coin]);

  const handleFavoriteCoin = () => {
    if(isFavorite) return removeFavorite(coin);
    addFavorite(coin);
  };

  return (
    <View>
      <Text>Detalle de la asd {coin?.name}</Text>
      <Text>{coin?.id ?? ''}</Text>
      <TouchableHighlight onPress={handleFavoriteCoin}>
        <View>
          <Text>{isFavorite ? 'Fav' : 'NoFav'}</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
};

export default CoinScreen;
