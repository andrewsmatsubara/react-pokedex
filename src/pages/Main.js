import React, { useContext, useState } from "react";
import Header from "../components/Header";
import Context from '../context/Context';

function Main() {
  const { data } = useContext(Context);
  const [option, setOption] = useState();

  const handleChange = ({ target }) => {
    setOption(target.value);
  }

  return (
    <div>
      <Header />
      <h1>
        Página Principal
      </h1>
      <select value={option} onChange={handleChange}>
        {Object.keys(data).map((categories) => <option key={categories}>{categories}</option>)}
      </select>
      <button type="button">Buscar</button>
    </div>
  )
}

export default Main;
