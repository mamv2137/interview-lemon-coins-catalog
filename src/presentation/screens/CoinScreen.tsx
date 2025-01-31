import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { MainStackParams } from '../routes/types';


const CoinScreen = () => {
  const { params } = useRoute<RouteProp<MainStackParams>>();
  const navigation = useNavigation();

  useEffect(() => {
    navigation?.setOptions({
      title: params?.id,
    });
  },[]);

  return (
    <View>
      <Text>Detalle de la coin {params?.id}</Text>
    </View>
  );
};

export default CoinScreen;
