import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import PokemonInformation from './PokemonInformation';

test('renders pokemon name', () => {
  render(<PokemonInformation />);
  const pokemonNameElement = screen.getByText(/No Pokemon Yet!/i);
  expect(pokemonNameElement).toBeInTheDocument();
});
