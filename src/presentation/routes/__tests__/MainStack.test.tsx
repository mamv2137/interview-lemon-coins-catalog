import React from 'react';
import { screen } from '@testing-library/react-native';
import { render } from '../../../jest/helpers/test-utils';
import MainStack from '../MainStack';
import { useAuth } from '../../contexts/AuthContext';

jest.mock('../../contexts/AuthContext');
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