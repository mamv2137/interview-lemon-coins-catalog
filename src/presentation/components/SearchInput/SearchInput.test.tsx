import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react-native';
import SearchInput from './SearchInput';

describe('SearchInput', () => {
  it('renders correctly', () => {
    render(<SearchInput placeholder="Search..." />);
    expect(screen.getByPlaceholderText('Search...')).toBeTruthy();
  });

  it('calls onChangeText when text is changed', () => {
    const handleChangeText = jest.fn();
    render(<SearchInput placeholder="Search..." onChangeText={handleChangeText} />);
    const input = screen.getByPlaceholderText('Search...');
    fireEvent.changeText(input, 'Bitcoin');
    expect(handleChangeText).toHaveBeenCalledWith('Bitcoin');
  });
});
