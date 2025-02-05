import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react-native';
import CoinItem from './CoinItem';
import { useNavigation } from '@react-navigation/native';
import { formatToLocalPrice } from '../../../../utils/formaters';
import useGetIsFavorite from '../../../../hooks/useGetIsFavorite';
import { getImageUrl } from './utils';
import { mockCoins } from '../../../../../jest/helpers/mock-data';

jest.mock('@react-native-async-storage/async-storage', () =>
  require('@react-native-async-storage/async-storage/jest/async-storage-mock')
);
jest.mock('@react-navigation/native');
jest.mock('../../../../utils/formaters');
jest.mock('../../../../hooks/useGetIsFavorite');
jest.mock('./utils');

const mockNavigation = {
  navigate: jest.fn(),
};

const mockCoin = mockCoins[0];

beforeEach(() => {
  (useNavigation as jest.Mock).mockReturnValue(mockNavigation);
  (formatToLocalPrice as jest.Mock).mockReturnValue('$50,000.00');
  (useGetIsFavorite as jest.Mock).mockReturnValue(false);
  (getImageUrl as jest.Mock).mockReturnValue('https://example.com/coin.png');
});

describe('CoinItem', () => {
  it('renders correctly', () => {
    render(<CoinItem coin={mockCoin} />);

    expect(screen.getByText('Bitcoin (BTC)')).toBeTruthy();
    expect(screen.getByText('$50,000.00 USD')).toBeTruthy();
    expect(screen.getByTestId('coin-image')).toBeOnTheScreen();
  });

  it('navigates to CoinScreen when pressed', () => {
    render(<CoinItem coin={mockCoin} />);

    fireEvent.press(screen.getByText('Bitcoin (BTC)'));
    expect(mockNavigation.navigate).toHaveBeenCalledWith('CoinScreen', { ...mockCoin });
  });
});