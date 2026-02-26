import { State } from "src/state";

export async function commandPokedex(state: State) {
    const pokedex = state.pokedex;
    if (Object.keys(pokedex).length === 0) {
        console.log(`You haven't caught any Pokémon yet!`);
        return;
    }
    
    console.log(`Your Pokedex:`);
    for(const name in pokedex) {
        console.log(`- ${name}`);
    }
}