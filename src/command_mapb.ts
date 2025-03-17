import { State } from "./state.js";

export async function commandMapb(state: State) {
  if (!state.prevLocationsURL) {
    throw new Error("you're on the first page");
  }
  const { next, previous, results } = await state.pokeapi.fetchLocations(
    state.prevLocationsURL
  );
  for (const location of results) {
    console.log(`${location.name}`);
  }
  state.nextLocationsURL = next;
  state.prevLocationsURL = previous;
}
