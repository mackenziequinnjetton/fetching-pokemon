import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import PokemonSearch from './PokemonSearch';

test('renders PokemonSearch search bar', () => {
  render(<PokemonSearch />);
  const pokemonSearchBarElement = screen.getByPlaceholderText(/Which Pokemon?/i);
  expect(pokemonSearchBarElement).toBeInTheDocument();
});

test('renders PokemonSearch search button', () => {
  render(<PokemonSearch />);
  const pokemonSearchButtonElement = screen.getByRole('button', { name: /Search/i });
  expect(pokemonSearchButtonElement).toBeInTheDocument();
});
