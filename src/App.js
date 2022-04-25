import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import DetailPage from "./pages/DetailPage";
import CreateSuperheroPage from "./pages/CreateSuperheroPage";
import HomePage from "./pages/HomePage";
import EditSuperheroPage from "./pages/EditSuperheroPage";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>NAV BAR GOES HERE</h1>
      </header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/details/:id" element={<DetailPage />} />
        <Route path="/add" element={<CreateSuperheroPage />} />
        <Route path="/edit/:id" element={<EditSuperheroPage />} />
      </Routes>
    </div>
  );
}

export default App;
