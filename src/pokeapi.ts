export class PokeAPI {
  private static readonly baseURL = "https://pokeapi.co/api/v2";

  constructor() {}

  async fetchLocations(pageURL?: string): Promise<ShallowLocations> {
    // implment this
    const url = pageURL || `${PokeAPI.baseURL}/location-area`;
    try {
      const res = await fetch(`${url}`);
      if (!res.ok) {
        throw new Error(`${res.status} ${res.statusText}`);
      }
      return res.json() as Promise<ShallowLocations>;
    } catch (error) {
      throw new Error(`Error fetching locations: ${(error as Error).message}`);
    }
  }

  async fetchLocation(locationName: string): Promise<Location> {
    // implement this
    const res = await fetch(`${PokeAPI.baseURL}${locationName}`);
    return res.json() as Promise<Location>;
  }
}

export type ShallowLocations = {
  count: number;
  next: string | null;
  previous: string | null;
  results: Location[];
};

export type Location = {
  // add properties here
  name: string;
  url: string;
};
