import { State } from "./state.js";

export function cleanInput(input: string): string[] {
  const trimmedString = input.trim();
  return trimmedString.split(/\s+/); //! Using regex to handle multiple spaces
}

export function startRepl(state: State) {
  const { rl, commandsRegistry } = state;
  rl.prompt();

  rl.on("line", (line) => {
    const inputs = cleanInput(line);
    if (inputs.length === 0) {
      rl.prompt();
      return;
    }
    
    const command = commandsRegistry[inputs[0]];
    if (command)
      command.callback(state, ...inputs.slice(1));
    else 
      console.log(`Unknown command: ${inputs[0]}`);

    rl.prompt();
  });
}