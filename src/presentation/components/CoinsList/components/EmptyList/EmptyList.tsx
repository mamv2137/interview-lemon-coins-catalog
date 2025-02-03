import React from 'react'
import { View, Text } from 'react-native'

const EmptyList = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 12
      }}
    >
      <Text>Oopss!!...</Text>
      <Text>No se encontraron resultados</Text>
    </View>
  )
}

export default EmptyList;
