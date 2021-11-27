import { useEffect, useState } from "react";
import Context from '../context/Context';
import PropTypes from 'prop-types';
import { fetchAPI, fetchPokemonAPI } from '../utils';

function Provider({ children }) {
  const [category, setCategory] = useState([]);
  const [data, setData] = useState([]);
  const [option, setOption] = useState('ability');
  const [pokemons, setPokemons] = useState([]);

  const contextValues = {
    category,
    setCategory,
    data,
    setData,
    option,
    setOption,
    pokemons,
    setPokemons,
  }

  const fetchCategory = async () => {
    const response = await fetchAPI();
    setCategory(response);
  }

  const fetchPokemons = async () => {
      const response = await fetchPokemonAPI();
      setPokemons(response.results);
  }

  console.log(pokemons);

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
