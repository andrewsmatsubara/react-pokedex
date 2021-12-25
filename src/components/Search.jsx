import React, { useContext } from "react";
import Context from "../context/Context";

function Search() {
  const { category, option, setOption } = useContext(Context);

  const handleChange = ({ target }) => {
    setOption(target.value);
  }
  return (
    <div>
      <select value={option} onChange={handleChange}>
        {Object.keys(category).map((categories) => <option key={categories}>{categories}</option>)}
      </select>
      <button type="button">Buscar</button>
    </div>
  )
}

export default Search;
