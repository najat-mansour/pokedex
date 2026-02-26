import { State } from '../state.js';

export async function commandMapb(state: State): Promise<void> {
    let data = null;
    if (state.prevLocationsURL === null)
        data = await state.pokeAPI.fetchLocations();
    else 
        data = await state.pokeAPI.fetchLocations(state.prevLocationsURL);

    for (const location of data.results) {
        console.log(location.name);
    }

    state.nextLocationsURL = data.next;
    state.prevLocationsURL = data.previous;
}