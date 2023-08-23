import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import PokemonSearch from './PokemonSearch';

test('renders PokemonSearch search bar', () => {
  render(<PokemonSearch />);
  const pokemonSearchBarElement = screen.getByPlaceholderText(/Which Pokemon?/i);
  expect(pokemonSearchBarElement).toBeInTheDocument();
});
