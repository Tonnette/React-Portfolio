import React from "react";
import "../assets/css/style.css"

function Why() {
    return (
        <div className="container">
            <div className="card">
                <div className="card-header">
                    WHY ME? &nbsp; | &nbsp; SHORT FILM
        </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-8 col-sm-12">
                        <div className="container myContainer myContainerIndex">


                            <div className="row myRow-2">
                                <div className="col-lg-12 col-md-12 col-sm-12">
                                    <p className="myText">
                                        <img className="float-left mr-2 mb-1 myImage" src={require("../assets/images/thumbnails/Whyme-thumb.jpg")} alt="dancers" />

                                        <strong>2011 | 22min | HD </strong>
                                        <br />Role: Producer
                                         <br />
                                        <br /> Sixteen-year-old Cheryl is hopelessly in love with her piano teacher, Stella. She is also hopeless at the piano. Her only hope of winning her love is by playing to perfection at her school choir night. A seemingly
                                impossible task.

                                        </p>
                                    <div class="profileButton">
                                        <a href="screenings" target="_blank" rel="noopener noreferrer" class="btn btn-outline-info">Screenings</a> &nbsp;


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

export default Why;