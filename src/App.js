import React from "react";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import "typeface-roboto";
import Jumbotron from "./components/Jumbotron";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Jumbotron />
    </div>
  );
}

export default App;
