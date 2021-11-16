import { useEffect, useState } from "react";
import Context from '../context/Context';
import PropTypes from 'prop-types';
import { fetchAPI, fetchPokemonAPI } from '../utils';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [option, setOption] = useState('ability');
  const [pokemons, setPokemons] = useState([]);

  const contextValues = {
    data,
    setData,
    option,
    setOption,
    pokemons,
    setPokemons,
  }

  const fetchData = async () => {
    const response = await fetchAPI();
    setData(response);
  }

  const fetchPokemons = async () => {
    for (let i = 1; i < 10; i += 1) {
      const response = await fetchPokemonAPI(i);
      setPokemons([{...pokemons, response}]);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
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
