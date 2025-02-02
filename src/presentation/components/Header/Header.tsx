import React from 'react'
import { Button, Image, StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import LogoutButton from '../LogoutButton';
import { useAuth } from '../../contexts/AuthContext';

type Props = {}

const Header = (props: Props) => {
  const { user } = useAuth();
  return (
    <View style={styles.header}>
      {/* Avatar */}
      <TouchableHighlight>
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
      </TouchableHighlight>
      <LogoutButton />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 14
  },
  avatarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    borderWidth: 2,
    borderColor: 'gray',
    borderRadius: 20,
    width: '35%',
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
