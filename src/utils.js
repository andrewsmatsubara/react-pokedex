export const fetchAPI = async () => {
  const URL = 'https://pokeapi.co/api/v2/';
  const data = await fetch(URL);
  const result = data.json();

  return result;
}

export const fetchPokemonAPI = async (id) => {
  const URL = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const data = await fetch(URL);
  const result = data.json();

  return result;
}
