import React, { PropsWithChildren } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

const AppLayout = ({ children }: PropsWithChildren) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        padding: 16,
      }}
    >
      {children}
    </SafeAreaView>
  );
};

export default AppLayout;
