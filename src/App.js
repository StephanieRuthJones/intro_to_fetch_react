import { useState, useEffect } from "react";
import { getIdFromUrl, formatName } from "./utils";
import PokemonCard from "./components/PokemonCard";
import "./App.css";
const baseUrl = "https://pokeapi.co/api/v2/pokemon";
function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const getAllPokemons = async () => {
    const response = await fetch(`${baseUrl}?limit=20`);
    const data = await response.json();
    setPokemonList(data.results);
  };
  useEffect(() => {
    getAllPokemons();
  }, []);

  return (
    <div className="App">
      <main className="pokemon-cards-container">
        {pokemonList.map(({ name, url }) => {
          const id = getIdFromUrl(url);
          return (
            <PokemonCard key={id} id={id} name={formatName(name)} img={url} />
          );
        })}
      </main>
    </div>
  );
}

export default App;
