import './App.css';
import { PokemonSearch } from './components/PokemonSearch';
import { PokemonInformation } from './components/PokemonInformation';
import { useState } from 'react';
import { Pokemon } from './gql/graphql';

function App() {
  const [searchResult, setSearchResult] = useState<Pokemon>({} as Pokemon);

  const handleSearchResult = (searchResult: Pokemon) => {
    setSearchResult(searchResult);
  };

  return (
    <>
      <PokemonSearch handleSearchResult={handleSearchResult}/>
      <PokemonInformation pokemon={searchResult} />
    </>
  );
}

export default App;
