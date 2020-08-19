import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/Footer.css";

export default function Footer() {
  return (
    <>
      <Container id="footer" fluid>
        <Row sm={1} md={2}>
          <Col md={3} className="justify-content-center">
            <p> Support</p>
            <p> Available 24/7</p>
            <p>taloniptv@outlook.com</p>

            <p>
              <a href="https://www.instagram.com/tvtalon/" target="_blank">
                {" "}
                Instagram
              </a>
            </p>
          </Col>

          <Col md={3}>
            <p>Services</p>
            <p>Monthly Plan</p>
            <p>Two Months Plan</p>
            <p>Six Months Plan</p>
            <p>Yearly Plan</p>
          </Col>
        </Row>
        <p>© 2020 All Rights Reserved.</p>
      </Container>
    </>
  );
}
