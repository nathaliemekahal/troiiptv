import React, { Component } from "react";
import { Container, Row } from "react-bootstrap";
import PriceCard from "./PriceCard";
import { Element } from "react-scroll";

export class Prices extends Component {
  render() {
    return (
      <Container id="prices" fluid>
        <p id="content">
          {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
          voluptatum neque facere, quasi ab possimus, dignissimos ipsa minima
          quia inventore totam hic sit repudiandae amet fuga cumque atque
          laborum. Ad! */}
        </p>
        <Row className="no-gutters">
          <PriceCard title="Three Months" price="25" />
          <PriceCard title="Six Months" price="35" />
          <PriceCard title="One Year" price="65" />
        </Row>
      </Container>
    );
  }
}

export default Prices;
