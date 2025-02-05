import React from 'react';
import { render, screen } from '@testing-library/react-native';
import Card from './Card';
import { Text } from 'react-native';

describe('Card', () => {
  it('renders correctly with children', () => {
    render(
      <Card>
        <Text>Test Child</Text>
      </Card>
    );

    expect(screen.getByText('Test Child')).toBeTruthy();
  });

  it('applies custom styles correctly', () => {
    const customStyle = { backgroundColor: 'red' };
    render(
      <Card style={customStyle} testID="card">
        <Text>Test Child</Text>
      </Card>
    );

    const card = screen.getByTestId('card');
    expect(card.props.style).toContainEqual(customStyle);
  });
});