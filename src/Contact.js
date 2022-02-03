import React from "react";
import { useTranslation } from "react-i18next";
import Computer from "./images/web_development.png";

export default function Contact() {
  const { t } = useTranslation();
  return (
    <section className="Contact">
      <div className="container mt-5">
        <div className="row work-heading">
          <div className="col-sm-9 p-3">
            <h1>{t("homePage.invitation")}</h1>
          </div>
        </div>
      </div>
      <div className="container mb-5">
        <div className="row align-items-center contact-data">
          <div className="col-md-5">
            <ul className="text-center">
              <li>
                <i className="far fa-envelope"></i> Email
              </li>
              <a
                href="mailto:naty.m.orsi@gmail.com"
                title="send Natalia an email"
              >
                naty.m.orsi@gmail.com
              </a>
              <li className="mt-5">
                <i className="fab fa-linkedin"></i> Linkedin
              </li>
              <a
                href="https://www.linkedin.com/in/nataliaorsi155/"
                rel="noreferrer"
                target="_blank"
                title="Contact Natalia in Linkedin"
              >
                @nataliaorsi
              </a>
              <li className="mt-5">
                <i className="fab fa-github"></i> GitHub
              </li>
              <a
                href="https://github.com/NataliaOrsi"
                target="_blank"
                rel="noreferrer"
                title="Take a look at Natalia's code"
              >
                @NataliaOrsi
              </a>
            </ul>
          </div>
          <div className="col-md-7">
            <img
              className="img-fluid contact-image d-none d-lg-block"
              src={Computer}
              alt="web-developer"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
