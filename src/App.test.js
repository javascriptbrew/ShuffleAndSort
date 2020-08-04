import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn app name', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Shuffle and Sort/i);
  expect(linkElement).toBeInTheDocument();
});
