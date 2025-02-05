import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react-native';
import HeaderCoin from './HeaderCoin';

jest.mock('@react-native-vector-icons/fontawesome', () => 'Icon');
jest.mock('../../ui/LikeIcon', () => 'LikeIcon');

describe('HeaderCoin', () => {
  const mockProps = {
    symbol: 'BTC',
    name: 'Bitcoin',
    isFavorite: true,
    onBack: jest.fn(),
    onFavorite: jest.fn(),
  };

  it('renders correctly with symbol and name', () => {
    render(<HeaderCoin {...mockProps} />);

    expect(screen.getByText(mockProps.symbol)).toBeOnTheScreen();
    expect(screen.getByText(mockProps.name)).toBeOnTheScreen();
  });

  it('calls onBack when back button is pressed', () => {
    render(<HeaderCoin {...mockProps} />);

    const backButton = screen.getByTestId('back-button');
    fireEvent.press(backButton);
    expect(mockProps.onBack).toHaveBeenCalled();
  });

  it('calls onFavorite when favorite button is pressed', () => {
    render(<HeaderCoin {...mockProps} />);

    const favoriteButton = screen.getByTestId('favorite-button');
    fireEvent.press(favoriteButton);
    expect(mockProps.onFavorite).toHaveBeenCalled();
  });
});
