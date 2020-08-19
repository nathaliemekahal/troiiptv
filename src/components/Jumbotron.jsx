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
              <Col style={{ height: "350px" }}>
                <h1 className="title-class">
                  IPTV
                  <br /> By
                  <br /> TROI Tv
                </h1>
                {/* <Btn btnContent="hello" />
                <Btn btnContent="and hi" /> */}
              </Col>
              <Col md={6}>
                <img
                  className="d-block w-100"
                  src="servers.png"
                  alt="First slide"
                  width="500px"
                  className="imgClass"
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
          <Carousel.Item>
            <Row>
              <Col style={{ height: "350px" }}>
                <h1 className="title-class">
                  IPTV
                  <br /> By
                  <br /> TROI Tv
                </h1>
                {/* <Btn btnContent="hello" />
                <Btn btnContent="and hi" /> */}
              </Col>
              <Col md={6}>
                <div className="features-wrapper">
                  <h3 className="features">
                    <svg
                      width="1em"
                      height="1em"
                      viewBox="0 0 16 16"
                      class="bi bi-star-fill"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      className="mr-3"
                      style={{ color: "#25E1ED" }}
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                    Get Access to 12000+ Channels Albanian and International
                    Channels
                  </h3>
                </div>
              </Col>
              {/* <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption> */}
            </Row>
          </Carousel.Item>
          <Carousel.Item>
            <Row>
              <Col style={{ height: "350px" }}>
                <h1 className="title-class">
                  IPTV
                  <br /> By
                  <br /> TROI Tv
                </h1>
                {/* <Btn btnContent="hello" />
                <Btn btnContent="and hi" /> */}
              </Col>
              <Col md={6}>
                <div className="features-wrapper">
                  <h3 className="features">
                    <svg
                      width="1em"
                      height="1em"
                      viewBox="0 0 16 16"
                      class="bi bi-star-fill"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      className="mr-3"
                      style={{ color: "#25E1ED" }}
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                    Watch your favorite channels on your mobile phone, computer
                    or television
                  </h3>
                </div>
              </Col>
              {/* <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption> */}
            </Row>
          </Carousel.Item>
          <Carousel.Item>
            <Row>
              <Col style={{ height: "350px" }}>
                <h1 className="title-class">
                  IPTV
                  <br /> By
                  <br /> TROI Tv
                </h1>
                {/* <Btn btnContent="hello" />
                <Btn btnContent="and hi" /> */}
              </Col>
              <Col md={6}>
                <div className="features-wrapper">
                  <h3 className="features">
                    <svg
                      width="1em"
                      height="1em"
                      viewBox="0 0 16 16"
                      class="bi bi-star-fill"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      className="mr-3"
                      style={{ color: "#25E1ED" }}
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                    Stop overpaying for your cable and get our services now for
                    better prices!!
                  </h3>
                </div>
              </Col>
              {/* <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption> */}
            </Row>
          </Carousel.Item>
          <Carousel.Item>
            <Row>
              <Col style={{ height: "350px" }}>
                <h1 className="title-class">
                  IPTV
                  <br /> By
                  <br /> TROI Tv
                </h1>
                {/* <Btn btnContent="swds" />
                <Btn btnContent="and hi" /> */}
              </Col>
              <Col md={6}>
                <div className="features-wrapper">
                  <h3 className="features">
                    <svg
                      width="1em"
                      height="1em"
                      viewBox="0 0 16 16"
                      class="bi bi-star-fill"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      className="mr-3"
                      style={{ color: "#25E1ED" }}
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                    Enjoy a 24/7 customer service. Don't overthink contact us
                    and get your 24 hours free trial NOW!!
                  </h3>
                </div>
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
