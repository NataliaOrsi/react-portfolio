import React from "react";
import Developer from "./images/naty_flpls.jpg"

export default function About() {
  return (
    <div className="About">
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
            <h3 className="mb-4">
              Front-end developer, based in The Netherlands
            </h3>
            <p>
              I am a passionate front-end developer based in The Netherlands. I
              am from Brazil and moved with my husband to this beautiful country
              due to his job and to enjoy one of our passions in common:
              traveling and experiencing other cultures. I graduated in law and,
              in Brazil, I worked as a prosecutor assistant for five years,
              where I developed several transferable skills such as analytical
              thinker and problem-solving. Working with legal cases is mainly
              solving the conflicts and finding the best possible solutions to
              each case. Also, being analytical is one of the most important
              tools to law professionals, as paying attention to details can
              make the difference between winning or losing a legal action.
            </p>
            <p>
              After I moved to The Netherlands, I took some time to think about
              my career path and decided to pursue a newly discovered passion:
              coding. Since the beginning of 2021, I focused on learning to code
              and tried a few different free courses and languages such as Java
              and Python, until I decided to invest in She Codes Workshops in
              July of the same year. This course completely changed my life and
              sparked my interest to continue to learn and grow as a developer.
            </p>
          </div>
        </div>
      </section>
      <section className="container featured-skills">
        <h3 className="text-center mb-5">Skills and Proficiency</h3>
        <div className="row d-flex justify-content-evenly text-center mb-4 skills-icons">
          <div className="col">
            <i className="fab fa-html5"></i>
            <p>HTML</p>
          </div>
          <div className="col">
            <i className="fab fa-css3-alt"></i>
            <p>CSS</p>
          </div>
          <div className="col">
            <i class="fab fa-react"></i>
            <p>React</p>
          </div>
          <div className="col">
            <i className="fab fa-github"></i>
            <p>GitHub</p>
          </div>
          <div className="col">
            <i className="fab fa-invision"></i>
            <p>InVision</p>
          </div>
        </div>
        <div className="row d-flex justify-content-evenly text-center skills-icons">
          <div className="col">
            <i className="fab fa-bootstrap"></i>
            <p>Bootstrap</p>
          </div>
          <div className="col">
            <i className="fab fa-js-square"></i>
            <p>JavaScript</p>
          </div>
          <div className="col">
            <i className="fas fa-globe"></i>
            <p>i18n</p>
          </div>
          <div className="col">
            <i className="fab fa-figma"></i>
            <p>Figma</p>
          </div>
          <div className="col">
            <i className="fab fa-git"></i>
            <p>Git</p>
          </div>
        </div>
      </section>
      <section className=" container education-description mb-5">
        <h3 className="text-center mb-5">Education and Certificates</h3>
        <ul>
          <li>October 2021 - She Codes React Development</li>
          <li>September 2021 - She Codes Responsive Web Development</li>
          <li>August 2021 - She Codes Plus - Front-end Development</li>
          <li>July 2021 - She Codes Basic - Introduction to Coding</li>
          <li>
            2013-2014 Post-graduation in Criminal Process and Criminal
            Procedure, Escola do Ministério Público de Santa Catarina.
          </li>
          <li>
            2007-2012 Bachelor Law School, Universidade Federal de Santa
            Catarina (UFSC)
          </li>
        </ul>
      </section>
    </div>
  );
}
