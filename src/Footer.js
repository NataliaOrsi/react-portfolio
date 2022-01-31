import React from "react";

export default function Footer() {
  return (
    <footer className="Footer text-center pt-3">
      <div className="social-links mb-3">
        <a
          href="https://github.com/NataliaOrsi"
          target="_blank"
          rel="noreferrer"
          title="GitHub"
        >
          <i className="fab fa-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/nataliaorsi155/"
          target="_blank"
          rel="noreferrer"
          title="Linkedin"
        >
          <i className="fab fa-linkedin"></i>
        </a>
        <a
          href="mailto:naty.m.orsi@gmail.com"
          target="_blank"
          rel="noreferrer"
          title="Email"
        >
          <i className="far fa-envelope"></i>
        </a>
      </div>
      <small>
        This website was coded by Natalia de Mesquita Orsi Vieira and is
        open-sourced in{" "}
        <a
          href="https://github.com/NataliaOrsi/react-portfolio"
          className="coder-info"
          title="Coder Github"
        >
          GitHub
        </a>
      </small>
    </footer>
  );
}
