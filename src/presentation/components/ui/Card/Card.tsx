import React from 'react';
import { View, ViewProps } from 'react-native';
import styles from './styles';

const Card = ({ children, style, ...props }: ViewProps) => {
  return (
    <View style={[styles.card, style]} {...props}>{children}</View>
  );
};

export default Card;
