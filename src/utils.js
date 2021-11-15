export const fetchAPI = async () => {
  const URL = 'https://pokeapi.co/api/v2/';
  const data = await fetch(URL);
  const result = data.json();

  return result;
}

export const fetchPokemon = async () => {
  const URL = 'https://pokeapi.co/api/v2/pokemon/';
  const data = await fetch(URL);
  const result = data.json();

  return result;
}
