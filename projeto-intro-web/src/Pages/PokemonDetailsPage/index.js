import { useContext } from "react";
import Header from "../../Components/Header";
import { GlobalContext } from "../../Contexts/GlobalContext";
import { Container } from "./styled";


function PokemonDetails(){

    const context = useContext(GlobalContext);
    const {pokemons} = context

    return(
        <Container>
            <Header />
            <section>
                
            </section>
        </Container>
    )
};

export default PokemonDetails;