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
            <Nav>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "active-link" : "normal-link"
                  }
                >
                  Home
                </NavLink>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive ? "active-link" : "normal-link"
                  }
                >
                  About
                </NavLink>
                <NavLink
                  to="/projects"
                  className={({ isActive }) =>
                    isActive ? "active-link" : "normal-link"
                  }
                >
                  Portfolio
                </NavLink>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive ? "active-link" : "normal-link"
                  }
                >
                  Contact
                </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}