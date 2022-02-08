import React from "react";
import Naty from "./images/naty.png";

export default function NotFoundPage() {
  return (
    <div className=" container NotFoundPage">
      <div className="row d-flex align-items-center">
        <div className="col-lg-6">
          <h1 className="text-center">404 Not Found!</h1>
          <img className="img-fluid" src={Naty} alt="Web-developer" />
        </div>
        <div className="col-lg-6 justify-content-center">
          <a className="btn btn-branding" href="/">
            Return to the Homepage
          </a>
        </div>
      </div>
    </div>
  );
}
