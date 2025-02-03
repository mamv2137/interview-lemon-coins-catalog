import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import LogoutButton from '../LogoutButton';
import { useAuth } from '../../contexts/AuthContext';

type Props = {}

const Header = (props: Props) => {
  const { user } = useAuth();
  return (
    <View style={styles.header}>
      {/* Avatar */}
      <View style={styles?.avatarContainer}>
        <Image
          style={styles?.avatarImg}
          source={{
            uri: user?.photo || 'https://picsum.photos/200/200',
          }}
        />
        <Text style={styles?.avatarUser}>
          Hola, {user?.givenName} 👋
        </Text>
      </View>
      <LogoutButton />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  avatarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  avatarImg: {
    height: 40,
    width: 40,
    borderRadius: 100,
  },
  avatarUser: {
    fontWeight: 500,
    width: 'auto',
  },
});

export default Header;
