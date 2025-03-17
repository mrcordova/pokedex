import { State } from "./state.js";

export async function commandExit(state: State) {
  process.stdout.write("Closing the Pokedex... Goodbye!\n");
  state.readline.close();
  process.exit(0);
}
