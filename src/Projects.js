import React from "react";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import Patchwork from "./images/patchwork.png";
import Dictionary from "./images/dictionary.png";
import WeatherApp from "./images/Weather_app.png";
import PortfolioDraft from "./images/portfolio_draft.png";
import GoogleClone from "./images/google_clone.png";
import Hangman from './images/hangman.png';
import Poem from './images/poem-AI.png';
import travelSuggestion from './images/travel-suggestion-AI.png';
import ToDoList from './images/todolist_python.png'

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
          <div className="col-md-6 d-flex align-items-center justify-content-center">
            <div className="project-info text-center">
              <h2>{t("projectsPage.project9")}</h2>
              <p>{t("projectsPage.projectDescription9")}</p>
              <br />
              <a
                href="https://github.com/NataliaOrsi/TodoList"
                target="_blank"
                rel="noreferrer"
              >
                <button className="btn btn-branding">View at GitHub</button>
              </a>
            </div>
          </div>
          <div className="col-md-6 py-3 d-flex order-first order-md-last portfolio-images">
            <a
              href="https://github.com/NataliaOrsi/TodoList"
              target="_blank"
              rel="noreferrer"
              title="Task Planner in Python"
            >
              <img src={ToDoList} alt="Poem Generator AI" className="img-fluid" />
            </a>
          </div>
        </div>
        <div className="row portfolio-content">
          <div className="col-md-6 py-3 d-flex portfolio-images">
            <a
              href="https://travel-generator-ai.netlify.app/"
              target="_blank"
              rel="noreferrer"
              title="Artificial Inteligence to generate a travel destination"
            >
              <img
                src={travelSuggestion}
                alt="Travel Generator Website"
                className="img-fluid"
              />
            </a>
          </div>
          <div className="col-md-6 d-flex align-items-center justify-content-center">
            <div className="project-info text-center">
              <h2>{t("projectsPage.project8")}</h2>
              <p>{t("projectsPage.projectDescription8")}</p>
              <br />
              <a
                href="https://github.com/NataliaOrsi/travel-suggestion"
                target="_blank"
                rel="noreferrer"
              >
                <button className="btn btn-branding">View at GitHub</button>
              </a>
            </div>
          </div>
        </div>
        <div className="row portfolio-content">
          <div className="col-md-6 d-flex align-items-center justify-content-center">
            <div className="project-info text-center">
              <h2>{t("projectsPage.project7")}</h2>
              <p>{t("projectsPage.projectDescription7")}</p>
              <br />
              <a
                href="https://github.com/NataliaOrsi/poem-generator-js"
                target="_blank"
                rel="noreferrer"
              >
                <button className="btn btn-branding">View at GitHub</button>
              </a>
            </div>
          </div>
          <div className="col-md-6 py-3 d-flex order-first order-md-last portfolio-images">
            <a
              href="https://poem-generator-js.netlify.app/"
              target="_blank"
              rel="noreferrer"
              title="Artificial Inteligence Poem Generator"
            >
              <img src={Poem} alt="Poem Generator AI" className="img-fluid" />
            </a>
          </div>
        </div>
        <div className="row portfolio-content">
          <div className="col-md-6 py-3 d-flex portfolio-images">
            <a
              href="https://hangman-to-play.netlify.app"
              target="_blank"
              rel="noreferrer"
              title="Hangman Game Project"
            >
              <img
                src={Hangman}
                alt="Hangman Game Website"
                className="img-fluid"
              />
            </a>
          </div>
          <div className="col-md-6 d-flex align-items-center justify-content-center">
            <div className="project-info text-center">
              <h2>{t("projectsPage.project6")}</h2>
              <p>{t("projectsPage.projectDescription6")}</p>
              <br />
              <a
                href="https://github.com/NataliaOrsi/next-hangman"
                target="_blank"
                rel="noreferrer"
              >
                <button className="btn btn-branding">View at GitHub</button>
              </a>
            </div>
          </div>
        </div>
        <div className="row portfolio-content">
          <div className="col-md-6 d-flex align-items-center justify-content-center">
            <div className="project-info text-center">
              <h2>{t("projectsPage.project5")}</h2>
              <p>{t("projectsPage.projectDescription5")}</p>
              <br />
              <a
                href="https://github.com/NataliaOrsi/google-search-clone"
                target="_blank"
                rel="noreferrer"
              >
                <button className="btn btn-branding">View at GitHub</button>
              </a>
            </div>
          </div>
          <div className="col-md-6 py-3 d-flex order-first order-md-last portfolio-images">
            <a
              href="https://clone-google-nmov.netlify.app"
              target="_blank"
              rel="noreferrer"
              title="Google Search Clone"
            >
              <img
                src={GoogleClone}
                alt="Clone of Google Search"
                className="img-fluid"
              />
            </a>
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
              <br />
              <a
                href="https://github.com/NataliaOrsi/patchwork"
                target="_blank"
                rel="noreferrer"
              >
                <button className="btn btn-branding">View at GitHub</button>
              </a>
            </div>
          </div>
        </div>
        <div className="row portfolio-content">
          <div className="col-md-6 d-flex align-items-center justify-content-center">
            <div className="project-info text-center">
              <h2>{t("projectsPage.project3")}</h2>
              <p>{t("projectsPage.projectDescription3")}</p>
              <br />
              <a
                href="https://github.com/NataliaOrsi/dictionary-app"
                target="_blank"
                rel="noreferrer"
              >
                <button className="btn btn-branding">View at GitHub</button>
              </a>
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
              <br />
              <a
                href="https://github.com/NataliaOrsi/react-weather-app"
                target="_blank"
                rel="noreferrer"
              >
                <button className="btn btn-branding">View at GitHub</button>
              </a>
            </div>
          </div>
        </div>
        <div className="row portfolio-content">
          <div className="col-md-6 d-flex align-items-center justify-content-center">
            <div className="project-info text-center">
              <h2>{t("projectsPage.project1")}</h2>
              <p>{t("projectsPage.projectDescription1")}</p>
              <br />
              <a
                href="https://github.com/NataliaOrsi/my-portfolio"
                target="_blank"
                rel="noreferrer"
              >
                <button className="btn btn-branding">View at GitHub</button>
              </a>
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
