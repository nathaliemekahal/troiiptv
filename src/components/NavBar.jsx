import React, { Component } from "react";
import { Navbar, Row, Col, Nav, Container } from "react-bootstrap";
import navData from "../data/Navlinks.json";
import { Link } from "react-scroll";

class NavBar extends Component {
  render() {
    return (
      <div aclassName="top-navbar-class">
        <Container>
          <Row className="navRow-class">
            <Col md={2} style={{}}>
              <div className="Logo-div-wrapper">
                <img width="150px " src="logopng.png" />
              </div>
            </Col>
            <Col md={8} style={{ display: "flex", justifyContent: "end" }}>
              {/* <Nav className="nav-ul-wrapper-class" style={{}}>
                {navData.length !== 0 &&
                  navData.map((navlink) => (
                    <Nav.Link href="#home">
                      {navlink.name.toUpperCase()}
                    </Nav.Link>
                  ))}
              </Nav> */}
            </Col>
            <Col md={2} style={{ display: "flex" }}>
              <Nav
                className="nav-ul-wrapper-class"
                style={{ flexWrap: "nowrap" }}
              >
                <Link
                  to="prices"
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={-120}
                  duration={500}
                  className="links"
                >
                  Plans
                </Link>
                {/* <Nav.Link href="#home">smth</Nav.Link> */}
              </Nav>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default NavBar;
