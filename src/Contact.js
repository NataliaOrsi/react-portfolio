import React from "react";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import Computer from "./images/web_development.png";

export default function Contact() {
  const { t } = useTranslation();
  return (
    <section className="Contact">
      <Helmet>
        <title>Contact Natalia</title>
        <meta name="description" content="Contact Natalia for job inquiries" />
        <link rel="canonical" href="/contact" />
      </Helmet>
      <div className="container mt-5">
        <div className="row work-heading">
          <div className="col-md-9 p-3">
            <h1>{t("homePage.invitation")}</h1>
          </div>
        </div>
      </div>
      <div className="container my-5">
        <div className="row align-items-center contact-data">
          <div className="col-md-5">
            <ul className="text-center">
              <li>
                <i className="far fa-envelope"></i> Email
              </li>
              <a
                href="&#109;&#97;&#105;&#108;&#116;&#111;&#58;&#110;&#97;&#116;&#121;&#46;&#109;&#46;&#111;&#114;&#115;&#105;&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;"
                title="send Natalia an email"
              >
                &#110;&#97;&#116;&#121;&#46;&#109;&#46;&#111;&#114;&#115;&#105;&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;
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
