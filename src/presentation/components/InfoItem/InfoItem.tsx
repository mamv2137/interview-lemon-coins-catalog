import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

interface InfoItemProps {
  title: string
  content: string
}

const InfoItem = ({
  title = '',
  content = '',
}: InfoItemProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.content}>{content}</Text>
    </View>
  );
};

export default InfoItem;
