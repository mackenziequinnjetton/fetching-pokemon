import "./PokemonSearch.css";

const PokemonSearch = ({ getSearchTerm, updateSearchTerm, refetch }: { 
  getSearchTerm: () => string,
  updateSearchTerm: (newSearchTerm: string) => void,
  refetch: () => void,
}) => {

  return (
    <>
      <form>
        <label htmlFor="pokemon-search-bar"></label>
        <input 
          id="pokemon-search-bar" 
          type="text" 
          placeholder="Which Pokemon?" 
          value={getSearchTerm()}
          onChange={(e) => updateSearchTerm(e.target.value)} 
        />
        <button type="submit" onClick={e => {
          e.preventDefault();
          refetch();
        }}>Search</button>
      </form>
    </>
  )
};

export default PokemonSearch;
