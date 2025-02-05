import React from 'react';
import { fireEvent, screen } from '@testing-library/react-native';
import { render } from '../../../jest/helpers/test-utils';
import AppStack from '../AppStack';
import { useAuth } from '../../contexts/AuthContext';
import useGetCoinsList from '../../hooks/useGetCoinsList';
import { mockCoins } from '../../../jest/helpers/mock-data';
import { useNavigation } from '@react-navigation/native';
import { mockNavigation } from '../../../jest/helpers/mock-functions';

jest.mock('../../contexts/AuthContext');
jest.mock('@react-native-async-storage/async-storage', () =>
  require('@react-native-async-storage/async-storage/jest/async-storage-mock')
);
jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useNavigation: jest.fn(() => ({
      navigate: jest.fn(),
    })),
  };
});
jest.mock('../../hooks/useGetCoinsList');

describe('AppStack', () => {
  beforeEach(() => {
    (useAuth as jest.Mock).mockReturnValue({ isAuthenticated: true });
    (useGetCoinsList as jest.Mock).mockReturnValue({ isLoading: false, error: null, data: mockCoins });
  });

  it('renders CoinsScreen as the initial screen', () => {
    render(
      <AppStack />
    );

    expect(screen.getByText('Bitcoin (BTC)')).toBeTruthy();
  });

  it('navigates to CoinScreen when a coin is clicked', async () => {
    (useNavigation as jest.Mock).mockReturnValue(mockNavigation);
    const { navigate } = useNavigation();
    render(
      <AppStack />
    );

    fireEvent.press(screen.getByText('Bitcoin (BTC)'));
    expect(navigate).toHaveBeenCalledWith('CoinScreen', { ...mockCoins[0] });
  });
});
