import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import PokemonInformation from './PokemonInformation';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const placeholderSetup = () => {
  render(
    <PokemonInformation data={undefined} />
  )
}

test('renders placeholder pokemon name', () => {
  placeholderSetup();
  const pokemonNamePlaceholderElement = screen.getByText(/No Pokemon Yet!/i);
  expect(pokemonNamePlaceholderElement).toBeInTheDocument();
});

test('renders placeholder pokemon number', () => {
  placeholderSetup();
  const pokemonNumberElement = screen.getByText(/\(xxx\)/i);
  expect(pokemonNumberElement).toBeInTheDocument();
});

test('renders placeholder pokemon image', () => {
  placeholderSetup();
  const pokemonImageElement = screen.getByAltText(/Your searched Pokemon./i);
  expect(pokemonImageElement).toBeInTheDocument();
});

test('renders placeholder text for when no successful pokemon search', () => {
  placeholderSetup();
  const pokemonImagePlaceholderElement = screen.getByText(/Please submit a Pokemon!/i);
  expect(pokemonImagePlaceholderElement).toBeInTheDocument();
});

test('renders placeholder ability move header', () => {
  placeholderSetup();
  const abilityMoveElement = screen.getByText(/Ability/i);
  expect(abilityMoveElement).toBeInTheDocument();
});

test('renders placeholder type move header', () => {
  placeholderSetup();
  const typeMoveElement = screen.getByText(/Type/i);
  expect(typeMoveElement).toBeInTheDocument();
});

test('renders placeholder damage move header', () => {
  placeholderSetup();
  const damageMoveElement = screen.getByText(/Damage/i);
  expect(damageMoveElement).toBeInTheDocument();
});
