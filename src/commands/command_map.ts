import { State } from '../state.js';

export async function commandMap(state: State): Promise<void> {
    let data = null;
    if (state.nextLocationsURL === null)
        data = await state.pokeAPI.fetchLocations();
    else 
        data = await state.pokeAPI.fetchLocations(state.nextLocationsURL);

    for (const location of data.results) {
        console.log(location.name);
    }

    state.nextLocationsURL = data.next;
    state.prevLocationsURL = data.previous;
}