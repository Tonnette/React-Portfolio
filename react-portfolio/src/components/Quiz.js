import React from "react";
import "./assets/css/style.css"


function Quiz() {
    return (
<div className="container">
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
                                            <img className="float-left mr-2 mb-1 myImage" src={require("./assets/images/quiz.jpg")}
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




</div>


);
}
export default Quiz;
