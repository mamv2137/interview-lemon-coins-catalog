import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CoinsScreen from '../screens/CoinsScreen';
import CoinScreen from '../screens/CoinScreen';
import { AppStackParams, AppRouteEnum } from './types';

const Stack = createNativeStackNavigator<AppStackParams>();

const AppStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={AppRouteEnum?.COINS} component={CoinsScreen} />
      <Stack.Screen name={AppRouteEnum?.COIN} component={CoinScreen} />
    </Stack.Navigator>
  );
};

export default AppStack;
