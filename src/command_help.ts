import type { CLICommand } from "./command.js";

export function commandHelp(commands: Record<string, CLICommand>) {
  process.stdout.write("\nWelcome to the Pokedex!\n");
  process.stdout.write("Usage:\n\n");
  for (const command of Object.values(commands)) {
    process.stdout.write(`${command.name}: ${command.description}\n`);
  }
  process.stdout.write("\n");
}
