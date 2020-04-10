import React from "react";
import "./assets/css/style.css"



function MovieReview() {
    return (
<div className="container">
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
                        <img className="float-left mr-2 mb-1 myImage" src={require("./assets/images/Project2.png")}
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






</div>


);
}
export default MovieReview;
