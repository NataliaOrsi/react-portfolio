import React from "react";
import { NavLink } from "react-router-dom";
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
            <Nav activeKey="1">
              <Nav.Link eventKey="1" href="/">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "active-link" : "normal-link"
                  }
                >
                  Home
                </NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive ? "active-link" : "normal-link"
                  }
                >
                  About
                </NavLink>
              </Nav.Link>
              <Nav.Link href="/projects">
                <NavLink
                  to="/projects"
                  className={({ isActive }) =>
                    isActive ? "active-link" : "normal-link"
                  }
                >
                  Portfolio
                </NavLink>
              </Nav.Link>
              <Nav.Link href="/contact">
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive ? "active-link" : "normal-link"
                  }
                >
                  Contact
                </NavLink>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}