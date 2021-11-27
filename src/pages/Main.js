import { useContext } from "react";
import Card from "../components/Card";
import Header from "../components/Header";
import Search from "../components/Search";
import Context from "../context/Context";

function Main() {
  const { pokemons } = useContext(Context);

  return (
    <div>
      <Header />
      <h1>
        Página Principal
      </h1>
      <Search />
      <div className='card-mosaic'>
      {pokemons === undefined ? <h1>Loading...</h1> : Object.values(pokemons).map((pokemon) => <Card key={pokemon.name} url={pokemon.url} /> )}
      </div>
    <button>Carregar mais</button>
    </div>
  )
}

export default Main;
