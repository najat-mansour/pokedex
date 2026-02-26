import { State } from "src/state";

export async function commandExplore(state: State, ...inputs: string[]): Promise<void> { 
    console.log(`Exploring ${inputs![0]}...`);
    console.log(`Found Pokemon:`);
    const location = await state.pokeAPI.fetchLocation(inputs![0]);
    for(const element of location.pokemon_encounters) {
        console.log(element.pokemon.name);
    }
}