import { State } from "src/state";

export async function commandCatch(state: State, ...inputs: string[]) {
    console.log(`Throwing a Pokeball at ${inputs[0]}...`);
    const pokemon = await state.pokeAPI.fetchPokemon(inputs[0]);
    const randomChance = Math.random();
    const catchChance = 1 - (pokemon.base_experience / 400);

    if (randomChance > catchChance) {
        console.log(`${inputs[0]} was caught!`);
        console.log(`You may now inspect it with the inspect command.`);
        //! Add the caught Pokemon to the user's collection
        state.pokedex[pokemon.name] = pokemon;

    } else {
        console.log(`${inputs[0]} escaped!`);

    }
}