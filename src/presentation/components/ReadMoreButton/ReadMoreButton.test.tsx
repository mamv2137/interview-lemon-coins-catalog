import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react-native';
import ReadMoreButton from './ReadMoreButton';
import { Linking } from 'react-native';

jest.mock('react-native/Libraries/Linking/Linking', () => ({
  openURL: jest.fn(),
}));

describe('ReadMoreButton', () => {
  const mockName = 'Bitcoin';
  const mockSlug = 'bitcoin';

  it('renders correctly with the correct text', () => {
    render(<ReadMoreButton name={mockName} slug={mockSlug} />);
    expect(screen.getByText(`Lee mas acerca de ${mockName}`)).toBeTruthy();
  });

  it('opens the correct URL when pressed', () => {
    render(<ReadMoreButton name={mockName} slug={mockSlug} />);
    const button = screen.getByText(`Lee mas acerca de ${mockName}`);
    fireEvent.press(button);
    expect(Linking.openURL).toHaveBeenCalledWith(`https://coinmarketcap.com/currencies/${mockSlug}/`);
  });
});