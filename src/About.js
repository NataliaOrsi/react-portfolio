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
              I am a passionate front-end developer based in The Netherlands.
              I'm originally from Brazil and have moved here with my husband for
              his job and to pursue one of our passions together: traveling and
              experiencing other cultures. I graduated in law and worked as a
              prosecutor assistant in Brazil for five years, where I developed
              transferable skills such as analytical thinking and
              problem-solving. Working on legal cases is mainly solving the
              conflicts and finding the best possible solutions for each
              situation. In addition, law professionals need to be analytical,
              as paying attention to details can make the difference between
              winning or losing a case.
            </p>
            <p>
              After moving to The Netherlands, I took some time to think about
              my career path. To fulfill my newly discovered passion, I decided
              to become a coder. Since the beginning of 2021, I focused on
              learning to code and tried a few different free courses and
              languages such as Java and Python until I decided to invest in She
              Codes Workshops focused on Front-end development in July of the
              same year. The workshops changed my life and inspired me to learn
              more and grow as a developer.
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
            <i className="fab fa-react"></i>
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
