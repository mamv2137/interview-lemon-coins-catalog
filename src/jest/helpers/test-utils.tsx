import React, { PropsWithChildren } from 'react';
import {render} from '@testing-library/react-native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { NavigationContainer } from '@react-navigation/native';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});


const Providers = ({ children }: PropsWithChildren) => {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        {children}
      </NavigationContainer>
    </QueryClientProvider>
  );
};

const customRender = (ui: JSX.Element, options: Record<string, unknown> = {}) => {
  return render(ui, {wrapper: Providers, ...options});
}

// re-export everything
export * from '@testing-library/react-native';

// override render method
export {customRender as render};
