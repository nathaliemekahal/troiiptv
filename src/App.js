import React from "react";
import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavBar from "./components/NavBar";

import "typeface-roboto";
import Jumbotron from "./components/Jumbotron";

function App() {
  return (
    <div className="App">
      <div style={{ backgroundColor: "#4450b0", paddingBottom: "100px" }}>
        <NavBar />
        <Jumbotron />
      </div>
    </div>
  );
}

export default App;
