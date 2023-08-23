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
      <table id="pokemon-moves">
        <thead>
          <tr id="pokemon-move-headers">
            <th>Ability</th>
            <th>Type</th>
          </tr>
        </thead>
      </table>
    </>
  )
};

export default PokemonInformation;
