import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/PriceCard.css";

export class PriceCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      price: "",
      features: {},
    };
  }

  render() {
    return (
      <div id="priceCard">
        <p>SHARED HOSTING</p>
        <p>
          STARTING <span translate="yes">$9</span> PER MONTH
        </p>
        <p>
          <button>Hello</button>
        </p>
        <p>Unlimited projects</p>
        <p>24/7 support</p>
        <p>Personal use</p>
        <p>Unlimited projects</p>
        <p>24/7 support</p>
      </div>
    );
  }
}

export default PriceCard;
