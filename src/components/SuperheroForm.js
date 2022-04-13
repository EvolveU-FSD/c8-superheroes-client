import React, { useState } from "react";

const SuperheroForm = (props) => {
  const [superpowers, setSuperpowers] = useState([]);
  const [name, setName] = useState("");
  const [alterEgo, setAlterEgo] = useState("");
  const [durability, setDurability] = useState("");
  const [superpowerToAdd, setSuperpowerToAdd] = useState("");
  const setShowModal = props.setShowModal;
  const addSuperpower = () => {
    setSuperpowers((curr) => {
      return [...curr, superpowerToAdd];
    });
  };
  const onFormSubmit = async () => {
    const newSuperhero = {
      name: name,
      alterEgo: alterEgo,
      durability: durability,
      superpowers: superpowers,
    };
    const data = JSON.stringify(newSuperhero);
    console.log(`creating new superhero: ${data}`);
    const response = await fetch("/superheroes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: data,
    });
    if (response.status === 200) {
      console.log("success");
      setShowModal(false);
    } else {
      alert("error creating superhero");
    }
  };
  return (
    <div>
      <h2>Add New Superhero</h2>
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <br />
        <label>Alter Ego:</label>
        <input
          type="text"
          value={alterEgo}
          onChange={(event) => {
            setAlterEgo(event.target.value);
          }}
        />
        <br />

        <label>Durability:</label>
        <input
          type="text"
          value={durability}
          onChange={(event) => {
            setDurability(event.target.value);
          }}
        />
        <br />

        <label>Superpowers:</label>
        <ul>
          {superpowers.map((superpower, index) => {
            return <li>{superpower}</li>;
          })}
        </ul>
        <input
          type="text"
          value={superpowerToAdd}
          onChange={(event) => {
            setSuperpowerToAdd(event.target.value);
          }}
        />
        <button onClick={addSuperpower}>Add Superpower</button>
        <br />
        <button onClick={onFormSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default SuperheroForm;
