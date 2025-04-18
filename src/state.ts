import { createInterface, Interface } from "readline";
import { stdin, stdout } from "process";
import { getCommands } from "./commands.js";
import { PokeAPI } from "./pokeapi.js";
import { Pokemon } from "./pokemon.js";

export type CLICommand = {
  name: string;
  description: string;
  callback: (state: State, ...args: string[]) => Promise<void>;
};

export type State = {
  readline: Interface;
  cmds: Record<string, CLICommand>;
  pokedex: Record<string, Pokemon>;
  pokeapi: PokeAPI;
  nextLocationsURL: string | null;
  prevLocationsURL: string | null;
};

export function initState(cacheInterval: number): State {
  const rl = createInterface({
    input: stdin,
    output: stdout,
    prompt: "Pokedex > ",
  });
  const pokeapi = new PokeAPI(cacheInterval);
  return {
    readline: rl,
    cmds: getCommands(),
    pokedex: {},
    pokeapi,
    nextLocationsURL: "",
    prevLocationsURL: "",
  };
}
