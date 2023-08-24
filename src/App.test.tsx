import { render, screen } from '@testing-library/react';
import App from './App';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const setup = () => {
  const queryClient = new QueryClient();

  render(
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  )
}

test('renders expected number of elements', () => {
  setup();
  const elements1 = screen.getAllByText(/./i);
  const elements2 = screen.getAllByPlaceholderText(/./i);
  const elements3 = screen.getAllByAltText(/./i);
  const allElements = [...elements1, ...elements2, ...elements3]
  expect(allElements).toHaveLength(9);
});

