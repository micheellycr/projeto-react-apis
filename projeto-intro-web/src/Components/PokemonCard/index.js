import { useContext} from "react";
import { useLocation, useNavigate } from "react-router";
import { GlobalContext } from "../../Contexts/GlobalContext";
import { Container } from "./styled";
import { goToDetailsPage } from "../../Routes/Coordinator"
import { getImage } from "../PokemonImage/ReturnImg";
import { getColors } from "../PokemonColor/ReturnColor";
import { getTypes } from "../PokemonTypes/ReturnTypes";
import pokeball from "../PokemonImage/pokemonsImage/pngwing.png"

function PokemonCard() {


  const context = useContext(GlobalContext);
  const { pokemons, pokedex, setPokedex, removeFromPokedex, pokemon, types } = context;
  //console.log(pokemons)

  const location = useLocation();
  const navigate = useNavigate();

  const addToPokedex = (pokemons) => {

    const pokemonsInPokedex = pokedex.filter(pokemon => pokemon.name === pokemons.name)
    console.log(pokemons.name)
    console.log(pokemonsInPokedex)
    console.log(pokedex)

    if (pokemonsInPokedex) {
      const newPokedex = [...pokedex, pokemons]
      setPokedex(newPokedex)
      //console.log(pokedex)
      //console.log(setPokedex)
      //console.log(pokemonsInPokedex)
      //console.log(newPokedex)
      //console.log(pokemons.name)
    }

  }

  const pokemonsList = () =>
    pokemons.filter(
      (pokemon) =>
        !pokedex.find(
          (pokemonInPokedex) => pokemon.name === pokemonInPokedex.name
        )
    );

          console.log(types)

  return (
    <>
      {pokemonsList().map((pokemon) => {

        return (
          <Container color={getColors(types[0].name)} >
            <img src={getImage(pokemon.name)} alt={pokemon.name} />
            {/* <img key={types[0].name} src={getTypes(types[0].name)} alt={types[0].name} /> */}
            <div>
            {location.pathname === "/" ? (
                <button onClick={() => addToPokedex(pokemon)}>
                  Capturar!
                </button>
              ) : (
                <button onClick={() => removeFromPokedex(pokemon)}>
                  Remover da Pokedex
                </button>
              )}

<button onClick={() => goToDetailsPage(navigate, pokemon.name)}>Detalhes</button>
           
           
            </div>
          </Container>
        )
      })}
    </>
  );
}

export default PokemonCard;
