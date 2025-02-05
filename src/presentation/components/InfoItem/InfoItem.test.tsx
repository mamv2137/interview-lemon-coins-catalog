import React from 'react';
import { render, screen } from '@testing-library/react-native';
import InfoItem from './InfoItem';

describe('InfoItem', () => {
  it('renders correctly with title and content', () => {
    const title = 'Test Title';
    const content = 'Test Content';

    render(<InfoItem title={title} content={content} />);

    expect(screen.getByText(title)).toBeTruthy();
    expect(screen.getByText(content)).toBeTruthy();
  });
});
