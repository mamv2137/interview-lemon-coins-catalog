import React from 'react';
import { TouchableHighlight, Text } from 'react-native';
import { useAuth } from '../../contexts/AuthContext';

const LogoutButton = () => {
  const { logout } = useAuth();

  return (
    <TouchableHighlight onPress={logout}>
      <Text>Cerrar Sesion</Text>
    </TouchableHighlight>
  );
};

export default LogoutButton;
