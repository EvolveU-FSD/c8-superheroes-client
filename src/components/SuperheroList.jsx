import React, { useEffect, useState } from "react";
import SuperheroData from "./SuperheroData";

const SuperheroList = () => {
  const [superheroList, setSuperheroList] = useState();
  useEffect(() => {
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
    getSuperheroList();
  }, []);

  return (
    <div>
      {superheroList ? (
        superheroList.map((superhero, index) => {
          return <SuperheroData superhero={superhero} />;
        })
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default SuperheroList;
