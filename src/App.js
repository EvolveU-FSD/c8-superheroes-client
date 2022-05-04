import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import DetailPage from "./pages/DetailPage";
import CreateSuperheroPage from "./pages/CreateSuperheroPage";
import HomePage from "./pages/HomePage";
import EditSuperheroPage from "./pages/EditSuperheroPage";
import NavBar from "./components/NavBar";
import Logout from "./components/Logout";
import LoginPage from "./pages/LoginPage";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  const [loggedInUser, setLoggedInUser] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUser = async () => {
      const response = await fetch("/auth/loggedInUser");
      const userData = await response.json();
      setLoggedInUser(userData);
      setLoading(false);
    };
    getUser();
  }, []);

  console.log(`logged in user is ${JSON.stringify(loggedInUser)}`);

  return (
    <div className="App">
      <header className="App-header">
        <NavBar loggedInUser={loggedInUser} />
      </header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/details/:id"
          element={<DetailPage loggedInUser={loggedInUser} />}
        />
        <Route
          path="/add"
          element={
            <PrivateRoute
              mustBeAgent
              loading={loading}
              loggedInUser={loggedInUser}
              element={<CreateSuperheroPage />}
            />
          }
        />
        <Route
          path="/edit/:id"
          element={
            <PrivateRoute
              loggedInUser={loggedInUser}
              loading={loading}
              element={<EditSuperheroPage />}
            />
          }
        />
        <Route
          path="/login"
          element={<LoginPage setLoggedInUser={setLoggedInUser} />}
        />
        <Route
          path="/logout"
          element={<Logout setLoggedInUser={setLoggedInUser} />}
        />
      </Routes>
    </div>
  );
}

export default App;
