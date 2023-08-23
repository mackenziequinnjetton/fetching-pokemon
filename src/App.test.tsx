import { render, screen } from '@testing-library/react';
import App from './App';

test('renders expected number of elements', () => {
  render(<App />);
  const elements1 = screen.getAllByText(/./i);
  const elements2 = screen.getAllByPlaceholderText(/./i);
  const elements3 = screen.getAllByAltText(/./i);
  const allElements = [...elements1, ...elements2, ...elements3]
  expect(allElements).toHaveLength(9);
});
