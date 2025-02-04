
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react-native';
import LoginScreen from '../../src/presentation/screens/LoginScreen';
import { useAuth } from '../../src/presentation/contexts/AuthContext';

jest.mock('../../src/presentation/contexts/AuthContext');

const mockSignIn = jest.fn();
const mockError = 'Authentication error';

beforeEach(() => {
  (useAuth as jest.Mock).mockReturnValue({
    signIn: mockSignIn,
    error: null,
  });
});

test('renders Crypto App title', () => {
  render(<LoginScreen />);
  expect(screen.getByText('Crypto App')).toBeTruthy();
});

test('renders Sign in with Google button', () => {
  render(<LoginScreen />);
  expect(screen.getByText('Sign in with Google')).toBeTruthy();
});

test('calls signIn function when button is pressed', () => {
  render(<LoginScreen />);
  fireEvent.press(screen.getByText('Sign in with Google'));
  expect(mockSignIn).toHaveBeenCalled();
});

test('displays error message when error exists', () => {
  (useAuth as jest.Mock).mockReturnValueOnce({
    signIn: mockSignIn,
    error: mockError,
  });
  render(<LoginScreen />);
  expect(screen.getByText(mockError)).toBeTruthy();
});