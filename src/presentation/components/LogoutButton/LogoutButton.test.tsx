import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react-native';
import LogoutButton from './LogoutButton';
import { useAuth } from '../../contexts/AuthContext';

jest.mock('../../contexts/AuthContext');
jest.mock('@react-native-vector-icons/FontAwesome', () => 'Icon');

describe('LogoutButton', () => {
  const mockSignOut = jest.fn();

  beforeEach(() => {
    (useAuth as jest.Mock).mockReturnValue({ signOut: mockSignOut });
  });

  it('renders correctly', () => {
    render(<LogoutButton />);
    expect(screen.getByTestId('sign-out-icon')).toBeTruthy();
  });

  it('calls signOut function when pressed', () => {
    render(<LogoutButton />);
    const button = screen.getByTestId('sign-out-button');
    fireEvent.press(button);
    expect(mockSignOut).toHaveBeenCalled();
  });
});