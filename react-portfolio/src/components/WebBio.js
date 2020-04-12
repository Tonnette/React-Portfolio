import React from "react";
import "./assets/css/style.css"
import pdf from './assets/TonCV.pdf'


function WebBio() {
    return (
        <div className="container">
            <div className="card">
                <div className="card-header">
                    WEB DEVELOPER BIO
                </div>

            </div>
            <div className="row">
                <div className="col-lg-8 offset-lg-2 col-md-12 col-sm-12">
                    <div className="container myContainer myContainerIndex">


                        <div className="row myRowBio">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <p className="myText">
                                    <img className="float-left mr-2 mb-1 myImage" src={require("./assets/images/ton.jpg")} alt="toni posing for a photo in New Zealand" /> 
                                Tonnette is a full stack Web Developer based in
                                Sydney. She is currently completing a coding
                                bootcamp run by Sydney University and Trilogy Education. She has skills is React, Node.js, HTML, CSS, JavaScript, JQuery, APIs, Bootstrap, 
                                Materialize MYSQL, NoSQL, MongoDB, MVC structure, CRUD, AJAX,
                                Heroku. She has used numerous NPM packages in her projects including Express.js, Sequalize, Handlebars, Passport, Bcryptjs and Path



                                She has worked on numerous web
                                projects including front-end websites, back-end and full-stack apps. Some of her project include a movie review app (group project), a
                                burger app, a cocktail-making website (group project), a weather
                                app, a day-planner, a password generator, and various other websites.

                            </p>
                                <div className="profileButton">
                                    <a href="https://github.com/Tonnette" target="_blank"
                                        className="btn btn-outline-info">GitHub</a> &nbsp;
                                <a href="https://www.linkedin.com/in/tonnette-stanford-16b99625/" target="_blank"
                                        className="btn btn-outline-info">LinkedIn</a> &nbsp;
                                <a href={pdf} target="_blank" className="btn btn-outline-info">CV</a>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
}
export default WebBio;
