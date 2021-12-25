import { useEffect, useState } from "react";
import Context from '../context/Context';
import PropTypes from 'prop-types';
import { fetchAPI, fetchPokemonAPI } from '../utils';
import { useLocation } from "react-router-dom";

function Provider({ children }) {
  const [category, setCategory] = useState([]);
  const [data, setData] = useState([]);
  const [option, setOption] = useState('ability');
  const [pokemons, setPokemons] = useState([]);
  const [id, setId] = useState();
  const [picture, setPicture] = useState();
  const [name, setName] = useState();
  const [finalPokemon, setFinalPokemon] = useState();
  let [aux, setAux] = useState();
  
  const contextValues = {
    id,
    setId,
    picture,
    setPicture,
    name,
    setName,
    category,
    setCategory,
    data,
    setData,
    option,
    setOption,
    pokemons,
    setPokemons,
    finalPokemon,
    setFinalPokemon,
    aux,
    setAux
  }

  const location = useLocation();
  console.log(location.pathname);
  
  const fetchCategory = async () => {
    const response = await fetchAPI();
    setCategory(response);
  }
  
  const fetchPokemons = async () => {
    const response = await fetchPokemonAPI();
    setPokemons(response.results);

    const pokeURL = response.results.map((pokemon) => fetch(pokemon.url).then((url) => url.json()));

    setFinalPokemon(pokeURL);

    return finalPokemon;
  }

  useEffect(() => {
    fetchCategory();
    fetchPokemons();
  }, []);

  return (
    <Context.Provider value={contextValues}>
      {children}
    </Context.Provider>

  )
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Provider;
