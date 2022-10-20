import { useState, useEffect } from "react";
import { getIdFromUrl, formatName } from "./utils";
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
          return (
            <Card className="pokemon-card" key={id}>
              <Card.Header>Pokemon ID: {getIdFromUrl(url)}</Card.Header>
              <Card.Body>
                <Card.Title>{formatName(name)}</Card.Title>
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
