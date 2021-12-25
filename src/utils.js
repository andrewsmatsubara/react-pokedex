export const fetchAPI = async () => {
  const URL = 'https://pokeapi.co/api/v2/';
  const data = await fetch(URL);
  const result = data.json();

  return result;
}

export const fetchPokemonAPI = async () => {
  const URL = `https://pokeapi.co/api/v2/pokemon?limit=151`;
  const data = await fetch(URL);
  const result = data.json();
  return result;
}

export const fetchPokemonsInfo = async (url) => {
  const response = await fetch(url);
  const result = response.json();

  return result;
}
