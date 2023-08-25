import "./PokemonInformation.css";
import { GetPokemonQuery } from '../../gql/graphql';

const PokemonInformation = ({ data }: { data: GetPokemonQuery | void | undefined }) => {
  return (
    <>
      <h1 id="pokemon-name">{data ? data.pokemon?.name : "No Pokemon Yet!"}</h1>
      <p id="pokemon-number">({data ? data.pokemon?.number : "xxx"})</p>
      <div>
        <p id="pokemon-image-placeholder">Please submit a Pokemon!</p>
        <img 
          id="pokemon-image"
          alt="Your searched Pokemon."
          src={data && data.pokemon && data.pokemon?.image ? data.pokemon?.image : ""} 
        />
      </div>
      <table id="pokemon-moves">
        <thead>
          <tr id="pokemon-move-headers">
            <th>Ability</th>
            <th>Type</th>
            <th>Damage</th>
          </tr>
        </thead>
      </table>
    </>
  )
};

export default PokemonInformation;
