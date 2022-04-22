import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const DetailComponent = (props) => {
  const params = useParams();
  const id = params.id;
  const navigate = useNavigate();

  const [superhero, setSuperhero] = useState();

  useEffect(() => {
    const getSuperhero = async () => {
      let response = await fetch(`/superheroes/${id}`);
      let data = await response.json();
      // setTimeout(() => setSuperhero(data), 3000);
      setSuperhero(data);
    };

    getSuperhero();
  }, [id]);

  if (!superhero) {
    return <p>Loading Data . . .</p>;
  }

  // {"_id":"6262cccd37daf00ca1a4dac2","name":"Siri","superpowers":["Genius","M1"],"alterEgo":"Apple Assistant","durability":"The Woz","__v":0}
  return (
    <div
      style={{
        display: 'grid',
        gridTemplate: '2fr 3fr',
        borderColor: 'red',
        borderWidth: 2,
        borderStyle: 'solid',
      }}
    >
      <button onClick={() => navigate("/")}>GO TO LIST</button>
      <label>_id:</label> <span>{superhero._id}</span>
      <label>name:</label> <span>{superhero.name}</span>
      <label>superpowers:</label> <span>{superhero.superpowers}</span>
      <label>alterEgo:</label> <span>{superhero.alterEgo}</span>
      <label>durability:</label> <span>{superhero.durability}</span>
    </div>
  );
};

export default DetailComponent;
