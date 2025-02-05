import React from 'react';
import { TouchableHighlight } from 'react-native';
import { useAuth } from '../../contexts/AuthContext';
import Icon from '@react-native-vector-icons/fontawesome';
import styles from './styles';

const LogoutButton = () => {
  const { signOut } = useAuth();

  return (
    <TouchableHighlight testID="sign-out-button" onPress={signOut} style={styles.button}>
      <Icon testID="sign-out-icon" name="sign-out" size={20} style={styles.icon} />
    </TouchableHighlight>
  );
};

export default LogoutButton;
