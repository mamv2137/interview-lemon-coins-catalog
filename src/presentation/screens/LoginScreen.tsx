import React from 'react'
import { Button, View, Text, SafeAreaView } from 'react-native';
import { useAuth } from '../contexts/AuthContext';

const LoginScreen = () => {
  const { signIn } = useAuth();
  return (
    <SafeAreaView>
      <Text>Login Works</Text>
      <Button onPress={signIn} title="Sign In With Google" />
    </SafeAreaView>
  );
};

export default LoginScreen;
