import { useContext } from "react";
import Card from "../components/Card";
import Header from "../components/Header";
import Search from "../components/Search";
import Context from "../context/Context";

function Main() {
  const { pokemons } = useContext(Context);
  const { response } = pokemons;

  return (
    <div>
      <Header />
      <h1>
        Página Principal
      </h1>
      <Search />
      {console.log(pokemons)}
      {response === undefined ? <h1>Loading...</h1> : Object.values(response).map((pokemon) => <Card id={pokemon.response.id} /> )}
    </div>
  )
}

export default Main;
