import React from 'react';
import { render, screen } from '@testing-library/react-native';
import LikeIcon from './LikeIcon';

jest.mock('@react-native-vector-icons/fontawesome', () => 'Icon');

describe('LikeIcon', () => {
  it('renders heart icon when isFavorite is true', () => {
    render(<LikeIcon isFavorite={true} />);
    const icon = screen.getByTestId('heart-icon');
    expect(icon.props.name).toBe('heart');
  });

  it('renders heart-o icon when isFavorite is false', () => {
    render(<LikeIcon isFavorite={false} />);
    const icon = screen.getByTestId('heart-icon');
    expect(icon.props.name).toBe('heart-o');
  });

  it('applies the correct size', () => {
    const size = 30;
    render(<LikeIcon isFavorite={true} size={size} />);
    const icon = screen.getByTestId('heart-icon');
    expect(icon.props.size).toBe(size);
  });
});