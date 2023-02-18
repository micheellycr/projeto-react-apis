import React from "react";
import { GlobalContext } from "./GlobalContext";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { BASE_URL } from "../Constants/url";

const GlobalState = (props) => {

  const [pokemons, setPokemons] = useState([]);
  const [pokedex, setPokedex] = useState([]);
  const [types, setTypes] = useState([]);
  
 
 console.log(pokemons)

 useEffect(() => {
  getPokemons()
}, []);


  const getPokemons = () => {
    axios.get(BASE_URL)
    .then((response) => {
      setPokemons(response.data.results)
      console.log(response.data)
      
    })
    .catch((error) => {alert(error)}) 
  };


  const removeFromPokedex = (pokemonToRemove) => {
    const newPokedex = pokedex.filter(
      (pokemonInPokedex) => pokemonInPokedex.name !== pokemonToRemove.name
    );

    setPokedex(newPokedex);
  };

  const [pokemon, setPokemon] = useState({});

  const getPokemon = () => {
    axios.get(BASE_URL)
    .then((response) => {
      setPokemon(response.data)
      console.log(response.data)
      
    })
    .catch((error) => {alert(error)}) 
  };

  useEffect(() => {
    getPokemon()}, []);

    

    const getTypes = async () => {
      
      axios.get(`https://pokeapi.co/api/v2/type/`)
      .then((results) => {
        setTypes(results.data.results)
        console.log(results.data.results)
        //types = results.data.results
        //console.log(types)
    
    })
    }

    useEffect(() => {
      getTypes()}, []);

const pokemonsInPokedex = pokedex.filter(pokemon => pokemon.name === pokemons.name)

      //const typesList = types.map(type => type.name === types.name) 
      console.log(types)
      

      
  


    const data = {
        pokedex,
        setPokedex,
        pokemons,
        setPokemons,
        removeFromPokedex,
        pokemon,
        setPokemon,
        types
    }

  
    return(
        <GlobalContext.Provider  value={data} >
            {props.children}
        </GlobalContext.Provider>
    )
}

export default GlobalState; 