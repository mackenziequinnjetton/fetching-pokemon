import './App.css';
import { PokemonSearch } from './components/PokemonSearch';

// const getPokemonDocument = graphql(/* GraphQL */ `
//   query getPokemon($name: String!) {
//     pokemon(name: $name) {
//       name
//       number
//       image
//       attacks {
//         special {
//           name
//           type
//           damage
//         }
//       }
//     }
//   }
// `)

function App() {
  // const { data } = useQuery({
  //   queryKey: ['pokemon'],
  //   queryFn: async () => {
  //     return await request(
  //       'https://graphql-pokemon2.vercel.app/?query=&operationName=getPokemon', 
  //       getPokemonDocument, 
  //       { name: 'Pikachu' })
  //   }
  // });

  return (
    <>
      <PokemonSearch />
    </>
  );
}

export default App;
