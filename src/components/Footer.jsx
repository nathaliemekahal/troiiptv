import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/Footer.css";

export default function Footer() {
  return (
    <>
      <Container id="footer" fluid>
        <Row sm={1} md={2}>
          <Col className="justify-content-center">
            <p> Support</p>
            <p>taloniptv@outlook.com</p>

            <p>
              <a
                href="https://www.facebook.com/TALON-TV-102791111541474"
                target="_blank"
              >
                {" "}
                Facebook
              </a>
            </p>
          </Col>

          <Col>
            <p>Services</p>
            <p>Monthly Plan</p>
            <p>Two Months Plan</p>
            <p>6 Months Plan</p>
            <p>Yearly Plan</p>
          </Col>
        </Row>
        <p>© 2020 All Rights Reserved.</p>
      </Container>
    </>
  );
}
