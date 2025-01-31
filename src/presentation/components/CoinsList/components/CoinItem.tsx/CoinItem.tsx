import React from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import { styles } from './styles';
import { type NavigationProp, useNavigation } from '@react-navigation/native';
import { MainRouteEnum, MainStackParams } from '../../../../routes/types';

type Props = {
  coin: any
}

const CoinItem = ({ coin }: Props) => {
  const navigation = useNavigation<NavigationProp<MainStackParams>>();

  const handleNavigate = () => navigation?.navigate(MainRouteEnum?.COIN, { id: 0 });

  return (
    <Pressable
      style={styles?.container}
      onPress={handleNavigate}
    >
      <Image source={{
          uri: 'https://infomex.org.mx/wp-content/uploads/2024/08/bitcoin.png',
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
            }}>BTC</Text>
            <Text style={{
              color: "red",
              fontSize: 12

            }}>-3.49%</Text>
          </View>
          <Text>{coin?.price} USD</Text>
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
