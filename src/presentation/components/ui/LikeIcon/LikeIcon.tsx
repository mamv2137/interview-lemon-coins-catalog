import React from 'react';
import Icon from '@react-native-vector-icons/fontawesome';

type LikeIconProps = {
  isFavorite: boolean
  size?: number
}

const LikeIcon = ({ isFavorite, size = 25 }: LikeIconProps) => {
  return (
    <Icon testID="heart-icon" name={isFavorite ? 'heart' : 'heart-o'} size={size} />
  );
};

export default LikeIcon;
