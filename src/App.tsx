import './App.css';
import { PokemonSearch } from './components/PokemonSearch';
import { PokemonInformation } from './components/PokemonInformation';
import { useState } from 'react';
import { Pokemon } from './gql/graphql';
import request from 'graphql-request';
import { useQuery } from '@tanstack/react-query';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResult, setSearchResult] = useState<Pokemon>({} as Pokemon);
  const { refetch, isError, error, isFetching } = useQuery(['pokemon'], async () => {
    const result = await request('https://graphql-pokemon2.vercel.app/?query=&operationName=getPokemon', `
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
    `, {
      name: searchTerm,
    });
    setSearchResult(result.pokemon);
    return result;
  }, {
    enabled: false,
  });

  const getSearchTerm = () => {
    return searchTerm;
  };

  const updateSearchTerm = (newSearchTerm: string) => {
    setSearchTerm(newSearchTerm);
    setSearchResult({} as Pokemon);
  };

  return (
    <>
      <PokemonSearch getSearchTerm={getSearchTerm} updateSearchTerm={updateSearchTerm} refetch={refetch} />
      <PokemonInformation 
        pokemon={searchResult} 
        searchTerm={searchTerm} 
        isError={isError} 
        error={error as Error} 
        isFetching={isFetching}
        updateSearchTerm={updateSearchTerm} />
    </>
  );
}

export default App;
