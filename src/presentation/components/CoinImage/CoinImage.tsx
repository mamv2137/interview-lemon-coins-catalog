import React from 'react';
import { Image, ImageProps } from 'react-native';

interface CoinImageProps extends ImageProps {
  coinId: number
}

const CoinImage = ({ coinId, ...props }: CoinImageProps) => {
  return (
    <Image source={{
        uri: `https://s2.coinmarketcap.com/static/img/coins/64x64/${coinId}.png`,
      }}
      {...props}
    />
  );
};

export default CoinImage;
