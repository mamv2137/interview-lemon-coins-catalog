import { Coin } from '../types';

export enum MainRouteEnum {
  COINS = 'Coins',
  COIN = 'Coin'
}

export type MainStackParams = {
  [MainRouteEnum.COINS]: undefined,
  [MainRouteEnum.COIN]: Coin,
};
