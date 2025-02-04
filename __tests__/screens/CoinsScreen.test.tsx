import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react-native';
import { useNavigation } from '@react-navigation/native';
// import { render } from '../test-utils';
import CoinsScreen from '../../src/presentation/screens/CoinsScreen';
import { useAuth } from '../../src/presentation/contexts/AuthContext';
import useGetCoinsList from '../../src/presentation/hooks/useGetCoinsList';
import useFavoritesStore from '../../src/presentation/store/favorites';
import useCoinsStore from '../../src/presentation/store/coins';

jest.mock('@react-native-async-storage/async-storage', () =>
  require('@react-native-async-storage/async-storage/jest/async-storage-mock')
);
jest.mock('../../src/presentation/contexts/AuthContext');
jest.mock('../../src/presentation/hooks/useGetCoinsList');
jest.mock('../../src/presentation/store/favorites');
jest.mock('../../src/presentation/store/coins');
jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
  useNavigation: jest.fn(),
}));

const mockNavigation = {
  goBack: jest.fn(),
};
const mockUser = { id: 'user1' };
const mockCoins = [
  { id: 1, name: 'Bitcoin', symbol: 'BTC' },
  { id: 2, name: 'Ethereum', symbol: 'ETH' },
];
const mockFavorites = [mockCoins[0]?.id];

beforeEach(() => {
  (useAuth as jest.Mock).mockReturnValue({ user: mockUser });
  (useGetCoinsList as jest.Mock).mockReturnValue({ isLoading: false, error: null, data: mockCoins });
  (useNavigation as jest.Mock).mockReturnValue(mockNavigation);
  (useFavoritesStore as jest.Mock).mockReturnValue({ getFavoritesByUserId: jest.fn(() => mockFavorites) });
  (useCoinsStore as jest.Mock).mockReturnValue({ coins: mockCoins, setCoins: jest.fn() });
});

test('renders coins correctly', () => {
  render(<CoinsScreen />);
  expect(screen.getByText('Bitcoin')).toBeTruthy();
  expect(screen.getByText('Ethereum')).toBeTruthy();
});

test('filters favorites correctly', () => {
  render(<CoinsScreen />);
  const switchElement = screen.getByTestId('favorite-switch');
  fireEvent.changeText(switchElement, { target: { value: true } });
  expect(screen.getByText('Bitcoin')).toBeTruthy();
  expect(screen.queryByText('Ethereum')).toBeNull();
});

test('filters coins by search value', () => {
  render(<CoinsScreen />);
  const searchInput = screen.getByPlaceholderText('Search');
  fireEvent.changeText(searchInput, 'Bitcoin');
  expect(screen.getByText('Bitcoin')).toBeTruthy();
  expect(screen.queryByText('Ethereum')).toBeNull();
});