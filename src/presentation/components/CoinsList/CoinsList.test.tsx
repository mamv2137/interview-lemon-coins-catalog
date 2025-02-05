import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react-native';
import CoinsList from './CoinsList';
import { useNavigation } from '@react-navigation/native';
import { mockCoins } from '../../../jest/helpers/mock-data';
import { mockNavigation } from '../../../jest/helpers/mock-functions';

jest.mock('@react-native-async-storage/async-storage', () =>
  require('@react-native-async-storage/async-storage/jest/async-storage-mock')
);

jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useNavigation: jest.fn(),
  };
});

describe('CoinsList', () => {
  it('renders the list of coins correctly', () => {
    render(<CoinsList coins={mockCoins} />);

    expect(screen.getByText('Bitcoin (BTC)')).toBeTruthy();
    expect(screen.getByText('Ethereum (ETH)')).toBeTruthy();
  });

  it('navigates to CoinScreen when a coin is clicked', () => {
    (useNavigation as jest.Mock).mockReturnValue(mockNavigation);
    const { navigate } = useNavigation();
    render(<CoinsList coins={mockCoins} />);

    fireEvent.press(screen.getByText('Bitcoin (BTC)'));
    expect(navigate).toHaveBeenCalledWith('CoinScreen', { ...mockCoins[0] });
  });
});
