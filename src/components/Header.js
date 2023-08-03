import React, { useState, useEffect,useRef } from "react";
import logo from "../assets/logo/LogoNatural.png";
import { Navbar, Nav, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./styles/Header.css";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  let menuRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setIsMenuOpen(false);
       
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <Container fluid>
      <Row className="align-items-center mx-5 my-3">
        <Col
          xs={6}
          sm={6}
          md={4}
          lg={3}
          xl={2}
          className="d-flex align-items-center"
        >
          <Navbar
           ref={menuRef}
            id="navbar"
            expand="lg"
            className={`navbar ${isMenuOpen ? "show-navbar" : ""}`}
          >
            <Navbar.Toggle
              aria-controls="navbar-nav"
              onClick={() => {
                setIsMenuOpen(!isMenuOpen);
              }}
              className="navbar-toggler"
            />
            <Navbar.Collapse id="navbar-nav">
              <Nav className="ml-auto">
                <Nav.Link
                  as={Link}
                  to="/"
                  className="fs-3 text-white p-5 text-center"
                  active
                >
                  Inicio
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/nosotros"
                  className="fs-3 text-white p-5 text-center"
                >
                  Nosotros
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/productos"
                  className="fs-3 text-white p-5 text-center"
                >
                  Productos
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Col>
        <Col
          xs={6}
          sm={6}
          md={8}
          lg={9}
          xl={10}
          className="d-flex align-items-center justify-content-end"
        >
          <Navbar.Brand href="/" className="ml-auto">
            <img
              src={logo}
              alt="Logo Natural Duos'x"
              height="130"
              width="190"
              className="img-fluid"
            />
          </Navbar.Brand>
        </Col>
      </Row>
    </Container>
  );
}

export default Header;
