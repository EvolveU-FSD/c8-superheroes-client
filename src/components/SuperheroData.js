import { Card, Link, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import BlueBackground from "./BlueBackground";
const SuperheroData = (props) => {
  const superhero = props.superhero;

  return (
    <Link
      underline="none"
      color="white"
      component={RouterLink}
      to={`/details/${superhero._id}`}
    >
      <BlueBackground>
        <Card sx={{ m: 2, p: 2, maxWidth: 500, height: "90%" }}>
          <Typography variant="h4">{superhero.name}</Typography>
          <Typography>Alter Ego:{superhero.alterEgo}</Typography>
          <Typography>Superpowers:</Typography>
          <ul>
            {superhero.superpowers.map((superpower) => {
              return <li>{superpower}</li>;
            })}
          </ul>
          <Typography>Durability: {superhero.durability}</Typography>
        </Card>
      </BlueBackground>
    </Link>
  );
};

export default SuperheroData;
