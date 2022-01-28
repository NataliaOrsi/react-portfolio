import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";

// find out how to put the active in the Navbar.

export default function NavigationBar() {
    return (
      <Navbar className="NavigationBar" expand="lg">
        <Container fluid>
          <Navbar.Brand className="flex-grow-1" href="/">
            Natalia de M. O. Vieira
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="d-flex flex-grow-0">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/projects">Portfolio</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}