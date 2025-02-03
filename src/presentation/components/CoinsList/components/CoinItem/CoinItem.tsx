import React from 'react';
import { Dimensions, Image, Pressable, Text, View } from 'react-native';
import { type NavigationProp, useNavigation } from '@react-navigation/native';
import { AppRouteEnum, AppStackParams } from '../../../../routes/types';
import { Coin } from '../../../../types';
import Card from '../../../ui/Card';
import LikeIcon from '../../../ui/LikeIcon';
import useCoinsStore from '../../../../store/coins';
import { formatToLocalPrice } from '../../../../utils/formaters';
import { styles } from './styles';

interface ICoinItem {
  coin: Coin
}

const CoinItem = ({ coin }: ICoinItem) => {
  const navigation = useNavigation<NavigationProp<AppStackParams>>();
  const { favorites } = useCoinsStore();

  const handleNavigate = () => navigation?.navigate(AppRouteEnum?.COIN, { ...coin });

  const screenViewWidth = Dimensions.get('window').width - 10;

  const isFavorite = favorites.some((fav: Coin) => fav?.id === coin?.id);

  const quote = coin?.quote.USD;

  return (
    <Pressable
      onPress={handleNavigate}
    >
      <Card style={{
        width: screenViewWidth / 2 - 15,
      }}>
        <View style={styles.container}>
          <View style={styles?.header}>
            <Image source={{
                uri: `https://s2.coinmarketcap.com/static/img/coins/64x64/${coin?.id}.png`,
              }}
              style={styles?.image}
            />
            <LikeIcon size={18} isFavorite={isFavorite} />
          </View>
          <Text numberOfLines={1}>{coin?.name} ({coin?.symbol})</Text>
          <View style={styles?.values}>
            <Text style={styles.price}>{formatToLocalPrice(quote?.price)} USD</Text>
          </View>
        </View>
      </Card>
    </Pressable>
  );
};

export default CoinItem;
