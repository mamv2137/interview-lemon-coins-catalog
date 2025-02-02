import { Coin } from '../types';

export enum MainRouteEnum {
  LOGIN = 'LoginScreen',
  LOADING = 'Loading',
  APP = 'AppStack'
}

export enum AppRouteEnum {
  COINS = 'CoinsScreen',
  COIN = 'CoinScreen',
}

export type MainStackParams = {
  [MainRouteEnum.LOGIN]: undefined,
  [MainRouteEnum.APP]: undefined,
  [MainRouteEnum.LOADING]: undefined,
};

export type AppStackParams = {
  [AppRouteEnum.COINS]: undefined,
  [AppRouteEnum.COIN]: Coin,
}

export type RootRoutesParams = MainStackParams & AppStackParams;
