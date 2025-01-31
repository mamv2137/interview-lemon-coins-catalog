import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

type Props = {}

const Header = (props: Props) => {
  return (
    <View>
      {/* Avatar */}
      <View style={styles?.avatarContainer}>
        <Image
          style={styles?.avatarImg}
          source={{
            uri: 'https://picsum.photos/200/200',
          }}
         />
        <Text style={styles?.avatarUser}>
          mamv2137
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  avatarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    borderWidth: 2,
    borderColor: 'gray',
    borderRadius: 20,
  },
  avatarImg: {
    height: 40,
    width: 40,
    borderRadius: 100,
  },
  avatarUser: {
    fontWeight: 500,
    width: 'auto'
  },
});

export default Header;
