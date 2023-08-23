import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import PokemonSearch from './PokemonSearch';

test('renders PokemonSearch', () => {
  render(<PokemonSearch />);
  const linkElement = screen.getByText(/PokemonSearch/i);
  expect(linkElement).toBeInTheDocument();
});
