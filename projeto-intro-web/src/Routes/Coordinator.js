export const goToListPage = (navigate) => {
    navigate("/");
  };
  
  export const goToPokedexPage = (navigate) => {
    navigate("/pokedex");
  };
  
  export const goToDetailsPage = (navigate, pokemonName) => {
    navigate(`/${pokemonName}`);
  };
  