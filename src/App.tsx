import './App.css';
import { PokemonSearch } from './components/PokemonSearch';
import { PokemonInformation } from './components/PokemonInformation';
import { useState } from 'react';
import { Pokemon } from './gql/graphql';
import request from 'graphql-request';
import { useQuery } from '@tanstack/react-query';

const fetchSearchResults = async (searchTerm: string) => {
  const endpoint = 'https://graphql-pokemon2.vercel.app/?query=&operationName=getPokemon';

  const query = `
    query getPokemon($name: String!) {
      pokemon(name: $name) {
        id
        name
        number
        image
        attacks {
          special {
            name
            type
            damage
          }
        }
      }
    }
  `;

  const variables = {
    name: searchTerm,
  };

  const data = await request(endpoint, query, variables);
  
  return data.pokemon;
};

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResult, setSearchResult] = useState<Pokemon>({} as Pokemon);
  const { refetch } = useQuery(['pokemon', searchTerm], () => {
    const pokemon = fetchSearchResults(searchTerm)
    pokemon.then((result) => {
      setSearchResult(result);
    },
    () => { } );
  }, {
    enabled: false,
  });

  const getSearchTerm = () => {
    return searchTerm;
  };

  const updateSearchTerm = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <>
      <PokemonSearch getSearchTerm={getSearchTerm} updateSearchTerm={updateSearchTerm} refetch={refetch} />
      <PokemonInformation pokemon={searchResult} />
    </>
  );
}

export default App;
