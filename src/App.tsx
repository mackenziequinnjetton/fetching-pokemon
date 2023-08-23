import './App.css';
import { PokemonInformation } from './components/PokemonInformation';
import { PokemonSearch } from './components/PokemonSearch';

function App() {
  return (
    <>
      <PokemonSearch />
      <PokemonInformation />
    </>
  );
}

export default App;
