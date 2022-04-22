import { Link } from "react-router-dom";

const SuperheroData = (props) => {
  const superhero = props.superhero;

  return (
    <div>
      <h2>
        <Link to={`/details/${superhero._id}`}>{superhero.name}</Link>
      </h2>
      <p>Alter Ego:</p>
      <p>{superhero.alterEgo}</p>
      <p>Superpowers:</p>
      <ul>
        {superhero.superpowers.map((superpower) => {
          return <li>{superpower}</li>;
        })}
      </ul>
      <p>Durability:</p>
      <p>{superhero.durability}</p>
    </div>
  );
};

export default SuperheroData;
