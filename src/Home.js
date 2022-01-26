import React from "react";
import Naty from "./images/naty.png"
import Patchwork from "./images/patchwork.png";
import PortfolioDraft from "./images/portfolio_draft.png";
import WeatherApp from "./images/Weather_app.png";

export default function Home() {
  return (
    <div className="Home">
      <section className="container hero">
        <div className="row d-flex align-items-center">
          <div className="col-lg-5 d-flex justify-content-end">
            <img
              className="img-fluid d-none d-lg-block"
              src={Naty}
              alt="Web-developer"
            />
          </div>
          <div className="col-lg-7">
            <h1>
              I'm <span className="hero-name">Natalia</span>
            </h1>
            <h2>a front-end developer based in The Netherlands</h2>
            <p className="mb-4">
              A brazilian graduated in law who decided to live new challenges as
              a front-end developer, while enjoying the life in The Netherlands.
            </p>
            <div>
              <a className="btn btn-branding" href="/about">
                More about me
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="featured-projects">
        <h3 className="m-5 text-center">Featured Projects</h3>
        <div className="container-fluid">
          <div className="row">
            <div className="col-4">
              <img src={WeatherApp} alt="Patchwork Website" />
            </div>
            <div className="col-4">
              <img src={PortfolioDraft} alt="Portfolio Draft" />
            </div>
            <div className="col-4">
              <img src={Patchwork} alt="Weather App" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
