import { State } from "./state";

export async function commandExplore(state: State, ...arg: string[]) {
  if (arg.length == 0) {
    throw Error("usage: explore <area_name>");
  }
  const locationName = arg[0];
  const { pokemon_encounters } = await state.pokeapi.fetchLocation(
    locationName
  );
  console.log(`Exloring ${locationName}`);
  console.log("Found Pokemon:");
  for (const pokemon_encounter of pokemon_encounters) {
    console.log(`- ${pokemon_encounter.pokemon.name}`);
  }
}
