import React, { Component } from "react";
import { Container, Carousel, Row, Col } from "react-bootstrap";

export class Jumbotron extends Component {
  render() {
    return (
      <Container style={{ paddingTop: "10%" }}>
        <Carousel>
          <Carousel.Item>
            <Row>
              <Col>
                <h1 className="title-class">
                  PowerFul HOSTING Your dream website{" "}
                </h1>
              </Col>
              <Col md={6}>
                <img
                  className="d-block w-100"
                  src="http://placehold.jp/250x250.png"
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
