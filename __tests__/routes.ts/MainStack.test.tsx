import React from 'react';
import { screen } from '@testing-library/react-native';
import { render } from '../helpers/test-utils';
import MainStack from '../../src/presentation/routes/MainStack';
import { useAuth } from '../../src/presentation/contexts/AuthContext';

jest.mock('../../src/presentation/contexts/AuthContext');
jest.mock('@react-native-async-storage/async-storage', () =>
  require('@react-native-async-storage/async-storage/jest/async-storage-mock')
);

describe('MainStack', () => {
  it('renders LoginScreen when not authenticated', () => {
    useAuth.mockReturnValue({ isAuthenticated: false });

    render(
      <MainStack />
    );

    expect(screen.getByText('Crypto App')).toBeOnTheScreen();
  });

  it('renders AppStack when authenticated', () => {
    useAuth.mockReturnValue({ isAuthenticated: true });

    render(
      <MainStack />
    );

    expect(screen.getByText('Ver Favoritos')).toBeOnTheScreen();
  });
});