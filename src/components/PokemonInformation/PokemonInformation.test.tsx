import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import PokemonInformation from './PokemonInformation';

test('renders PokemonInformation', () => {
  render(<PokemonInformation />);
  const linkElement = screen.getByText(/PokemonInformation/i);
  expect(linkElement).toBeInTheDocument();
});
