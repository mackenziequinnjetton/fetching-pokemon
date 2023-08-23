import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import PokemonInformation from './PokemonInformation';

test('renders pokemon name', () => {
  render(<PokemonInformation />);
  const pokemonNameElement = screen.getByText(/No Pokemon Yet!/i);
  expect(pokemonNameElement).toBeInTheDocument();
});

test('renders pokemon number', () => {
  render(<PokemonInformation />);
  const pokemonNumberElement = screen.getByText(/\(xxx\)/i);
  expect(pokemonNumberElement).toBeInTheDocument();
});

test('renders pokemon image', () => {
  render(<PokemonInformation />);
  const pokemonImageElement = screen.getByAltText(/Your searched Pokemon./i);
  expect(pokemonImageElement).toBeInTheDocument();
});

test('renders placeholder text to replace image for when no pokemon has been searched for', () => {
  render(<PokemonInformation />);
  const pokemonImagePlaceholderElement = screen.getByText(/Please submit a Pokemon!/i);
  expect(pokemonImagePlaceholderElement).toBeInTheDocument();
});
