import React, { Component } from "react";
import { Container } from "react-bootstrap";
import PriceCard from "./PriceCard";
import Header from "./Header";

export class Prices extends Component {
  render() {
    return (
      <Container id="prices" fluid>
        <p id="header">
          THIS IS <span>HEADING</span>{" "}
        </p>
        <p id="content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
          voluptatum neque facere, quasi ab possimus, dignissimos ipsa minima
          quia inventore totam hic sit repudiandae amet fuga cumque atque
          laborum. Ad!
        </p>
        <div>
          <PriceCard features={["abc", "def"]} />
          <PriceCard features={[]} />
          <PriceCard features={[]} />
        </div>
      </Container>
    );
  }
}

export default Prices;
