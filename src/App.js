import React, { useEffect, useState } from "react";
import "./App.css";
import SuperheroData from "./components/SuperheroData";
import SuperheroForm from "./components/SuperheroForm";

function App() {
  const [superheroList, setSuperheroList] = useState();
  const [showModal, setShowModal] = useState(false);
  console.log(`superheroList: ${JSON.stringify(superheroList)}`);
  useEffect(() => {
    getSuperheroList();
  }, []);

  const getSuperheroList = async () => {
    try {
      let response = await fetch("/superheroes");
      let superheroes = await response.json();
      console.log(`superheroes is:`, superheroes);
      return setSuperheroList(superheroes);
    } catch (ex) {
      console.log(ex);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Superheroes</h1>
      </header>
      {superheroList ? (
        superheroList.map((superhero, index) => {
          return <SuperheroData superhero={superhero} />;
        })
      ) : (
        <div>Loading...</div>
      )}
      <button
        onClick={() => {
          setShowModal(true);
        }}
      >
        Add New Superhero
      </button>
      {showModal && <SuperheroForm setShowModal={setShowModal} />}
    </div>
  );
}

export default App;
