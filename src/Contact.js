import React from "react";
import Computer from "./images/web_development.png";

export default function Contact() {
  return (
    <section className="Contact">
      <div class="container mt-5">
        <div class="row work-heading">
          <div class="col-sm-9 p-3">
            <h1>Let's work together!</h1>
          </div>
        </div>
      </div>
      <div class="container mb-5">
        <div class="row align-items-center contact-data">
          <div class="col-md-5">
            <ul class="text-center">
              <li>
                <i class="far fa-envelope"></i> Email
              </li>
              <a
                href="mailto:naty.m.orsi@gmail.com"
                title="send Natalia an email"
              >
                naty.m.orsi@gmail.com
              </a>
              <li class="mt-5">
                <i class="fab fa-linkedin"></i> Linkedin
              </li>
              <a
                href="https://www.linkedin.com/in/nataliaorsi155/"
                rel="noreferrer"
                target="_blank"
                title="Contact Natalia in Linkedin"
              >
                @nataliaorsi
              </a>
              <li class="mt-5">
                <i class="fab fa-github"></i> GitHub
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
          <div class="col-md-7">
            <img
              class="img-fluid contact-image d-none d-lg-block"
              src={Computer}
              alt="web-developer"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
