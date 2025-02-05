import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';

const EmptyList = () => {
  return (
    <View
      style={styles.container}
    >
      <Text>Oopss!!...</Text>
      <Text>No se encontraron resultados</Text>
    </View>
  );
};

export default EmptyList;
