import './App.css';
import { graphql } from './gql/gql';
import { PokemonInformation } from './components/PokemonInformation';
import { PokemonSearch } from './components/PokemonSearch';
import { useQuery } from '@tanstack/react-query';
import { request } from 'graphql-request';

const getPokemonQueryDocument = graphql(/* GraphQL */ `
  query getPokemonQuery($name: String!) {
    pokemon(name: $name) {
      number
      name
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
      request('https://graphql-pokemon2.vercel.app/', getPokemonQueryDocument, { name: 'Pikachu' })
    }
  });

  return (
    <>
      <PokemonSearch />
      <PokemonInformation />
    </>
  );
}

export default App;
