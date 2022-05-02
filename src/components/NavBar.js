import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { Link as RouterLink } from "react-router-dom";
import { Link } from "@mui/material";
export default function NavBar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Link component={RouterLink} color="white" underline="none" to="/">
          <Button color="inherit">Home</Button>
        </Link>
        <Link component={RouterLink} color="white" underline="none" to="/add">
          <Button color="inherit">Add Superhero</Button>
        </Link>
        <Link component={RouterLink} color="white" underline="none" to="/login">
          <Button color="inherit">Login</Button>
        </Link>
        <Link
          component={RouterLink}
          color="white"
          underline="none"
          to="/logout"
        >
          <Button color="inherit">Logout</Button>
        </Link>
      </Toolbar>
    </AppBar>
  );
}
