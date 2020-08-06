import React, { Component } from "react";
import { Container, Carousel, Row, Col } from "react-bootstrap";
import Btn from "./Button";
export class Jumbotron extends Component {
  render() {
    return (
      <Container style={{ paddingTop: "10%" }}>
        <Carousel>
          <Carousel.Item>
            <Row>
              <Col>
                <h1 className="title-class">
                  PowerFul
                  <br /> HOSTING
                  <br /> Your dream <br />
                  website{" "}
                </h1>
                <Btn btnContent="hello" />
                <Btn btnContent="and hi" />
              </Col>
              <Col md={6}>
                <img
                  className="d-block w-100"
                  src="family.png"
                  alt="First slide"
                />
              </Col>
              {/* <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption> */}
            </Row>
          </Carousel.Item>
        </Carousel>
      </Container>
    );
  }
}

export default Jumbotron;
