const SuperheroData = (props) => {
  const superhero = props.superhero;
  return (
    <div>
      <h2>{superhero.name}</h2>
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
