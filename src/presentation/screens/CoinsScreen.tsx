import React, { useState } from 'react';
import { Switch, View } from 'react-native';
import CoinsList from '../components/CoinsList';
import useGetCoinsList from '../hooks/useGetCoinsList';

const CoinsScreen = () => {
  const [showFavorite, setShowFavorite] = useState(false);
  const { coins, favorites } = useGetCoinsList();

  const coinsToShow = showFavorite ? favorites : coins;

  return (
    <View>
      <Switch
        onValueChange={setShowFavorite}
        value={showFavorite}
      />
      <CoinsList coins={coinsToShow} />
    </View>
  );
};

export default CoinsScreen;
