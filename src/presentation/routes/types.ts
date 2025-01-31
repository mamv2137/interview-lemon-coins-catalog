export enum MainRouteEnum {
  COINS = 'Coins',
  COIN = 'Coin'
}

export type ProductType = {
  id: number
};

export type MainStackParams = {
  [MainRouteEnum.COINS]: undefined,
  [MainRouteEnum.COIN]: ProductType,
};
