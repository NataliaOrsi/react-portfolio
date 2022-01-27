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
              <img
                src={WeatherApp}
                alt="Weather App"
                className="d-block mb-5"
              />
              <div>
                <h4 className="text-center">Weather App</h4>
              </div>
            </div>
            <div className="col-4">
              <img
                src={PortfolioDraft}
                alt="Portfolio Draft"
                className="d-block mb-5"
              />
              <h4 className="text-center">Portfolio Draft</h4>
            </div>
            <div className="col-4">
              <img
                src={Patchwork}
                alt="Patchwork Website"
                className="d-block mb-5"
              />
              <h4 className="text-center">Patchwork Website</h4>
            </div>
          </div>
          <div className="d-flex justify-content-center my-5">
            <a className="btn btn-branding" href="/about">
              View my Portfolio
            </a>
          </div>
        </div>
      </section>
      <section className="container">
        <div className="row d-none d-lg-flex justify-content-between align-items-center contact-box">
          <div className="col-9">
            <h3>Let's work together!</h3>
            <a href="mailto:naty.m.orsi@gmail.com" title="Contact Natalia">
              naty.m.orsi@gmail.com
            </a>
          </div>
          <div className="col-3">
            <a
              className="btn btn-branding"
              href="mailto:naty.m.orsi@gmail.com"
              title="Contact Natalia"
            >
              Contact me
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
