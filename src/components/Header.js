import React, { useState } from "react";
import logo from "../assets/logo/LogoNatural.svg";
import { Navbar, Nav, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "./styles/Header.css";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Container>
      <Row>
        <Navbar expand="lg" bg="none" variant="light" className="navbar">
          <Col xs={12} sm={6} className="d-flex align-items-center">
            <Navbar.Toggle aria-controls="navbar-nav" />
            <Navbar.Collapse id="navbar-nav">
              <Nav className="ml-auto mr-auto container">
                <Nav.Link as={Link} to="/" className="fs-3 text-white p-5" active>
                  Inicio
                </Nav.Link>
                <Nav.Link as={Link} to="/nosotros" className="fs-3 text-white p-5">
                  Nosotros
                </Nav.Link>
                <Nav.Link as={Link} to="/productos" className="fs-3 text-white p-5">
                  Productos
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Col>
          <Col xs={12} sm={6} className="d-flex align-items-center justify-content-end mx-5 my-2">
            <Navbar.Brand href="/">
              <img
                src={logo}
                alt="Logo Natural Duos'x"
                height="130"
                width="190"
                className="img-fluid"
              />
            </Navbar.Brand>
          </Col>
        </Navbar>
      </Row>
    </Container>
  );
}

export default Header;
