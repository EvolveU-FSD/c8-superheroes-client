import React, { useEffect, useState } from "react";

const SuperheroForm = (props) => {
  const [superpowers, setSuperpowers] = useState([]);
  const [name, setName] = useState("");
  const [alterEgo, setAlterEgo] = useState("");
  const [durability, setDurability] = useState("");
  const [superpowerToAdd, setSuperpowerToAdd] = useState("");
  const onFormSubmit = props.onFormSubmit;
  const initialValues = props.initialValues;
  const buttonText = props.buttonText;

  useEffect(() => {
    if (initialValues) {
      setName(initialValues.name);
      setAlterEgo(initialValues.alterEgo);
      setDurability(initialValues.durability);
      setSuperpowers(initialValues.superpowers);

      console.log(`initialValues is:`, initialValues);
    }
  }, [initialValues]);
  const addSuperpower = () => {
    setSuperpowers((curr) => {
      return [...curr, superpowerToAdd];
    });
  };

  return (
    <div>
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
        <button
          onClick={() =>
            onFormSubmit({
              name: name,
              superpowers: superpowers,
              alterEgo: alterEgo,
              durability: durability,
            })
          }
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default SuperheroForm;
