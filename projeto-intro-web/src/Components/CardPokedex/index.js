import { useContext } from "react";
import { useNavigate } from "react-router";
import { GlobalContext } from "../../Contexts/GlobalContext";
import { Container } from "./styled";
import { goToDetailsPage } from "../../Routes/Coordinator"
import { getImage } from "../PokemonImage/ReturnImg";

function CardPokedex() {

    const context = useContext(GlobalContext);
    const { pokedex, removeFromPokedex } = context;

    
    const navigate = useNavigate();

    return (
        <>
            {pokedex.map((pokemon) => {

                return (
                    <Container >
                        <img src={getImage(pokemon.name)} alt={pokemon.name} />
                        <div>
                        <button onClick={() => removeFromPokedex(pokemon)} >Remover da Pokedex</button>
                        <button onClick={() => goToDetailsPage(navigate, pokemon.name)} >Detalhes</button>
                        </div>
                    </Container>

                )

            }

            )}



        </>
    )
}

export default CardPokedex;