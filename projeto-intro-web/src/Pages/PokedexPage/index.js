import { Container } from "./styled";
import Header from "../../Components/Header";
import { useContext } from "react";
import { GlobalContext } from "../../Contexts/GlobalContext";
import CardPokedex from "../../Components/CardPokedex";

function PokedexPage(){

    const context = useContext(GlobalContext);
    const { pokemon, pokedex } = context;

    

    return(
        <Container>
            <Header />
            <section>
                
                    <CardPokedex
                    key={pokemon.name}
                    />

                 
                
            </section>
        </Container>
    )
};

export default PokedexPage;