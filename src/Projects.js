import React from "react";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import Patchwork from "./images/patchwork.png";
import Dictionary from "./images/dictionary.png";
import WeatherApp from "./images/Weather_app.png";
import PortfolioDraft from "./images/portfolio_draft.png";

export default function Projects() {
  const { t } = useTranslation();
  return (
    <section className="Projects">
      <Helmet>
        <title>Natalia's Front-end Projects</title>
        <meta name="description" content="Take a look on Natalia's Projects" />
        <link rel="canonical" href="/projects" />
      </Helmet>
      <div className="container mt-5">
        <div className="row">
          <div className="col-sm-9 p-3">
            <h1 className="mb-5">{t("projectsPage.title")}</h1>
          </div>
        </div>
        <div className="row portfolio-content">
          <div className="col-md-6 py-3 d-flex portfolio-images">
            <a
              href="https://clever-jepsen-29dfd2.netlify.app/projects"
              target="_blank"
              rel="noreferrer"
              title="Patchwork Website Project"
            >
              <img
                src={Patchwork}
                alt="Patchwork Website"
                className="img-fluid"
              />
            </a>
          </div>
          <div className="col-md-6 d-flex align-items-center justify-content-center">
            <div className="project-info text-center">
              <h2>{t("projectsPage.project4")}</h2>
              <p>{t("projectsPage.projectDescription4")}</p>
            </div>
          </div>
        </div>
        <div className="row portfolio-content">
          <div className="col-md-6 d-flex align-items-center justify-content-center">
            <div className="project-info text-center">
              <h2>{t("projectsPage.project3")}</h2>
              <p>{t("projectsPage.projectDescription3")}</p>
            </div>
          </div>
          <div className="col-md-6 py-3 d-flex order-first order-md-last portfolio-images">
            <a
              href="https://frosty-hamilton-108760.netlify.app"
              target="_blank"
              rel="noreferrer"
              title="Dictionary App Project"
            >
              <img
                src={Dictionary}
                alt="Dictionary App"
                className="img-fluid"
              />
            </a>
          </div>
        </div>
        <div className="row portfolio-content">
          <div className="col-md-6 py-3 d-flex portfolio-images">
            <a
              href="https://sleepy-varahamihira-afc0ae.netlify.app/"
              target="_blank"
              rel="noreferrer"
              title="Weather App Project"
            >
              <img src={WeatherApp} alt="Weather App" className="img-fluid" />
            </a>
          </div>
          <div className="col-md-6 d-flex align-items-center justify-content-center">
            <div className="project-info text-center">
              <h2>{t("projectsPage.project2")}</h2>
              <p>{t("projectsPage.projectDescription2")}</p>
            </div>
          </div>
        </div>
        <div className="row portfolio-content">
          <div className="col-md-6 d-flex align-items-center justify-content-center">
            <div className="project-info text-center">
              <h2>{t("projectsPage.project1")}</h2>
              <p>{t("projectsPage.projectDescription1")}</p>
            </div>
          </div>
          <div className="col-md-6 py-3 d-flex order-first order-md-last portfolio-images">
            <a
              href="https://unruffled-stonebraker-5736ff.netlify.app/"
              target="_blank"
              rel="noreferrer"
              title="Portfolio Draft Project"
            >
              <img
                src={PortfolioDraft}
                alt="Portfolio Draft"
                className="img-fluid"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
