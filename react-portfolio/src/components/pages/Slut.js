import React from "react";
import "../assets/css/style.css"

function Slut() {
  return (
<div className="container">
        <div className="card">
        <div className="card-header">
            SLUT - THE MUSICAL &nbsp; | &nbsp; SHORT FILM
        </div>
    </div>
    <div className="container">
        <div className="row">
            <div className="col-lg-8 col-md-8 col-sm-12">
                <div className="container myContainer myContainerIndex">


                    <div className="row myRow-2">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <p className="myText">
                                <img className="float-left mr-2 mb-1 myImage" src={require("../assets/images/thumbnails/slut-thumb.jpg")} alt="dancers" /> 

                                <strong>2010 | 16min | HD </strong>
                                <br />Role: Director / Animator
                                <br />
                                <br /> Slut the Musical, a spectacularlove story with glorious ’80s fashion, high energy dance numbers, glitter and fun! Murray is the most popular prefect at St Helena’s High. However behind closed doors, Murray hides a
                                secret love for the school slut, Barry. As the Prefects berate and bully Barry for his individuality, tensions escalate in their secret relationship and Murray is forced to make a choice between popularity and sexual freedom.
                                <br />
                                <br /> Made at AFTRS.

                            </p>
                            <div class="profileButton">
                                <a href="screenings" target="_blank" class="btn btn-outline-info">Screenings</a> &nbsp;
                                <a href="awards" target="_blank" class="btn btn-outline-info">Awards</a> &nbsp;


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

export default Slut;