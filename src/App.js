import React from "react";
import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavBar from "./components/NavBar";
import Prices from "./components/Prices";
import "typeface-roboto";
import Jumbotron from "./components/Jumbotron";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <div style={{ backgroundColor: "#18133A ", paddingBottom: "100px" }}>
        <NavBar />
        <Jumbotron />
      </div>
      <Header title1="Check Out Awesome Plans, " title2="Order Now" />
      <Prices />
      <Footer />
    </div>
  );
}

export default App;
