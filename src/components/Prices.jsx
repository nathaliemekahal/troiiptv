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
          <PriceCard
            title="One month plan"
            // span="One month plan"
            price="12.98"
            description=""
          />
          <PriceCard title="Three months plan" price="34.99" />
          <PriceCard title="Six months plan" price="59.99" />
          <PriceCard title="One year plan" price="99.99" />
        </Row>
      </Container>
    );
  }
}

export default Prices;
