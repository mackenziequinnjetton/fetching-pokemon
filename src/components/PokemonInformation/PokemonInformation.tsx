import "./PokemonInformation.css";
import { Pokemon } from '../../gql/graphql';

const PokemonInformation = ({ pokemon }: { pokemon: Pokemon | null }) => {
  return (
    <>
      <h1 id="pokemon-name">{pokemon?.name ? pokemon.name : pokemon === null ? "No Pokemon Found" : "No Pokemon Yet!"}</h1>
      <p id="pokemon-number">({pokemon?.number ? pokemon.number : "xxx"})</p>
      <div>
        <p id="pokemon-image-placeholder">{pokemon?.image ? "" : "Please submit a Pokemon!"}</p>
        <img 
          id="pokemon-image"
          alt={pokemon?.image ? "Your searched Pokemon." : ""}
          src={pokemon?.image ?? ""} 
        />
      </div>
      <table id="pokemon-moves">
        <thead>
          <tr id="pokemon-move-headers">
            <th>Ability</th>
            <th>Type</th>
            <th>Damage</th>
          </tr>
          {pokemon?.attacks?.special?.map((move, index) => {
            return (
              <tr key={index} className="pokemon-move">
                <td>{move?.name}</td>
                <td>{move?.type}</td>
                <td>{move?.damage}</td>
              </tr>
            )
          })}
        </thead>
      </table>
    </>
  )
};

export default PokemonInformation;
