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

// import { useState, useEffect } from "react";
// import "./App.css";
// const baseUrl = "https://pokeapi.co/api/v2/pokemon";
// function App() {
//   const [pokemonList, setPokemonList] = useState([]);
//   const createPokemonObject = (results) => {
//     results.forEach(async (pokemon) => {
//       const response = await fetch(`${baseUrl}/${pokemon.name}`);
//       const pokemonStats = await response.json();
//       // console.log("pokemon name", pokemonStats);
//       const { sprites, name } = pokemonStats;
//       const { front_default } = sprites;
//       setPokemonList((prev) => [...prev, { name, img: front_default }]);
//     });
//   };
//   const getAllPokemons = async () => {
//     const response = await fetch(`${baseUrl}?limit=20`);
//     const data = await response.json();
//     // console.log("allPokemons", data);
//     createPokemonObject(data.results);
//   };
//   useEffect(() => {
//     getAllPokemons();
//   }, []);
//   console.log("pokemonList", pokemonList);
//   return <div className="App"></div>;
// }

// export default App;
