import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/PriceCard.css";
import { Col } from "react-bootstrap";

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
      <Col md={3} id="priceCard">
        <h3 className="priceTitle">{this.props.title}</h3>
        <p>
          STARTING <span translate="yes">${this.props.price}</span> PER MONTH
        </p>
        <p>
          {/* <button className="typeform-share button">Hello</button> */}
          {/* <a
            class="typeform-share button"
            href="https://taloniptv.typeform.com/to/R1AxEVlD"
            data-mode="popup"
            target="_blank"
          > */}
          {/* Fill request form
          </a> */}
        </p>
        <p>24/7 Customer Support</p>
        <p>VOD Available</p>
        <p>4500 channels</p>
        <p>Smart tv</p>
        <p>Android</p>
        <p>Enigma</p>
        <p>Mag</p>
        <p>IOS</p>
      </Col>
    );
  }
}

export default PriceCard;
