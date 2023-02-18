import bulbassaur from "./pokemonsImage/bulbassaur.png"
import ivysaur from "./pokemonsImage/ivysaur.png"
import venusaur from "./pokemonsImage/venosaur.png"
import charmander from "./pokemonsImage/charmander.png"
import charmeleon from "./pokemonsImage/charmeleon.png"
import charizard from "./pokemonsImage/charizad.png"
import squirtle from "./pokemonsImage/squitle.png"
import wartortle from "./pokemonsImage/wartortle.png"
import blastoise from "./pokemonsImage/blastoise.png"
import caterpie from "./pokemonsImage/caterpie.png"
import metapod from "./pokemonsImage/metapod.png"
import butterfree from "./pokemonsImage/buterfree.png"
import weedle from "./pokemonsImage/weedle.png"
import kakuna from "./pokemonsImage/kakuna.png"
import beedrill from "./pokemonsImage/beedrill.png"
import pidgey from "./pokemonsImage/pidgey.png"
import pidgeotto from "./pokemonsImage/pidgeotto.png"
import pidgeot from "./pokemonsImage/pidgeot.png"
import rattata from "./pokemonsImage/rattata.png"
import raticate from "./pokemonsImage/raticate.png"


export const getImage = (name) => {
    switch(name){
        case "bulbasaur":
            return bulbassaur;
        case "ivysaur":
            return ivysaur;
        case "venusaur":
            return venusaur;
        case "charmander":
            return charmander;
        case "charmeleon":
            return charmeleon;
        case "charizard":
            return charizard;
        case "squirtle":
            return squirtle;
        case "wartortle":
            return wartortle;
        case "blastoise":
            return blastoise;
        case "caterpie":
            return caterpie;
        case "metapod":
            return metapod;
        case "butterfree":
            return butterfree;
        case "weedle":
            return weedle;
        case "kakuna":
            return kakuna;
        case "beedrill":
            return beedrill;
        case "pidgey":
            return pidgey;
        case "pidgeotto":
            return pidgeotto;
        case "pidgeot":
            return pidgeot;
        case "rattata":
            return rattata;
        case "raticate":
            return raticate         
    }
}