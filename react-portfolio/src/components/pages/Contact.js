import React from "react";
import "../assets/css/style.css"
import pdf from '../assets/TonCV.pdf'

function Contact() {
  return (

    <div className="container">

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
