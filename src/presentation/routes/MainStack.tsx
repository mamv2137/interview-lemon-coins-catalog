import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MainRouteEnum, RootRoutesParams } from './types';
import { useAuth } from '../contexts/AuthContext';
import AppStack from './AppStack';
import LoginScreen from '../screens/LoginScreen';

const Stack = createNativeStackNavigator<RootRoutesParams>();

const MainStack = () => {
  const { isAuthenticated } = useAuth();

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
