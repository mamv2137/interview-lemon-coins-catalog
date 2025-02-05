import React from 'react';
import { Image, ImageProps } from 'react-native';
import { getImageUrl } from '../CoinsList/components/CoinItem/utils';

interface CoinImageProps extends ImageProps {
  coinId: number
}

const CoinImage = ({ coinId, ...props }: CoinImageProps) => {
  return (
    <Image source={{
        uri: getImageUrl(coinId),
      }}
      testID="coin-image"
      {...props}
    />
  );
};

export default CoinImage;
