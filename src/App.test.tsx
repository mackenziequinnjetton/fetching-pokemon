import { render, screen } from '@testing-library/react';
import App from './App';

test('renders expected number of elements', () => {
  render(<App />);
  const elements1 = screen.getAllByText(/./i);
  const elements2 = screen.getAllByPlaceholderText(/./i);
  const elements3 = screen.getAllByAltText(/./i);
  const allElements = [...elements1, ...elements2, ...elements3]
  expect(allElements).toHaveLength(9);
});

test('mock querying the pokemon API using Pokemon Search and have the information displayed in Pokemon Information', () => {
  render(<App />);

  const pokemonSearchButtonElement = screen.getByRole('button', { name: /Search/i });

  const mockPokemonApiCall = () => {
    const pokemonName = 'pikachu';
    const pokemonNumber = 25;
    const pokemonImage = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png';
    const pokemonAbilities = [
      {
        ability: {
          name: 'thunderbolt'
        },
        type: {
          name: 'electric'
        },
        damage: 55
      },
      {
        ability: {
          name: 'tackle'
        },
        type: {
          name: 'normal'
        },
        damage: 35
      }
    ];
    return {
      pokemonName,
      pokemonNumber,
      pokemonImage,
      pokemonAbilities
    };
  };

  pokemonSearchButtonElement.addEventListener('click', () => {
    const { pokemonName, pokemonNumber, pokemonImage, pokemonAbilities } = mockPokemonApiCall();
    const pokemonNameElement = screen.getByText(pokemonName);
    const pokemonNumberElement = screen.getByText(`(${pokemonNumber})`);
    const pokemonImageElement = screen.getByAltText(pokemonName);
    const pokemonImagePlaceholderElement = screen.queryByText(/Please submit a Pokemon!/i);

    expect(pokemonNameElement).toBeInTheDocument();
    expect(pokemonNumberElement).toBeInTheDocument();
    expect(pokemonImageElement).toBeInTheDocument();
    expect(pokemonImageElement).toHaveAttribute('src', pokemonImage);
    expect(pokemonImagePlaceholderElement).not.toBeInTheDocument();
    pokemonAbilities.forEach(({ ability, type, damage }) => {
      const abilityMoveElement = screen.getByText(ability.name);
      const typeMoveElement = screen.getByText(type.name);
      const damageMoveElement = screen.getByText(damage);
      expect(abilityMoveElement).toBeInTheDocument();
      expect(typeMoveElement).toBeInTheDocument();
      expect(damageMoveElement).toBeInTheDocument();
    });
  });

  pokemonSearchButtonElement.click();
});
