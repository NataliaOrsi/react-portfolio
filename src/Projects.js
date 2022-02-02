import React from "react";
import Patchwork from "./images/patchwork.png";
import Dictionary from "./images/dictionary.png";
import WeatherApp from "./images/Weather_app.png";
import PortfolioDraft from "./images/portfolio_draft.png"

export default function Projects() {
  return (
    <section className="Projects">
      <div className="container mt-5">
        <div className="row">
          <div className="col-sm-9 p-3">
            <h1 className="mb-5">Take a look at what I've been working on!</h1>
          </div>
        </div>
        <div className="row portfolio-content">
          <a
            href="https://clever-jepsen-29dfd2.netlify.app/projects"
            target="_blank"
            rel="noreferrer"
            className="col-lg-6 portfolio-images"
          >
            <img src={Patchwork} alt="Patchwork Website" />
          </a>
          <div className="col-lg-6 d-flex align-items-center justify-content-center">
            <div className="project-info text-center">
              <h2>Patchwork Website</h2>
              <p>
                A personal portfolio website to show the owner's patchwork
                portfolio. Built in React Native with support for
                internationalization.
              </p>
            </div>
          </div>
        </div>
        <div className="row portfolio-content">
          <div className="col-lg-6 d-flex align-items-center justify-content-center">
            <div className="project-info text-center">
              <h2>Dictionary App</h2>
              <p>
                A React Native Dictionary built with API integration that
                returns the meaning and definitions of words being searched.
              </p>
            </div>
          </div>
          <a
            href="https://frosty-hamilton-108760.netlify.app"
            target="_blank"
            rel="noreferrer"
            className="col-lg-6 portfolio-images"
          >
            <img src={Dictionary} alt="Dictionary App" />
          </a>
        </div>
        <div className="row portfolio-content">
          <a
            href="https://sleepy-varahamihira-afc0ae.netlify.app/"
            target="_blank"
            rel="noreferrer"
            className="col-lg-6 portfolio-images"
          >
            <img src={WeatherApp} alt="Weather App" />
          </a>
          <div className="col-lg-6 d-flex align-items-center justify-content-center">
            <div className="project-info text-center">
              <h2>Weather App</h2>
              <p>
                Real-time weather app built during She Codes using HTML, CSS,
                React Native and API integration.
              </p>
            </div>
          </div>
        </div>
        <div className="row portfolio-content">
          <div className="col-lg-6 d-flex align-items-center justify-content-center">
            <div className="project-info text-center">
              <h2>Portfolio Draft</h2>
              <p>
                A multi-page website created in JavaScript that is fully
                mobile-responsive.
              </p>
            </div>
          </div>
          <a
            href="https://unruffled-stonebraker-5736ff.netlify.app/"
            target="_blank"
            rel="noreferrer"
            className="col-lg-6 portfolio-images"
          >
            <img src={PortfolioDraft} alt="Portfolio Draft" />
          </a>
        </div>
      </div>
    </section>
  );
}
