import "./PokemonInformation.css";

const PokemonInformation = () => {
  return (
    <>
      <h1 id="pokemon-name">No Pokemon Yet!</h1>
      <p id="pokemon-number">(xxx)</p>
      <div>
        <p id="pokemon-image-placeholder">Please submit a Pokemon!</p>
        <img 
          id="pokemon-image"
          alt="Your searched Pokemon." 
        />
      </div>
      <div>
        <h2 id="pokemon-ability-header">Ability</h2>
      </div>
    </>
  )
};

export default PokemonInformation;
