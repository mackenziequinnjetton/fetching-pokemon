import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import PokemonSearch from './PokemonSearch';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const setup = () => {
  const queryClient = new QueryClient();

  render(
    <QueryClientProvider client={queryClient}>
      <PokemonSearch />
    </QueryClientProvider>
  )
}

test('renders PokemonSearch search bar', () => {
  setup();
  const pokemonSearchBarElement = screen.getByPlaceholderText(/Which Pokemon?/i);
  expect(pokemonSearchBarElement).toBeInTheDocument();
});

test('renders PokemonSearch search button', () => {
  setup();
  const pokemonSearchButtonElement = screen.getByRole('button', { name: /Search/i });
  expect(pokemonSearchButtonElement).toBeInTheDocument();
});
