import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react-native';
import CoinsScreen from '../CoinsScreen';
import { useAuth } from '../../contexts/AuthContext';
import useGetCoinsList from '../../hooks/useGetCoinsList';
import useFavoritesStore from '../../store/favorites';
import useCoinsStore from '../../store/coins';
import { useNavigation } from '@react-navigation/native';
import { mockCoins } from '../../../jest/helpers/mock-data';
import { mockNavigation } from '../../../jest/helpers/mock-functions';

jest.mock('@react-native-async-storage/async-storage', () =>
  require('@react-native-async-storage/async-storage/jest/async-storage-mock')
);
jest.mock('../../contexts/AuthContext');
jest.mock('../../hooks/useGetCoinsList');
jest.mock('../../store/favorites');
jest.mock('../../store/coins');
jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useNavigation: jest.fn(),
  };
});
const mockUser = { id: 'user1' };
const mockFavorites = [{
  'user1': [mockCoins[0]?.id]
}];

beforeEach(() => {
  (useAuth as jest.Mock).mockReturnValue({ user: mockUser });
  (useGetCoinsList as jest.Mock).mockReturnValue({ isLoading: false, error: null, data: mockCoins });
  (useNavigation as jest.Mock).mockReturnValue(mockNavigation);
  (useFavoritesStore as unknown as jest.Mock).mockReturnValue({
    getFavoritesByUserId: jest.fn(() => mockFavorites),
    getIsFavoriteById: jest.fn((id) => mockFavorites.includes(id))
  });
  (useCoinsStore as unknown as jest.Mock).mockReturnValue({ coins: mockCoins, setCoins: jest.fn() });
});

const BTCText = 'Bitcoin (BTC)';
const ETHText = 'Ethereum (ETH)';

test('renders coins correctly', () => {
  (useNavigation as jest.Mock).mockReturnValue(mockNavigation);
  render(<CoinsScreen />);
  expect(screen.getByText(BTCText)).toBeOnTheScreen();
  expect(screen.getByText(ETHText)).toBeOnTheScreen();
});

test('filters favorites correctly', () => {
  render(<CoinsScreen />);
  const switchElement = screen.getByLabelText('ver favoritos');
  fireEvent.changeText(switchElement, { target: { value: true } });
  
  expect(screen.getByText(BTCText)).toBeOnTheScreen();
  expect(screen.queryByText(ETHText)).not.toBeOnTheScreen();
});

test('filters coins by search value', () => {
  render(<CoinsScreen />);
  const searchInput = screen.getByPlaceholderText('Buscar por simbolo o nombre');
  fireEvent.changeText(searchInput, 'Bitcoin');
  expect(screen.getByText(BTCText)).toBeTruthy();
  expect(screen.queryByText(ETHText)).toBeNull();
});