import React from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import { type NavigationProp, useNavigation } from '@react-navigation/native';
import { AppRouteEnum, AppStackParams } from '../../../../routes/types';
import { Coin } from '../../../../types';
import { styles } from './styles';

interface ICoinItem {
  coin: Coin
}

const CoinItem = ({ coin }: ICoinItem) => {
  const navigation = useNavigation<NavigationProp<AppStackParams>>();

  const handleNavigate = () => navigation?.navigate(AppRouteEnum?.COIN, { ...coin });

  return (
    <Pressable
      style={styles?.container}
      onPress={handleNavigate}
    >
      <Image source={{
          uri: `https://s2.coinmarketcap.com/static/img/coins/64x64/${coin?.id}.png`,
        }}
        style={styles?.image}
      />
      <View style={styles?.content}>
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          gap: 16,
        }}>
          <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 4
          }}>
            <Text style={{
              fontSize: 16,
              fontWeight: 500
            }}>{coin?.symbol}</Text>
            <Text style={{
              color: "red",
              fontSize: 12

            }}>{coin?.cmc_rank}</Text>
          </View>
          <Text>{coin?.quote?.['USD']?.price} USD</Text>
        </View>
        <View style={{
          flexDirection: 'row',
          justifyContent: "space-between"
        }}>
          <Text>{coin?.name}</Text>
          <Text>valor en pesos aqui</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default CoinItem;
