import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppRouteEnum, MainRouteEnum, RootRoutesParams } from './types';
import { useAuth } from '../contexts/AuthContext';
import AppStack from './AppStack';
import AuthStack from './AuthStack';
import LoadingScreen from '../screens/LoadingScreen';
import LoginScreen from '../screens/LoginScreen';
import CoinsScreen from '../screens/CoinsScreen';
import CoinScreen from '../screens/CoinScreen';

const Stack = createNativeStackNavigator<RootRoutesParams>();

const MainStack = () => {
  const { isAuthenticated, isLoading } = useAuth();

  return (
    <Stack.Navigator
      // initialRouteName="loading"
      screenOptions={{
        headerShown: false,
      }}
    >
      {isAuthenticated
        ?
          <Stack.Screen name={MainRouteEnum.APP} component={AppStack} />
        : (
          <Stack.Screen name={MainRouteEnum?.LOGIN} component={LoginScreen} />
        )
      }
    </Stack.Navigator>
  );
};

export default MainStack;
