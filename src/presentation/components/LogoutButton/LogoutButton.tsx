import React from 'react';
import { TouchableHighlight } from 'react-native';
import { useAuth } from '../../contexts/AuthContext';
import Icon from '@react-native-vector-icons/fontawesome';
import styles from './styles';

const LogoutButton = () => {
  const { logout } = useAuth();

  return (
    <TouchableHighlight onPress={logout} style={styles.button}>
      <Icon name="sign-out" size={20} style={styles.icon} />
    </TouchableHighlight>
  );
};

export default LogoutButton;
