import React, { useEffect, useState } from "react";
import "./App.css";
import SuperheroData from "./components/SuperheroData";
import superheroesList from "./superheroes.json";

function App() {
  const [data, setData] = useState();
  console.log(`superheroesList: ${JSON.stringify(superheroesList)}`);
  // useEffect(() => {
  //   getTimeFromServer();
  // }, []);

  const getTimeFromServer = async () => {
    try {
      let response = await fetch("/slow");
      let vals = await response.json();
      console.log(`vals is:`, vals);
      return setData(vals.currentTime);
    } catch (ex) {
      console.log(ex);
    }
  };
  let ironMan = {
    name: "Ironman",
    superpowers: ["Superhuman strength", "Invulnerability"],
    alterEgo: "Tony Stark",
    durability: "Indestructible",
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1>Superheroes</h1>
      </header>
      {superheroesList.map((superhero, index) => {
        if (index < 2) {
          return <SuperheroData superhero={superhero} />;
        } 
      })}
      More stuff
      {superheroesList.map((superhero, index) => {
        if (index >= 2) {
          return <SuperheroData superhero={superhero} />;
        }
      })}
    </div>
  );
}

export default App;
