import { Dimensions } from "react-native";

export const getCardWidth = () => {
  const screenViewWidth = Dimensions.get('window').width - 10;
  return screenViewWidth / 2 - 15;
};

export const getImageUrl = (id: number) => `https://s2.coinmarketcap.com/static/img/coins/64x64/${id}.png`;
