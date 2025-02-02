import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainStack from './src/presentation/routes/MainStack';
import { AuthProvider } from './src/presentation/contexts/AuthContext';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <AuthProvider>
        <MainStack />
      </AuthProvider>
    </NavigationContainer>
  );
}

export default App;
