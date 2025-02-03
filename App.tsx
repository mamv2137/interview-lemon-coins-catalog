import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainStack from './src/presentation/routes/MainStack';
import { AuthProvider } from './src/presentation/contexts/AuthContext';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './src/config/reactQuery';

function App(): React.JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <AuthProvider>
          <MainStack />
        </AuthProvider>
      </NavigationContainer>
    </QueryClientProvider>
  );
}

export default App;
