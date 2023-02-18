import { BrowserRouter, Routes, Route } from "react-router-dom";
import PokedexPage from "../Pages/PokedexPage";
import PokemonDetails from "../Pages/PokemonDetailsPage";
import PokemonsList from "../Pages/PokemonsListPage";

function Router(){

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PokemonsList />}>
                </Route>

                <Route path="/pokedex" element={<PokedexPage />}>
                </Route>

                <Route path="/details" element={<PokemonDetails />}>
                </Route>
            </Routes>
        </BrowserRouter>
    )
};

export default Router;