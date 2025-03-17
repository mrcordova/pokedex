// import type { CLICommand } from "./command.js";
import { State } from "./state.js";

export function commandHelp(state: State) {
  const { cmds: commands } = state;
  process.stdout.write("\nWelcome to the Pokedex!\n");
  process.stdout.write("Usage:\n\n");
  for (const command of Object.values(commands)) {
    process.stdout.write(`${command.name}: ${command.description}\n`);
  }
  process.stdout.write("\n");
}
