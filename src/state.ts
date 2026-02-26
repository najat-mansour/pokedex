import { createInterface, type Interface } from "readline";
import { PokeAPI, Pokemon } from "./pokeapi.js";
import { commandExit } from "./commands/command_exit.js";
import { commandHelp } from "./commands/command_help.js";
import { commandMap } from "./commands/command_map.js";
import { commandMapb } from "./commands/command_mapb.js";
import { commandExplore } from "./commands/command_explore.js";
import { commandCatch } from "./commands/command_catch.js";
import { commandInspect } from "./commands/command_inspect.js";
import { commandPokedex } from "./commands/command_pokedex.js";

export type CLICommand = {
  name: string;
  description: string;
  callback: (state: State, ...inputs: string[]) => Promise<void>;
};

export type State = {
    rl: Interface;
    commandsRegistry: Record<string, CLICommand>;
    pokeAPI: PokeAPI; 
    nextLocationsURL: string | null;
    prevLocationsURL: string | null;
    pokedex: Record<string, Pokemon>; 
};

export function initState(): State {
    const rl = createInterface({
      input: process.stdin,
      output: process.stdout,
      prompt: "Pokedex>",
    });

    const commandsRegistry: Record<string, CLICommand> = {
        exit: {
            name: "exit",
            description: "Exit the pokedex",
            callback: commandExit
        },
        help: {
            name: "help",
            description: "Displays a help message",
            callback: commandHelp
        },
        map: {
            name: "map",
            description: "Displays a list of locations",
            callback: commandMap
        },
        mapb: {
            name: "mapb",
            description: "Displays a list of locations (backwards)",
            callback: commandMapb
        },
        explore: {
            name: "explore",
            description: "Explore a location",
            callback: commandExplore
        },
        catch: {
            name: "catch",
            description: "Catch a pokemon",
            callback: commandCatch
        },
        inspect: {
            name: "inspect",
            description: "Inspect a pokemon in your pokedex",
            callback: commandInspect
        },
        pokedex: {
            name: "pokedex",
            description: "List all pokemon in your pokedex",
            callback: commandPokedex
        }
    };

    const pokeAPI = new PokeAPI();

    return {
        rl, 
        commandsRegistry,
        pokeAPI,
        nextLocationsURL: null,
        prevLocationsURL: null,
        pokedex: {}
    };
}