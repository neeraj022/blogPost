import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const {queryByText} = render(<App />);
  expect(queryByText('How to Balance Work and Study')).toBeInTheDocument();
});
