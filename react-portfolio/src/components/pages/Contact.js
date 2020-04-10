import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/style.css"
import pdf from '../assets/TonCV.pdf'

function Contact() {
  return (

    <div className="container">
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12">
          <p className="myName">Tonnette Stanford</p>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-5 col-md-5 col-md-offset-1 col-sm-5 col-xs-5 red">
          <Link
            to="/"
            className={
              window.location.pathname === "/" || window.location.pathname === "/"

            }
          >
            WEB DEVELOPER
            </Link>
        </div>
        <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1 green">
          <p className="sep">|</p>
        </div>


        <div className="col-lg-4 col-md-5 col-sm-4 col-xs-5 blue">
          <Link
            to="/films"
            className={
              window.location.pathname === "/films" || window.location.pathname === "/films"

            }
          >
            WRITER/DIRECTOR
            </Link>
        </div>


      </div>
          <div className="card">
        <div className="card-header">
            Contact
        </div>
        <div className="card-body">
            <h5 className="card-title">+61 421 068 813</h5>
            <p className="card-text">tonnettestanford@yahoo.com.au</p>

        </div>
        <div className="contactButtons">
            <a href="https://github.com/Tonnette" target="_blank" className="btn btn-outline-info">GitHub</a> &nbsp;
            <a href="https://www.linkedin.com/in/tonnette-stanford-16b99625/" target="_blank" className="btn btn-outline-info">LinkedIn</a> &nbsp;
            <a href={pdf} target="_blank" className="btn btn-outline-info">CV</a>

              

        </div>
    </div>

     </div>

  );
}

export default Contact;
