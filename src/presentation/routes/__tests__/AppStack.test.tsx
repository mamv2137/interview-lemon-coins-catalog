import React from 'react';
import { fireEvent, screen, waitFor } from '@testing-library/react-native';
import { render } from '../../../jest/helpers/test-utils';
import AppStack from '../AppStack';
import { useAuth } from '../../contexts/AuthContext';
import useGetCoinsList from '../../hooks/useGetCoinsList';
import { mockBitcoinData } from '../../../jest/helpers/mock-data';

jest.mock('../../src/presentation/contexts/AuthContext');
jest.mock('@react-native-async-storage/async-storage', () =>
  require('@react-native-async-storage/async-storage/jest/async-storage-mock')
);
jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: jest.fn(),
    }),
  };
});
jest.mock('../../src/presentation/hooks/useGetCoinsList');

const mockCoins = [mockBitcoinData];


describe('AppStack', () => {
  beforeEach(() => {
    (useGetCoinsList as jest.Mock).mockReturnValue({ isLoading: false, error: null, data: mockCoins });
    (useAuth as jest.Mock).mockReturnValue({ isAuthenticated: true });
  });

  it('renders CoinsScreen', () => {

    render(
      <AppStack />
    );

    expect(screen.getByText('Ver Favoritos')).toBeOnTheScreen();
    expect(screen.getByTestId('coins-list')).toBeOnTheScreen();
  });

  it('renders CoinScreen', async () => {
    render(
      <AppStack />
    );

    const coinItem = screen.getByTestId('coin-item');

    fireEvent.press(coinItem);

    waitFor(async () => expect(await screen.findByText('Bitcoin')).toBeOnTheScreen());
  });
});