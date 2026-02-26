import { State } from "src/state";

export async function commandInspect(state: State, ...inputs: string[]) {
    const pokemon = state.pokedex[inputs[0]];
    if (!pokemon) {
        console.log(`you have not caught that pokemon`);
        return;
    }

    console.log(`Name: ${pokemon.name}`);
    console.log(`Height: ${pokemon.height}`);
    console.log(`Weight: ${pokemon.weight}`);
    console.log(`Stats:`);
    for(const element of pokemon.stats) {
        console.log(`-${element.stat.name}: ${element.base_stat}`);
    }
    console.log(`Types:`);
    for(const element of pokemon.types) {
        console.log(`- ${element.type.name}`);
    }
}