import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { type NavigationProp, useNavigation } from '@react-navigation/native';
import { AppRouteEnum, AppStackParams } from '../../../../routes/types';
import Card from '../../../ui/Card';
import LikeIcon from '../../../ui/LikeIcon';
import { formatToLocalPrice } from '../../../../utils/formaters';
import useGetIsFavorite from '../../../../hooks/useGetIsFavorite';
import CoinImage from '../../../CoinImage';
import { Coin } from '../../../../types';
import { getCardWidth } from './utils';
import styles from './styles';

interface ICoinItem {
  coin: Coin
}

const CoinItem = ({ coin }: ICoinItem) => {
  const navigation = useNavigation<NavigationProp<AppStackParams>>();

  const handleNavigate = () => navigation?.navigate(AppRouteEnum?.COIN, { ...coin });

  const isFavorite = useGetIsFavorite(coin?.id);

  const quote = coin?.quote?.USD;

  return (
    <Pressable
      onPress={handleNavigate}
      testID="coin-item"
    >
      <Card style={{
        width: getCardWidth(),
      }}>
        <View style={styles.container}>
          <View style={styles?.header}>
            <CoinImage 
              coinId={coin?.id}
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
