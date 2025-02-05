import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react-native';
import CoinScreen from '../../src/presentation/screens/CoinScreen';
import { useRoute, useNavigation } from '@react-navigation/native';
import { useAuth } from '../../src/presentation/contexts/AuthContext';
import useGetCoinById from '../../src/presentation/hooks/useGetCoinById';
import useFavoritesStore from '../../src/presentation/store/favorites';
import useGetIsFavorite from '../../src/presentation/hooks/useGetIsFavorite';
import { mockNavigation } from '../helpers/mock-functions';
import { mockBitcoinData } from '../helpers/mock-data';

jest.mock('@react-native-async-storage/async-storage', () =>
  require('@react-native-async-storage/async-storage/jest/async-storage-mock')
);
jest.mock('@react-navigation/native');
jest.mock('../../src/presentation/contexts/AuthContext');
jest.mock('../../src/presentation/hooks/useGetCoinById');
jest.mock('../../src/presentation/store/favorites');
jest.mock('../../src/presentation/hooks/useGetIsFavorite');


const mockRoute = {
  params: { id: 1, name: 'Bitcoin', symbol: 'BTC', slug: 'bitcoin' },
};
const mockUser = { id: 'user1' };
const mockData = {
  data: {
    data: {
      1: mockBitcoinData,
    },
  },
};
const mockIsFavorite = true;
const mockAddFavorite = jest.fn();
const mockRemoveFavorite = jest.fn();
const mockRefetch = jest.fn();

beforeEach(() => {
  (useNavigation as jest.Mock).mockReturnValue(mockNavigation);
  (useRoute as jest.Mock).mockReturnValue(mockRoute);
  (useAuth as jest.Mock).mockReturnValue({ user: mockUser });
  (useGetCoinById as jest.Mock).mockReturnValue({
    data: mockData,
    isRefetching: false,
    refetch: mockRefetch,
  });
  (useFavoritesStore as unknown as jest.Mock).mockReturnValue({
    addFavorite: mockAddFavorite,
    removeFavorite: mockRemoveFavorite,
  });
  (useGetIsFavorite as jest.Mock).mockReturnValue(mockIsFavorite);
});

test('renders CoinScreen with coin data', () => {
  render(<CoinScreen />);
  expect(screen.getByText('Bitcoin')).toBeTruthy();
  expect(screen.getByText('BTC')).toBeTruthy();
  expect(screen.getByText('$50,000.00 USD')).toBeTruthy();
  expect(screen.getByText('5.00%')).toBeTruthy();
  expect(screen.getByText('Market Cap')).toBeTruthy();
  expect(screen.getByText('$1,000,000,000.00')).toBeTruthy();
  expect(screen.getByText('24h trading volumen')).toBeTruthy();
  expect(screen.getByText('$50,000,000.00')).toBeTruthy();
  expect(screen.getByText('Circulating Supply')).toBeTruthy();
  expect(screen.getByText('18000000')).toBeTruthy();
});

// test('calls refetch function on pull to refresh', () => {
//   render(<CoinScreen />);
//   const scrollView = screen.getByTestId('scroll-view');
//   const height = scrollView.props.refreshControl.props.refreshing;
//   fireEvent.scroll(scrollView, {
//     nativeEvent: { contentOffset: { y: height } },
//   });
//   expect(mockRefetch).toHaveBeenCalled();
// });

test('calls addFavorite function when favorite button is pressed and coin is not favorite', () => {
  (useGetIsFavorite as jest.Mock).mockReturnValueOnce(false);
  render(<CoinScreen />);
  fireEvent.press(screen.getByTestId('favorite-button'));
  expect(mockAddFavorite).toHaveBeenCalledWith(mockUser.id, mockRoute.params.id);
});

test('calls removeFavorite function when favorite button is pressed and coin is favorite', () => {
  render(<CoinScreen />);
  fireEvent.press(screen.getByTestId('favorite-button'));
  expect(mockRemoveFavorite).toHaveBeenCalledWith(mockUser.id, mockRoute.params.id);
});

test('calls navigation goBack function when back button is pressed', () => {
  render(<CoinScreen />);
  fireEvent.press(screen.getByTestId('back-button'));
  expect(mockNavigation.goBack).toHaveBeenCalled();
});
