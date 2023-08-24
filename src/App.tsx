import './App.css';
import { graphql } from './gql/gql';
import { PokemonInformation } from './components/PokemonInformation';
import { PokemonSearch } from './components/PokemonSearch';
import { useQuery } from '@tanstack/react-query';
import { request } from 'graphql-request';

const getPokemonDocument = graphql(/* GraphQL */ `
  query getPokemon($name: String!) {
    pokemon(name: $name) {
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
`)

function App() {
  const { data } = useQuery({
    queryKey: ['pokemon'],
    queryFn: async () => {
      return await request(
        'https://graphql-pokemon2.vercel.app/?query=&operationName=getPokemon', 
        getPokemonDocument, 
        { name: 'Pikachu' })
    }
  });

  return (
    <>
      <PokemonSearch />
      <PokemonInformation data={data} />
    </>
  );
}

export default App;
