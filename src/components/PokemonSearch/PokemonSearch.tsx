import "./PokemonSearch.css";

const PokemonSearch = () => {
  return (
    <>
      <form>
        <label htmlFor="pokemon-search-bar"></label>
        <input id="pokemon-search-bar" type="text" placeholder="Which Pokemon?" />
      </form>
    </>
  )
};

export default PokemonSearch;
