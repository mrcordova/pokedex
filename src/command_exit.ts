import type { CLICommand } from "./command.js";

export function commandExit(_: Record<string, CLICommand>) {
  process.stdout.write("Closing the Pokedex... Goodbye!\n");
  process.exit(0);
}
