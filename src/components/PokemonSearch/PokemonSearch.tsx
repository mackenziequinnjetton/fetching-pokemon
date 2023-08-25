import { useQuery, useQueryClient } from "@tanstack/react-query";
import "./PokemonSearch.css";
import request, { RequestDocument } from "graphql-request";
import { graphql } from "../../gql/gql";
import { useState } from "react";
import PokemonInformation from "../PokemonInformation/PokemonInformation";

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
    searchTerm,
  };

  const data = await request(endpoint, query, variables);
  return data.pokemon;
};

const PokemonSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const queryClient = useQueryClient();

  const { data, error, isLoading } = useQuery(['pokemon', searchTerm], () => fetchSearchResults(searchTerm), {
    enabled: false,
  });

  const handleSearch = () => {
    if (searchTerm.trim() !== '') {
      queryClient.prefetchQuery(['pokemon', searchTerm], () => fetchSearchResults(searchTerm));
    }
  };

  // const { data } = useQuery({
  //   queryKey: ['pokemon'],
  //   queryFn: async () => {
  //     return await request(
  //       'https://graphql-pokemon2.vercel.app/?query=&operationName=getPokemon', 
  //       getPokemonDocument, 
  //       { name: 'Pikachu' }
  //     )
  //   }
  // });

  return (
    <>
      <form>
        <label htmlFor="pokemon-search-bar"></label>
        <input 
          id="pokemon-search-bar" 
          type="text" 
          placeholder="Which Pokemon?" 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} 
        />
        <button type="submit" onClick={handleSearch}>Search</button>
      </form>

      {data && <PokemonInformation pokemon={data} />}
    </>
  )
};

export default PokemonSearch;
