const URL = 'https://pokeapi.co/api/v2/';

const fetchAPI = async () => {
 const data = await fetch(URL);
 const result = data.json();

 return result;
}

export default fetchAPI;
