import "./PokemonInformation.css";

const PokemonInformation = () => {
  return (
    <>
      <p id="pokemon-name">No Pokemon Yet!</p>
      <p id="pokemon-number">(xxx)</p>
      <div>
        <p id="pokemon-image-placeholder">Please submit a Pokemon!</p>
        <img 
          id="pokemon-image"
          alt="Your searched Pokemon." 
        />
      </div>
      
    </>
  )
};

export default PokemonInformation;
