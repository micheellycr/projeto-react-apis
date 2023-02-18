import { useLocation, useNavigate } from "react-router";
import { goToPokedexPage, goToListPage } from "../../Routes/Coordinator";
import { Container } from "./styled";


function Header() {

  
  const location = useLocation();
  const navigate = useNavigate();

  const renderHeader = () => {
    switch(location.pathname){
      case "/":
        return (
          <button onClick={() => goToPokedexPage(navigate)}>Pokédex</button>
        )

      case "/pokedex":
        return(
          <button onClick={() => goToListPage(navigate)}>Ver Lista de Pokemons</button>
        )

      case "/details":
        return(
          <button onClick={() => goToListPage(navigate)}>Ver lista de Pokemons</button>
        )
        default:
          return (
            <>
              <button onClick={() => goToListPage(navigate)}>
              Ver lista de Pokemons
              </button>
            </>
          );  
    }
  }

  return (
    <Container>
      
      {renderHeader()}
    </Container>

  
  
  )};

export default Header;
