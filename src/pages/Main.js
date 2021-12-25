import { useContext } from "react";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Header from "../components/Header";
// import Search from "../components/Search";
import Context from "../context/Context";

function Main() {
  const { finalPokemon } = useContext(Context);

  return (
    <div className="main-page">
      <Header />
      <h1>
        Página Principal
      </h1>
      {/* <Search /> */}
      <div className='card-mosaic'>
      {console.log(finalPokemon)}
      {finalPokemon === undefined ? <h1>Loading...</h1> : Object.values(finalPokemon).map((pokemon) => <Card key={pokemon.id} id={pokemon.id} name={pokemon.name} img={pokemon.sprites} /> )} 
      </div>
    <Footer />
    </div>
  )
}

export default Main;
