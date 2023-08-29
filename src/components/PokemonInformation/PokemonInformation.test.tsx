import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import PokemonInformation from './PokemonInformation';
import { Pokemon } from '../../gql/graphql';

const placeholderSetup = () => {
  render(
    
    <PokemonInformation pokemon={{} as Pokemon} searchTerm='' isError={false} />
  )
}

const pokemonDoubleSetup = () => {
  const pokemonDouble = {
    "id": "UG9rZW1vbjowMjU=",
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


  render(
    <PokemonInformation pokemon={pokemonDouble} searchTerm='' isError={false} />
  )
}

const noPokemonFoundSetup = () => {
  render(
    <PokemonInformation pokemon={null} searchTerm='Foo' isError={true} />
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
  pokemonDoubleSetup();
  const pokemonNameElement = screen.getByText(/Pikachu/i);
  expect(pokemonNameElement).toBeInTheDocument();
});

test('renders data double pokemon number', () => {
  pokemonDoubleSetup();
  const pokemonNumberElement = screen.getByText(/\(025\)/i);
  expect(pokemonNumberElement).toBeInTheDocument();
});

test('renders data double pokemon image', () => {
  pokemonDoubleSetup();
  const pokemonImageElement = screen.getByAltText(/Your searched Pokemon./i);
  expect(pokemonImageElement).toHaveAttribute('src', 'https://img.pokemondb.net/artwork/pikachu.jpg');
});

test('renders all data double move abilityies', () => {
  pokemonDoubleSetup();
  const abilityMoveElements = screen.getAllByText(/Discharge|Thunder|Thunderbolt/i);
  expect(abilityMoveElements).toHaveLength(3);
});

test('renders all data double move types', () => {
  pokemonDoubleSetup();
  const typeMoveElements = screen.getAllByText(/Electric/i);
  expect(typeMoveElements).toHaveLength(3);
});

test('renders all data double move damages', () => {
  pokemonDoubleSetup();
  const damageMoveElements = screen.getAllByText(/35|100|55/i);
  expect(damageMoveElements).toHaveLength(3);
});

test('renders no pokemon found name', () => {
  noPokemonFoundSetup();
  const pokemonNameElement = screen.getByText(/No Pokemon Found/i);
  expect(pokemonNameElement).toBeInTheDocument();
});

test('renders no pokemon found number', () => {
  noPokemonFoundSetup();
  const pokemonNumberElement = screen.getByText(/\(xxx\)/i);
  expect(pokemonNumberElement).toBeInTheDocument();
});

test('renders no pokemon found image placeholder', () => {
  noPokemonFoundSetup();
  const pokemonImageElement = screen.getByText(/The Pokemon "Foo" is not in the database./i);
  expect(pokemonImageElement).toBeInTheDocument();
});

test("renders expected pokemon image placeholder text when previous search has returned error, pokemon is null, and search bar is now empty", () => {
  render(
    <PokemonInformation pokemon={null} searchTerm='' isError={true} />
  )
  const pokemonImageElement = screen.getByText(/Please submit a Pokemon!/i);
  expect(pokemonImageElement).toBeInTheDocument();
});
