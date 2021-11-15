import { useEffect, useState } from "react";
import Context from '../context/Context';
import PropTypes from 'prop-types';
import fetchAPI from '../utils';

function Provider({ children }) {
  const [data, setData] = useState([]);

  const contextValues = {
    data,
    setData,
  }

  const fetchData = async () => {
    const response = await fetchAPI();
    setData(response);
    console.log(response);
  }

  useEffect(() => {
    fetchData();
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
