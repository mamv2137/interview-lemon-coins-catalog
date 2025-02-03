import React from 'react'
import styles from './styles';
import { Linking, Pressable, Text } from 'react-native';

interface ReadMoreButtonProps {
  name: string
  slug: string
}

const ReadMoreButton = ({ name, slug }: ReadMoreButtonProps) => {
  return (
    <Pressable style={styles.readMore} onPress={() => Linking.openURL(`https://coinmarketcap.com/currencies/${slug}/`)}>
      <Text style={styles.readMoreText}>Lee mas acerca de {name}</Text>
    </Pressable>
  )
}

export default ReadMoreButton;
