import React from "react";
import { useTranslation } from "react-i18next";
import Patchwork from "./images/patchwork.png";
import Dictionary from "./images/dictionary.png";
import WeatherApp from "./images/Weather_app.png";
import PortfolioDraft from "./images/portfolio_draft.png"

export default function Projects() {
  const { t } = useTranslation();
  return (
    <section className="Projects">
      <div className="container mt-5">
        <div className="row">
          <div className="col-sm-9 p-3">
            <h1 className="mb-5">{t('projectsPage.title')}</h1>
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
              <h2>{t('projectsPage.project4')}</h2>
              <p>
                {t("projectsPage.projectDescription4")}
              </p>
            </div>
          </div>
        </div>
        <div className="row portfolio-content">
          <div className="col-lg-6 d-flex align-items-center justify-content-center">
            <div className="project-info text-center">
              <h2>{t('projectsPage.project3')}</h2>
              <p>
                {t('projectsPage.projectDescription3')}
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
              <h2>{t('projectsPage.project2')}</h2>
              <p>
                {t('projectsPage.projectDescription2')}
              </p>
            </div>
          </div>
        </div>
        <div className="row portfolio-content">
          <div className="col-lg-6 d-flex align-items-center justify-content-center">
            <div className="project-info text-center">
              <h2>{t('projectsPage.project1')}</h2>
              <p>
                {t('projectsPage.projectDescription1')}
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
