import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/Footer.css";

export default function Footer() {
  return (
    <>
      <Container id="footer" fluid>
        <Row>
          <Col md={3} className="justify-content-center">
            <p> Support</p>
            <p>troideals@gmail.com</p>

            <p>
              <a
                href="https://m.facebook.com/story.php?story_fbid=119904586491000&id=105105011304291"
                target="_blank"
              >
                {" "}
                Facebook
              </a>
            </p>
            <p>
              <a
                href="https://www.instagram.com/p/CDOGUZIguSE/?igshid=x7wjk2ligs31"
                target="_blank"
              >
                {" "}
                Instagram
              </a>
            </p>
          </Col>

          <Col md={3}>
            <p>Services</p>
            <p></p>
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
