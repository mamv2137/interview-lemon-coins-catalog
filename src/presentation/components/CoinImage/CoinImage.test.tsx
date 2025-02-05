import React from 'react';
import { render, screen } from '@testing-library/react-native';
import CoinImage from './CoinImage';
import { getImageUrl } from '../CoinsList/components/CoinItem/utils';

jest.mock('../CoinsList/components/CoinItem/utils');

describe('CoinImage', () => {
  it('renders correctly with the correct image URL', () => {
    const mockCoinId = 1;
    const mockImageUrl = 'https://example.com/coin.png';
    (getImageUrl as jest.Mock).mockReturnValue(mockImageUrl);

    render(<CoinImage coinId={mockCoinId} testID="coin-image" />);

    const image = screen.getByTestId('coin-image');
    expect(image.props.source.uri).toBe(mockImageUrl);
  });
});
