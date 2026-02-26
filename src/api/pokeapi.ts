import { Cache } from "../cache/pokecache.js";

export class PokeAPI {
    private static readonly baseURL = "https://pokeapi.co/api/v2";
    private static readonly expirationTime = 60 * 60 * 1000; //! 1 hour in milliseconds
    #cache: Cache;

    constructor() {
        this.#cache = new Cache(PokeAPI.expirationTime); 
    }

    async fetchLocations(pageURL?: string): Promise<ShallowLocations> {
        const url =
        pageURL ?? `${PokeAPI.baseURL}/location-area`;

        //! Try to fetch from cache first
        const cachedData = this.#cache.get(url);
        if (cachedData) {
            console.log(`Cache hit for ${url}`);
            return cachedData as ShallowLocations;
        }

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("Failed to fetch location areas");
        }

        const data: ShallowLocations = await response.json();
        //! Add to cache before returning
        this.#cache.add(url, data);
        return data;
    }

    async fetchLocation(locationName: string): Promise<Location> {
        //! Try to fetch from cache first
        const cachedData = this.#cache.get(locationName);
        if (cachedData) {
            console.log(`Cache hit for ${locationName}`);
            return cachedData as Location;
        }

        const response = await fetch(`${PokeAPI.baseURL}/location-area/${locationName}`);
        if (!response.ok) {
            throw new Error(`Failed to fetch location: ${response.statusText}`);
        }
        
        const data: Location = await response.json();
        //! Add to cache before returning
        this.#cache.add(locationName, data);
        return data;
    }

    async fetchPokemon(pokemonName: string): Promise<Pokemon> {
        //! Try to fetch from cache first
        const cachedData = this.#cache.get(pokemonName);
        if (cachedData) {
            console.log(`Cache hit for ${pokemonName}`);
            return cachedData as Pokemon;
        }
        const response = await fetch(`${PokeAPI.baseURL}/pokemon/${pokemonName}`);
        if (!response.ok) {
            throw new Error(`Failed to fetch pokemon: ${response.statusText}`);
        }
        const data: Pokemon = await response.json();
        //! Add to cache before returning
        this.#cache.add(pokemonName, data);
        return data;
    }
}

export type ShallowLocations = {
    count: number;
    next: string | null;
    previous: string | null;
    results: { name: string; url: string }[];
};

export type Location = {
    pokemon_encounters: Array<{
        pokemon: {
            name: string
        }
    }>
};

export type Pokemon = {
    name: string;
    base_experience: number;
    height: number;
    weight: number;
    stats: Array<{
        base_stat: number
        effort: number
        stat: {
            name: string
            url: string
        }
    }>
    types: Array<{
        slot: number
        type: {
            name: string
            url: string
        }
    }>
}