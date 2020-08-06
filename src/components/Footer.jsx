import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/Footer.css";

export default function Footer() {
  return (
    <>
      <Container id="footer" fluid>
        <Row>
          <div>
            <p> Support</p>
            <p>Address</p>
            <p>Email</p>
            <p>Phone Number</p>
            <p>
              <a href=""> Facebook</a>
            </p>
          </div>
          <div>
            <p> Company</p>
            <p>
              <a href="">Home</a>
            </p>
            <p>
              <a href="">Plans</a>
            </p>
            <p>
              <a href="">Contact</a>
            </p>
          </div>
          <div>
            <p>Services</p>
            <p>Monthly Plan</p>
            <p>Two Months Plan</p>
            <p>6 Months Plan</p>
            <p>Yearly Plan</p>
          </div>
        </Row>
        <p>© 2020 All Rights Reserved.</p>
      </Container>
    </>
  );
}
