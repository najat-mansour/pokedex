import { State } from "../state.js";

export async function commandExplore(state: State, ...inputs: string[]): Promise<void> { 
    console.log(`Exploring ${inputs![0]}...`);
    try {
        const location = await state.pokeAPI.fetchLocation(inputs![0]);
        console.log(`Found Pokemon:`);
        for(const element of location.pokemon_encounters) {
            console.log(element.pokemon.name);
        }
        
    } catch(err: unknown) {
        console.log((err as Error).message);

    }
}