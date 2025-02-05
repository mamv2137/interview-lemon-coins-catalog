import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react-native';
import LogoutButton from './LogoutButton';
import { useAuth } from '../../contexts/AuthContext';

jest.mock('../../contexts/AuthContext');
jest.mock('@react-native-vector-icons/fontawesome', () => 'Icon');

describe('LogoutButton', () => {
  const mockLogout = jest.fn();

  beforeEach(() => {
    (useAuth as jest.Mock).mockReturnValue({ signOut: mockLogout });
  });

  it('renders correctly', () => {
    render(<LogoutButton />);
    expect(screen.getByTestId('sign-out-icon')).toBeTruthy();
  });

  it('calls logout function when pressed', () => {
    render(<LogoutButton />);
    const button = screen.getByTestId('sign-out-icon');
    fireEvent.press(button);
    expect(mockLogout).toHaveBeenCalled();
  });
});