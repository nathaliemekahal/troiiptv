import React, { Component } from "react";
import { Container } from "react-bootstrap";
import PriceCard from "./PriceCard";
import { Element } from "react-scroll";

export class Prices extends Component {
  render() {
    return (
      <React.Fragment>
        <Element id="priceselement" name="priceselement">
          <Container id="prices" fluid>
            <p id="content">
              {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
          voluptatum neque facere, quasi ab possimus, dignissimos ipsa minima
          quia inventore totam hic sit repudiandae amet fuga cumque atque
          laborum. Ad! */}
            </p>
            <div>
              <PriceCard title="Starter" price="12.98" description="" />
              <PriceCard title="Advanced" price="11.66" />
              <PriceCard title="Champion" price="9.99" />
              <PriceCard title="Legend" price="8.33" />
            </div>
          </Container>
        </Element>
      </React.Fragment>
    );
  }
}

export default Prices;
