import { State } from "../state.js";

export async function commandHelp(state: State): Promise<void> {
    console.log(`Welcome to the Pokedex!`);
    console.log(`Usage:\n`);
    const commands = state.commandsRegistry
    for(const command in commands) {
        console.log(`${commands[command].name}: ${commands[command].description}`);
    }
}