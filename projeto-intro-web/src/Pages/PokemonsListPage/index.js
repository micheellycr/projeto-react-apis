import { Container } from "./styled";
import Header from "../../Components/Header";
import PokemonCard from "../../Components/PokemonCard";
import { useContext } from "react";
import { GlobalContext } from "../../Contexts/GlobalContext";

function PokemonsList() {

    const context = useContext(GlobalContext);
    const { pokemons, pokedex, pokemon } = context;

    

        
        console.log(pokemons)
        console.log(pokedex)

        

    return (


        <Container>
            <Header />
            
            <section>
                
                    
                            <PokemonCard key={pokemon}
                           url={pokemon} />
                    
                    
            

            </section>

        </Container>
    )

};

export default PokemonsList;