import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import PokemonInformation from './PokemonInformation';

const placeholderSetup = () => {
  render(
    <PokemonInformation data={undefined} />
  )
}

const dataDoubleSetup = () => {
  const dataDouble = {
    "pokemon": {
      "name": "Pikachu",
      "number": "025",
      "image": "https://img.pokemondb.net/artwork/pikachu.jpg",
      "attacks": {
        "special": [
          {
            "name": "Discharge",
            "type": "Electric",
            "damage": 35
          },
          {
            "name": "Thunder",
            "type": "Electric",
            "damage": 100
          },
          {
            "name": "Thunderbolt",
            "type": "Electric",
            "damage": 55
          },
        ]
      }
    }
  }

  render(
    <PokemonInformation data={dataDouble} />
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

test('renders placeholder text for when no successful pokemon search', () => {
  placeholderSetup();
  const pokemonImagePlaceholderElement = screen.getByText(/Please submit a Pokemon!/i);
  expect(pokemonImagePlaceholderElement).toBeInTheDocument();
});

test('renders move ability header', () => {
  placeholderSetup();
  const abilityMoveElement = screen.getByText(/Ability/i);
  expect(abilityMoveElement).toBeInTheDocument();
});

test('renders move type header', () => {
  placeholderSetup();
  const typeMoveElement = screen.getByText(/Type/i);
  expect(typeMoveElement).toBeInTheDocument();
});

test('renders move damage header', () => {
  placeholderSetup();
  const damageMoveElement = screen.getByText(/Damage/i);
  expect(damageMoveElement).toBeInTheDocument();
});

test('renders data double pokemon name', () => {
  dataDoubleSetup();
  const pokemonNameElement = screen.getByText(/Pikachu/i);
  expect(pokemonNameElement).toBeInTheDocument();
});

test('renders data double pokemon number', () => {
  dataDoubleSetup();
  const pokemonNumberElement = screen.getByText(/\(025\)/i);
  expect(pokemonNumberElement).toBeInTheDocument();
});

test('renders data double pokemon image', () => {
  dataDoubleSetup();
  const pokemonImageElement = screen.getByAltText(/Your searched Pokemon./i);
  expect(pokemonImageElement).toHaveAttribute('src', 'https://img.pokemondb.net/artwork/pikachu.jpg');
});

test('renders all data double move abilityies', () => {
  dataDoubleSetup();
  const abilityMoveElements = screen.getAllByText(/Discharge|Thunder|Thunderbolt/i);
  expect(abilityMoveElements).toHaveLength(3);
});

test('renders all data double move types', () => {
  dataDoubleSetup();
  const typeMoveElements = screen.getAllByText(/Electric/i);
  expect(typeMoveElements).toHaveLength(3);
});

test('renders all data double move damages', () => {
  dataDoubleSetup();
  const damageMoveElements = screen.getAllByText(/35|100|55/i);
  expect(damageMoveElements).toHaveLength(3);
});
