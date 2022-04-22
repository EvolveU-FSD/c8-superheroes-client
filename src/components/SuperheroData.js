const SuperheroData = (props) => {
  const superhero = props.superhero;
  const changeDetails = props.changeDetails;

  return (
    <div>
      <h2>
        <a href="#" onClick={() => changeDetails(superhero._id)}>{superhero.name}</a>
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
