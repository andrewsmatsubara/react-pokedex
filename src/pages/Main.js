import React, { useContext } from "react";
import Header from "../components/Header";
import Context from '../context/Context';

function Main() {
  const { data } = useContext(Context);

  return (
    <div>
      <Header />
      <h1>
        Página Principal
      </h1>
      {Object.keys(data).map((categories) => <button>{categories}</button>)}
    </div>
  )
}

export default Main;
