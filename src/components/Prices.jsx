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
          <PriceCard title="Starter" price="12.98" description="" />
          <PriceCard title="Advanced" price="11.66" />
          <PriceCard title="Champion" price="9.99" />
          <PriceCard title="Legend" price="8.33" />
        </Row>
      </Container>
    );
  }
}

export default Prices;
