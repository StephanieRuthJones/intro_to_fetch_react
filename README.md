# Intro to Fetch in React

## Project Setup

1. In the project root, install dependencies with `npm i`
2. To run the project, use commande `npm start` and open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.
You may also see any lint errors in the console.

## Instructions

Follow the steps below to complete this challenge.

### Part I: Fetch and Display Pokemon in `App.js`

- [ ] Use the `useState` Hook to hold the fetched data which we will call `pokemonList`
- [ ] Create a `useEffect` Hook that fetches all **Pokemons** using the `baseUrl`
- [ ] Inside the `main` element, map over the `pokemonList` to create a card for each Pokemon object.
      Each card will be made using Bootstrap and will have the following format:

```
<Card className="pokemon-card" key={POKEMON ID}>
    <Card.Header>Pokemon ID: POKEMON ID GOES HERE</Card.Header>
    <Card.Img
        variant="top"
        src="https://via.placeholder.com/350x150"
    />
    <Card.Body>
        <Card.Title>POKEMON NAME GOES HERE</Card.Title>
        <Card.Text>Pokemon description WILL go here, but in a later step.</Card.Text>
    </Card.Body>
</Card>
```

### Part II: Refactor Card Code into Separate Component

- [ ] Create `components` folder in `src` directory
- [ ] Create `PokemonCard.jsx` file in `components folder`
- [ ] Create a function component in `PokemonCard.jsx` file by copy and pasting all `Card` code
- [ ] Import `PokemonCard.jsx` to `App.js`
- [ ] Set up `PokemonCard` in `App.js` and pass all props
- [ ] Check to make sure everything looks as expected when you run the app

### Part II (OPTIONAL CHALLENGE): Fetch Pokemon Images and Display in Pokemon Cards

- [ ] Read the [Pokemon API Docs](https://pokeapi.co/docs/v2) to figure out how you can use each Pokemon's name to fetch their images
- [ ] Refactor your app to set state as an array of Pokemon objects that include the pokemon's `id`, `name` and `image url`. State should look something like this:

```
[
    {
        id: 2,
        img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
        name: "ivysaur"
    }
]
```

- [ ] Refactor `App.js` and `PokemonCard.jsx` to use the updated `pokemonList` in state.

