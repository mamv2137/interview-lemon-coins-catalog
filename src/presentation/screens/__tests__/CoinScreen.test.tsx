import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react-native';
import CoinScreen from '../CoinScreen';
import { useRoute, useNavigation } from '@react-navigation/native';
import { useAuth } from '../../contexts/AuthContext';
import useGetCoinById from '../../hooks/useGetCoinById';
import useFavoritesStore from '../../store/favorites';
import useGetIsFavorite from '../../hooks/useGetIsFavorite';
import { mockBitcoinData } from '../../../jest/helpers/mock-data';

jest.mock('@react-navigation/native');
jest.mock('../../contexts/AuthContext');
jest.mock('../../hooks/useGetCoinById');
jest.mock('../../store/favorites');
jest.mock('../../hooks/useGetIsFavorite');
jest.mock('@react-native-async-storage/async-storage', () =>
  require('@react-native-async-storage/async-storage/jest/async-storage-mock')
);

const mockNavigation = {
  goBack: jest.fn(),
};
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

useNavigation.mockReturnValue(mockNavigation);
useRoute.mockReturnValue(mockRoute);
useAuth.mockReturnValue({ user: mockUser });
useGetCoinById.mockReturnValue({ data: mockData, isRefetching: false, refetch: jest.fn() });
useFavoritesStore.mockReturnValue({ addFavorite: jest.fn(), removeFavorite: jest.fn() });
useGetIsFavorite.mockReturnValue(false);

describe('CoinScreen', () => {
  it('renders correctly', () => {
    render(<CoinScreen />);
    expect(screen.getByText('Bitcoin')).toBeTruthy();
  });

  it('handles favorite button press', () => {
    render(<CoinScreen />);
    const favoriteButton = screen.getByTestId('favorite-button');
    fireEvent.press(favoriteButton);
    expect(useFavoritesStore().addFavorite).toHaveBeenCalled();
  });
});
