import { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import "./App.css";
const baseUrl = "https://pokeapi.co/api/v2/pokemon";
function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const getAllPokemons = async () => {
    try {
      const response = await fetch(`${baseUrl}?limit=20`);
      const data = await response.json();
      setPokemonList(data.results);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAllPokemons();
  }, []);

  return (
    <div className="App">
      <main className="pokemon-cards-container">
        {pokemonList.map((pokemon) => {
          const { name, url } = pokemon;
          const id = url.split("/")[6];
          const formattedName = name[0].toUpperCase() + name.slice(1);
          return (
            <Card className="pokemon-card" key={id}>
              <Card.Header>Pokemon ID: {id}</Card.Header>
              <Card.Img
                variant="top"
                src="https://via.placeholder.com/350x150"
              />
              <Card.Body>
                <Card.Title>{formattedName}</Card.Title>
                <Card.Text>Description goes here.</Card.Text>
              </Card.Body>
            </Card>
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
