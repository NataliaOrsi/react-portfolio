import React from "react";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import Developer from "./images/naty_flpls.jpg"

export default function About() {
  const { t } = useTranslation();
  return (
    <div className="About">
      <Helmet>
        <title>About Natalia</title>
        <meta name="description" content="Learn more about Natalia de Mesquita Orsi Vieira as a front-end developer" />
        <link rel="canonical" href="/about" />
      </Helmet>
      <section className="container-fluid hero">
        <div className="row d-flex align-items-center justify-content-center">
          <div className="col-lg-5">
            <img
              className="img-fluid d-none d-lg-block"
              src={Developer}
              alt="Web-developer"
            />
          </div>
          <div className="col-lg-6 about-description">
            <h2>Natalia de Mesquita Orsi Vieira</h2>
            <h3 className="mb-4">{t("homePage.introduction2")}</h3>
            <p>{t("aboutPage.paragraph1")}</p>
            <p>{t("aboutPage.paragraph2")}</p>
          </div>
        </div>
      </section>
      <section className="container featured-skills">
        <h3 className="text-center mb-5">{t("aboutPage.title1")}</h3>
        <div className="row d-flex justify-content-evenly text-center mb-4 skills-icons">
          <div className="col-2">
            <i className="fab fa-html5"></i>
            <p>HTML</p>
          </div>
          <div className="col-2">
            <i className="fab fa-bootstrap"></i>
            <p>Bootstrap</p>
          </div>
          <div className="col-2">
            <i className="fab fa-react"></i>
            <p>React</p>
          </div>
          <div className="col-2">
            <i className="fab fa-figma"></i>
            <p>Figma</p>
          </div>
          <div className="col-2">
            <i className="fab fa-invision"></i>
            <p>InVision</p>
          </div>
        </div>
        <div className="row d-flex justify-content-evenly text-center skills-icons">
          <div className="col-2">
            <i className="fab fa-css3-alt"></i>
            <p>CSS</p>
          </div>
          <div className="col-2">
            <i className="fab fa-js-square"></i>
            <p>JavaScript</p>
          </div>
          <div className="col-2">
            <i className="fas fa-globe"></i>
            <p>i18n</p>
          </div>
          <div className="col-2">
            <i className="fab fa-github"></i>
            <p>Github</p>
          </div>
          <div className="col-2">
            <i className="fab fa-git"></i>
            <p>Git</p>
          </div>
        </div>
      </section>
      <section className=" container education-description mb-5">
        <h3 className="text-center mb-5">{t("aboutPage.title2")}</h3>
        <ul>
          <li>{t("aboutPage.certificate6")}</li>
          <li>{t("aboutPage.certificate5")}</li>
          <li>{t("aboutPage.certificate4")}</li>
          <li>{t("aboutPage.certificate3")}</li>
          <li>{t("aboutPage.certificate2")}</li>
          <li>{t("aboutPage.certificate1")}</li>
        </ul>
      </section>
    </div>
  );
}
