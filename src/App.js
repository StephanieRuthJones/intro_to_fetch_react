import { useState, useEffect } from "react";
import { getIdFromUrl, formatName } from "./utils";
import PokemonCard from "./components/PokemonCard";
import "./App.css";
const baseUrl = "https://pokeapi.co/api/v2/pokemon";
function App() {
  const [pokemonList, setPokemonList] = useState([]);

  const createPokemonObject = (results) => {
    results.forEach(async (pokemon) => {
      const response = await fetch(`${baseUrl}/${pokemon.name}`);
      const pokemonStats = await response.json();
      const { id, sprites, name } = pokemonStats;
      const { front_default } = sprites;
      !pokemonList.includes(pokemon.name) &&
        setPokemonList((prev) => [...prev, { id, name, img: front_default }]);
    });
  };

  const getAllPokemons = async () => {
    const response = await fetch(`${baseUrl}?limit=20`);
    const data = await response.json();
    createPokemonObject(data.results);
  };

  useEffect(() => {
    getAllPokemons();
  }, []);

  return (
    <div className="App">
      <main className="pokemon-cards-container">
        {pokemonList.map((pokemon) => {
          const { id, name, img } = pokemon;
          return (
            <PokemonCard
              key={`${name}-${id}`}
              id={id}
              name={formatName(name)}
              img={img}
            />
          );
        })}
      </main>
    </div>
  );
}

export default App;
