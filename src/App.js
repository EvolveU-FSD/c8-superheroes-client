import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import DetailComponent from "./components/DetailComponent";
import SuperheroForm from "./components/SuperheroForm";
import SuperheroList from "./components/SuperheroList";

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <h1>NAV BAR GOES HERE</h1>
      </header>
      <Routes>
        <Route path='/' element={<SuperheroList />} />
        <Route path='/details/:id' element={<DetailComponent />} />
        <Route path='/add' element={<SuperheroForm />} />
      </Routes>
    </div>
  );
}

export default App;
