import React from 'react';
import { Pressable, Text, View } from 'react-native';
import Icon from '@react-native-vector-icons/fontawesome';
import styles from './styles';
import LikeIcon from '../../ui/LikeIcon';

interface HeaderCoinProps {
  symbol: string;
  name: string;
  isFavorite: boolean;
  onBack?: () => void
  onFavorite?: () => void;
}

const HeaderCoin = ({
  onBack,
  symbol,
  name,
  isFavorite,
  onFavorite,
}: HeaderCoinProps) => {
  return (
    <View style={styles?.container}>
      <Pressable testID="back-button" style={styles?.button} onPress={onBack}>
        <Icon name="chevron-left" size={25} />
      </Pressable>
      <View style={styles?.content}>
        <Text style={styles?.symbol}>{symbol}</Text>
        <Text style={styles?.name}>{name}</Text>
      </View>
      <Pressable testID="favorite-button" style={styles?.button} onPress={onFavorite}>
        <LikeIcon isFavorite={isFavorite} />
      </Pressable>
    </View>
  );
};

export default HeaderCoin;
