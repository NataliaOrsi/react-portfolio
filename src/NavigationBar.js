import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { Nav, Navbar, NavDropdown, Container } from "react-bootstrap";

const lngs = {
  en: { flag: "🇺🇸" },
  pt: { flag: "🇧🇷" },
};

export default function NavigationBar() {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState("🌎");
  return (
    <Navbar className="NavigationBar" expand="lg">
      <Container fluid>
        <Navbar.Brand className="flex-grow-1" href="/">
          Natalia de M. O. Vieira
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="flex-grow-0">
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
              {t("navBar.link1")}
            </NavLink>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                isActive ? "active-link" : "normal-link"
              }
            >
              {t("navBar.link2")}
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "active-link" : "normal-link"
              }
            >
              {t("navBar.link3")}
            </NavLink>
            <NavDropdown
              className="justify-content-end language-button"
              title={language}
              id="basic-nav-dropdown"
            >
              {Object.keys(lngs).map((lng) => (
                <NavDropdown.Item
                  key={lng}
                  style={{
                    fontWeight:
                      i18n.resolvedLanguage === lng ? "bold" : "normal",
                  }}
                  type="submit"
                  onClick={() => {
                    i18n.changeLanguage(lng);
                    setLanguage(lngs[lng].flag);
                  }}
                >
                  {lngs[lng].flag}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
