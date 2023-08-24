import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import PokemonInformation from './PokemonInformation';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const setup = () => {
  const queryClient = new QueryClient();

  const data = {
    pokemon: {
      name: "Pikachu",
      number: "025",
      image: "https://img.pokemondb.net/artwork/pikachu.jpg",
      attacks: {
        special: [
          {
            name: "Discharge",
            type: "Electric",
            damage: "35"
          },
          {
            name: "Thunder",
            type: "Electric",
            damage: "100"
          },
          {
            name: "Thunderbolt",
            type: "Electric",
            damage: "55"
          },
        ]
      }
    }
  }

  render(
    <QueryClientProvider client={queryClient}>
      <PokemonInformation data={{}} />
    </QueryClientProvider>
  )
}

test('renders pokemon name', () => {
  setup();
  const pokemonNameElement = screen.getByText(/Pikachu/i);
  expect(pokemonNameElement).toBeInTheDocument();
});

test('renders pokemon number', () => {
  setup();
  const pokemonNumberElement = screen.getByText(/\(025\)/i);
  expect(pokemonNumberElement).toBeInTheDocument();
});

test('renders pokemon image', () => {
  setup();
  const pokemonImageElement = screen.getByAltText(/Your searched Pokemon./i);
  expect(pokemonImageElement).toBeInTheDocument();
});

test('renders placeholder text to replace image for when no pokemon has been searched for', () => {
  setup();
  const pokemonImagePlaceholderElement = screen.getByText(/Please submit a Pokemon!/i);
  expect(pokemonImagePlaceholderElement).toBeInTheDocument();
});

test('renders ability move header', () => {
  setup();
  const abilityMoveElement = screen.getByText(/Ability/i);
  expect(abilityMoveElement).toBeInTheDocument();
});

test('renders type move header', () => {
  setup();
  const typeMoveElement = screen.getByText(/Type/i);
  expect(typeMoveElement).toBeInTheDocument();
});

test('renders damage move header', () => {
  setup();
  const damageMoveElement = screen.getByText(/Damage/i);
  expect(damageMoveElement).toBeInTheDocument();
});
