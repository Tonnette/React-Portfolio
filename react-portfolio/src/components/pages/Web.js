import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/style.css"

function Web() {
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
                    WEB DEVELOPER BIO
        </div>

            </div>


            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2 col-md-12 col-sm-12">
                        <div className="container myContainer myContainerIndex">


                            <div className="row myRowBio">
                                <div className="col-lg-12 col-md-12 col-sm-12">
                                    <p className="myText">
                                        <img className="float-left mr-2 mb-1 myImage" src={require("../assets/images/ton.jpg")}
                                            alt="toni posing for a photo in New Zealand" /> Tonnette is a full stack Web Developer based in
                                Sydney. She is currently completing a coding
                                bootcamp run by Sydney University and Trilogy Education. She has skills is HTML, CSS,
                                JavaScript, JQuery, APIs, Bootstrap, Materialize, Node.js, MYSQL, NoSQL, MongoDB, MVC structure, CRUD, AJAX,
                                Heroku. She has used numerous NPM packages in her projects including Express.js, Sequalize, Handlebars, Passport, Bcryptjs and Path


                                <br />
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
                                <a href="./assets/TonCV.pdf" download className="btn btn-outline-info">CV</a>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
              <h1 className="webText">CODING PROJECTS</h1>
              <br></br>
            <div className="card">
                <div className="card-header">
                    MOVIE REVIEW WEBSITE
        </div>


            </div>

            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-8 col-sm-12">
                        <div className="container myContainer myContainerIndex">
                            <div className="col-lg-12 col-md-12 col-sm-12">

                            </div>

                            <div className="row myRow-2">
                                <div className="col-lg-12 col-md-12 col-sm-12">
                                    <p className="myText">


                                        <a href="https://lit-peak-86961.herokuapp.com/" target="_blank">
                                            <img className="float-left mr-2 mb-1 myImage" src={require("../assets/images/Project2.png")}
                                                alt="screenshot of Movie Review App" />

                                        </a>




                                This is a movie review website
                                where users can look up any movie and see
                                reviews. This could help them decide to watch a movie or not.
                                Secondly, users can register as a member and
                                this allows them to also add their own reviews. They can also go into their profile page
                                and delete any of their reviews that they
                                are not happy with.
                                <br />
                                        <b>Technologies used:</b> Node.js, MYSQL, JQuery, Javascript, MVC structure, CRUD, AJAX,
                                Heroku, HTML, CSS, Materialize, The Moviedb API
                                <br />

                                        <b>Packages used:</b> Express.js, Sequalize, Handlebars, Passport, Bcryptjs, Path
                                <br />
                                Contributors: Andy | Jesse | Tonnette





                            </p>
                                    <div className="profileButton">
                                        <a href="https://lit-peak-86961.herokuapp.com/" target="_blank"
                                            className="btn btn-outline-info">Movie Review App</a> &nbsp;
                                <a href="https://github.com/Tonnette/Project2" target="_blank"
                                            className="btn btn-outline-info">Github Repo</a> &nbsp;


                            </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


    <div className="card">
                <div className="card-header">
                    BURGER APP
        </div>

            </div>


            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-8 col-sm-12">
                        <div className="container myContainer myContainerIndex">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                         
                            </div>

                            <div className="row myRow-2">
                                <div className="col-lg-12 col-md-12 col-sm-12">
                                    <p className="myText">


                                        <a href="https://peaceful-savannah-89179.herokuapp.com/" target="_blank">
                                            <img className="float-left mr-2 mb-1 myImage" src={require("../assets/images/Burger.png")}
                                                alt="screenshot of Burger App" />

                                        </a>




                                This app allows the user to name all the burgers they want to eat. They can then choose
                                to devour which every burger they want.
                                After they devour their burger, they can then choose to delete the item.
                                This burger app was built using MySQL, Node, Express, Handlebars and ORM.



                            </p>
                                    <div className="profileButton">
                                        <a href="https://peaceful-savannah-89179.herokuapp.com/" target="_blank"
                                            className="btn btn-outline-info">Eat De Burger App</a> &nbsp;
                                <a href="https://github.com/Tonnette/burger-project" target="_blank"
                                            className="btn btn-outline-info">Github Repo</a> &nbsp;


                            </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



  <div className="card">
                <div className="card-header">
                    COCKTAIL WEBSITE
        </div>

            </div>


            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-8 col-sm-12">
                        <div className="container myContainer myContainerIndex">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                         
                            </div>

                            <div className="row myRow-2">
                                <div className="col-lg-12 col-md-12 col-sm-12">
                                    <p className="myText">


                                        <a href="https://jeqp.github.io/mixer-upper/index.html" target="_blank">
                                            <img className="float-left mr-2 mb-1 myImage" src={require("../assets/images/mixer.jpg")}
                                                alt="screenshot of cocktail website" />

                                        </a>




                                This dynamic webpage provides an easy way to discover and create cocktails through
                                searching by name or by ingredient. The user receives an image of the cocktail, a list
                                of ingredients and instructions on how to prepare it. The user can post to Twitter
                                or Facebook, and can open Google Maps and find their closest cocktail bar. Materialize,
                                Javascript, Jquery and the Cocktail Database API (thecocktaildb.com) were used. <br />
                                Contributors:
                                Takuji Okubo | James Pearce | Tonnette Stanford


                            </p>
                                    <div className="profileButton">
                                        <a href="https://jeqp.github.io/mixer-upper/index.html" target="_blank"
                                            className="btn btn-outline-info">Mixer Upper Website</a> &nbsp;
                                <a href="https://github.com/JEQP/mixer-upper/" target="_blank"
                                            className="btn btn-outline-info">Github Repo</a> &nbsp;


                            </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

             <div className="card">
                <div className="card-header">
                    WEATHER WEBSITE
        </div>

            </div>

            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-8 col-sm-12">
                        <div className="container myContainer myContainerIndex">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                         
                            </div>

                            <div className="row myRow-2">
                                <div className="col-lg-12 col-md-12 col-sm-12">
                                    <p className="myText">


                                        <a href="https://tonnette.github.io/" target="_blank">
                                            <img className="float-left mr-2 mb-1 myImage" src={require("../assets/images/weather.jpg")}
                                                alt="screenshot of weather website" />

                                        </a>




                                The user can find the weather of various cities around the world getting a 5 day
                                forecast. This was built using an AJAX call to retriev data. It dynamically updates HTML
                                and CSS by storing user data in local storage.
                                <br /> It includes a search history so that users can access their past search terms.
                                Clicking on the city name will perform a new search that returns current and future
                                conditions for that city. This app displays: the city,
                                the date, the weather icon, temp, humidity, wind speed, and the UV Index
                                <br />
                                        <div className="profileButton">
                                            <a href="https://tonnette.github.io/" target="_blank"
                                                className="btn btn-outline-info">Weather App</a> &nbsp;
                                    <a href="https://github.com/Tonnette/tonnette.github.io" target="_blank"
                                                className="btn btn-outline-info">Github Repo</a> &nbsp;


                                </div>


                                    </p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

                    <div className="card">
                <div className="card-header">
                    CODING QUIZ
        </div>

            </div>

            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-8 col-sm-12">
                        <div className="container myContainer myContainerIndex">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                         
                            </div>

                            <div className="row myRow-2">
                                <div className="col-lg-12 col-md-12 col-sm-12">
                                    <p className="myText">


                                        <a href="https://tonnette.github.io/quiz/" target="_blank">
                                            <img className="float-left mr-2 mb-1 myImage" src={require("../assets/images/quiz.jpg")}
                                                alt="quiz webpage screenshot" />

                                        </a>





                                The quiz will log how many questions the user got correct. The user will be rewarded if
                                they answer the questions quickly. For any wrong answer there is a time penalty. At the
                                end of the quiz the users score is calculated by the time left of the timer.
                                The user can then log their score in the high scores section. The user also has the
                                ability to clear all high scores. This website was built using bootstrap, html, CSS,
                                JavaScript and a bit of Jquery.
                                <br />
                                        <div className="profileButton">
                                            <a href="https://tonnette.github.io/quiz/" target="_blank"
                                                className="btn btn-outline-info">Coding Quiz
                                        App</a> &nbsp;
                                    <a href="https://github.com/Tonnette/quiz" target="_blank"
                                                className="btn btn-outline-info">Github Repo</a> &nbsp;


                                </div>

                                    </p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

                             <div className="card">
                <div className="card-header">
                    DAY PLANNER WEBSITE
        </div>

            </div>


            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-8 col-sm-12">
                        <div className="container myContainer myContainerIndex">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                          
                            </div>

                            <div className="row myRow-2">
                                <div className="col-lg-12 col-md-12 col-sm-12">
                                    <p className="myText">

                                        <a href="https://tonnette.github.io/day-planner/" target="_blank">
                                            <img className="float-left mr-2 mb-1 myImage" src={require("../assets/images/work.jpg")}
                                                alt="scheduler webpage screenshot" />

                                        </a>


                                This calendar displays the current date and time and allows the user to put and save
                                items for each hour of the day (between 9am-5pm). This info will save in local storage.
                                Each hour is colour coded to reflect whether the time slot is in the past, the
                                present, or the future. The colours will change depending on the time of day. Grey for
                                past, pink for present and green for future hours. This website was built using
                                bootstrap, html, CSS, JavaScript, JQuery and Moment.js
                                <br />
                                        <div className="profileButton">
                                            <a href="https://tonnette.github.io/day-planner/" target="_blank"
                                                className="btn btn-outline-info">Day Planner
                                        App</a> &nbsp;
                                    <a href="https://github.com/Tonnette/day-planner" target="_blank"
                                                className="btn btn-outline-info">Github Repo</a> &nbsp;


                                </div>

                                    </p>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Web;
