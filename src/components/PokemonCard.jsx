import Card from "react-bootstrap/Card";

const PokemonCard = ({ id, name }) => {
  return (
    <Card className="pokemon-card" key={id}>
      <Card.Header>Pokemon ID: {id}</Card.Header>
      <Card.Img variant="top" src="https://via.placeholder.com/350x150" />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>Description goes here.</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default PokemonCard;
