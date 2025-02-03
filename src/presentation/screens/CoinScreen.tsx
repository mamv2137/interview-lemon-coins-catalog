import React from 'react';
import { Linking, Pressable, RefreshControl, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { AppStackParams } from '../routes/types';
import useCoinsStore from '../store/coins';
import { Coin } from '../types';
import HeaderCoin from '../components/Headers/HeaderCoin';
import useGetCoinById from '../hooks/useGetCoinById';
import CoinImage from '../components/CoinImage';
import { formatToLocalPrice, formatTwoDecimals, getVariationColor } from '../utils/formaters';
import Card from '../components/ui/Card';
import InfoItem from '../components/InfoItem';
import AppLayout from '../layout/App';
import ReadMoreButton from '../components/ReadMoreButton';

const CoinScreen = () => {
  const { params: coin } = useRoute<RouteProp<AppStackParams>>();
  const { favorites, addFavorite, removeFavorite } = useCoinsStore();
  const navigation = useNavigation();

  const { data, isRefetching, refetch } = useGetCoinById(coin?.id);

  const isFavorite = favorites.some((fav: Coin) => fav?.id === coin?.id);

  const handleFavoriteCoin = () => {
    if(isFavorite) {return removeFavorite(coin);}
    addFavorite(coin);
  };

  const info = data?.data?.data[coin?.id] || coin;

  const quote = info?.quote.USD;

  return (
    <AppLayout>
      {/* Header */}
      <HeaderCoin onBack={() => navigation?.goBack()} name={info?.name} symbol={info?.symbol} onFavorite={handleFavoriteCoin} isFavorite={isFavorite} />
      {/* Content */}
      <ScrollView
        contentContainerStyle={styles.container}
        refreshControl={
          <RefreshControl refreshing={isRefetching} onRefresh={refetch} />
        }
      >
        <Card>
          <View style={styles?.hero}>
            <View style={styles?.title}>
              <CoinImage coinId={info?.id} style={styles.image} />
              <Text style={styles.price}>{formatToLocalPrice(quote?.price)} USD</Text>
            </View>
            <View style={styles.description}>
              <Text style={styles[getVariationColor(quote?.percent_change_24h)]}>{formatTwoDecimals(quote?.percent_change_24h)}%</Text>
              <Text>(24h)</Text>
            </View>
          </View>
        </Card>
        <View style={styles?.content}>
         <Card>
            <InfoItem
              title="Market Cap"
              content={formatToLocalPrice(quote?.market_cap)}
            />
            <InfoItem
              title="24h trading volumen"
              content={formatToLocalPrice(quote?.volume_24h)}
            />
            <InfoItem
              title="Circulating Supply"
              content={info?.circulating_supply}
            />
         </Card>
        </View>
        <ReadMoreButton slug={coin?.slug} name={coin?.name} />
      </ScrollView>
    </AppLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 12,
    marginVertical: 16,
  },
  hero: {
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
  },
  title: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  image: {
    width: 40,
    height: 40,
  },
  price: {
    fontSize: 30,
  },
  description: {
    flexDirection: 'row',
    gap: 6,
  },
  green: {
    color: '#4D7C0F',
  },
  red: {
    color: '#DC2626',
  },
  content: {
    flex: 1,
  }
});

export default CoinScreen;
