import React from "react";
import Naty from "./images/naty.png"
import Patchwork from "./images/patchwork.png";
import PortfolioDraft from "./images/portfolio_draft.png";
import WeatherApp from "./images/Weather_app.png";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation();
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
              {t("homePage.introduction1")}{" "}
              <span className="hero-name">Natalia</span>
            </h1>
            <h2>{t("homePage.introduction2")}</h2>
            <p className="mb-4">{t("homePage.introductionParagraph")}</p>
            <div>
              <a className="btn btn-branding" href="/about">
                {t("homePage.aboutButton")}
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="featured-projects">
        <h3 className="m-5 text-center">
          {t("homePage.projectsIntroduction")}
        </h3>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-4">
              <img
                src={WeatherApp}
                alt={t("homePage.project1")}
                className="img-fluid d-block mb-3"
              />
              <div>
                <h4 className="text-center mb-5">{t("homePage.project1")}</h4>
              </div>
            </div>
            <div className="col-lg-4">
              <img
                src={PortfolioDraft}
                alt={t("homePage.project2")}
                className="img-fluid d-block mb-3"
              />
              <h4 className="text-center mb-5">{t("homePage.project2")}</h4>
            </div>
            <div className="col-lg-4">
              <img
                src={Patchwork}
                alt={t("homePage.project3")}
                className="img-fluid d-block mb-3"
              />
              <h4 className="text-center mb-5">{t("homePage.project3")}</h4>
            </div>
          </div>
          <div className="d-flex justify-content-center mt-3 mb-5">
            <a className="btn btn-branding" href="/about">
              {t('homePage.portfolioButton')}
            </a>
          </div>
        </div>
      </section>
      <section className="container">
        <div className="row d-none d-lg-flex justify-content-between align-items-center contact-box">
          <div className="col-9">
            <h3>{t('homePage.invitation')}</h3>
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
              {t('homePage.contactButton')}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
