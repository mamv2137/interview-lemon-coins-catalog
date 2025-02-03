import React from 'react';
import {  Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { useAuth } from '../contexts/AuthContext';
// import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from '@react-native-vector-icons/fontawesome';

const LoginScreen = () => {
  const { signIn } = useAuth();
  return (
    <SafeAreaView
      style={style.container}
    >
      <Text
        style={style.title}
      >
        Crypto App
      </Text>
      <Pressable
        onPress={signIn}
      >
        <View style={style.button}>
          <Icon name="google" size={20}/>
          <Text style={style.button_text}>Sign in with Google</Text>
        </View>
      </Pressable>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 12,
  },
  title: {
    fontSize: 24,
  },
  button: {
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    gap: 12,
    marginHorizontal: 'auto',
    width: '80%',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  button_text: {
    fontSize: 18,
  },
});

export default LoginScreen;
