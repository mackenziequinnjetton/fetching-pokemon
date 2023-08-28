import { useQuery, useQueryClient } from "@tanstack/react-query";
import "./PokemonSearch.css";
import request from "graphql-request";
import { useState } from "react";
import { Pokemon } from "../../gql/graphql";

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

const PokemonSearch = ({ handleSearchResult }: { handleSearchResult: (searchResult: Pokemon) => void }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const queryClient = useQueryClient();

  const { data, error, isLoading } = useQuery(['pokemon', searchTerm], () => fetchSearchResults(searchTerm), {
    enabled: false,
  });

  const handleSearch = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (searchTerm.trim() !== '') {
      queryClient.prefetchQuery(['pokemon', searchTerm], () => fetchSearchResults(searchTerm));
    }
  };

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
        <button type="submit" onClick={(e) => handleSearch(e)}>Search</button>
      </form>

      {data && handleSearchResult(data)}
    </>
  )
};

export default PokemonSearch;
