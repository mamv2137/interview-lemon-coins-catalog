import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CoinsScreen from '../screens/CoinsScreen';
import CoinScreen from '../screens/CoinScreen';
import { MainRouteEnum, MainStackParams } from './types';
import LoginScreen from '../screens/LoginScreen';

const Stack = createNativeStackNavigator<MainStackParams>();

const MainStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        contentStyle: {
          elevation: 0,
          shadowColor: 'transparent',
        },
      }}
    >
      <Stack.Screen name="login" component={LoginScreen} />
      <Stack.Screen name={MainRouteEnum?.COINS} component={CoinsScreen} />
      <Stack.Screen name={MainRouteEnum?.COIN} component={CoinScreen} />
    </Stack.Navigator>
  );
};

export default MainStack;
