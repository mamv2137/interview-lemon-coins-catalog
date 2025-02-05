import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react-native';
import HeaderList from './HeaderList';

describe('HeaderList', () => {
  const mockProps = {
    showFavorite: false,
    setShowFavorite: jest.fn(),
    searchValue: '',
    setSearchValue: jest.fn(),
  };

  const placeholder = 'Buscar por nombre o símbolo';

  it('renders correctly with initial props', () => {
    render(<HeaderList {...mockProps} />);

    expect(screen.getByText('Ver Favoritos')).toBeTruthy();
    expect(screen.getByLabelText('Ver Favoritos').props.value).toBe(mockProps.showFavorite);
    expect(screen.getByPlaceholderText(placeholder)).toBeTruthy();
  });

  it('calls setShowFavorite when the switch is toggled', () => {
    render(<HeaderList {...mockProps} />);

    const switchElement = screen.getByLabelText('Ver Favoritos');
    fireEvent(switchElement, 'onValueChange', true);
    expect(mockProps.setShowFavorite).toHaveBeenCalledWith(true);
  });

  it('calls setSearchValue when the search input is changed', () => {
    render(<HeaderList {...mockProps} />);

    const searchInput = screen.getByPlaceholderText(placeholder);
    fireEvent.changeText(searchInput, 'Bitcoin');
    expect(mockProps.setSearchValue).toHaveBeenCalledWith('Bitcoin');
  });
});