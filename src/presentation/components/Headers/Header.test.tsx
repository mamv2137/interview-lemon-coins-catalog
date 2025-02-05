import React from 'react';
import { render, screen } from '@testing-library/react-native';
import Header from './Header';
import { useAuth } from '../../contexts/AuthContext';

jest.mock('../../contexts/AuthContext');
jest.mock('../LogoutButton', () => 'LogoutButton');

describe('Header', () => {
  const mockUser = {
    photo: 'https://example.com/photo.jpg',
    givenName: 'John',
  };

  beforeEach(() => {
    (useAuth as jest.Mock).mockReturnValue({ user: mockUser });
  });

  it('renders correctly with user data', () => {
    render(<Header />);

    expect(screen.getByText(`Hola, ${mockUser.givenName} 👋`)).toBeOnTheScreen();
  });
});
