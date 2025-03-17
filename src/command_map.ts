import { State } from "./state.js";

export async function commandMap(state: State) {
  //   let pageURL = state.nextLocationsURL ?? "/location-area";
  const { next, previous, results } = await state.pokeapi.fetchLocations(
    state.nextLocationsURL || undefined
  );
  console.log(results);
  for (const location of results) {
    console.log(`${location.name}`);
  }
  state.nextLocationsURL = next;
  state.prevLocationsURL = previous;
}
