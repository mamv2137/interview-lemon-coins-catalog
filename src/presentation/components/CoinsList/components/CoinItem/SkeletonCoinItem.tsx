import React from 'react';
import { View } from 'react-native';
import Card from '../../../ui/Card';
import { getCardWidth } from './utils';
import styles from './styles';

const SkeletonCoinItem = () => {
  return (
    <Card style={{
      width: getCardWidth(),
      backgroundColor: '#E5E5E5',
    }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={[styles.boxLoad, styles.circleLoad]} />
          <View style={[styles.boxLoad, styles.circleLoad]} />
        </View>
        <View style={styles.boxLoad} />
        <View style={styles.boxLoad} />
      </View>
    </Card>
  );
};

export default SkeletonCoinItem;
