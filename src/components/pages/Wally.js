import React from "react";
import "../assets/css/style.css"

function Wally() {
    return (
        <div className="container">
            <div className="card">
                <div className="card-header">
                    WALLY &nbsp; | &nbsp; SHORT FILM
        </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-8 col-sm-12">
                        <div className="container myContainer myContainerIndex">


                            <div className="row myRow-2">
                                <div className="col-lg-12 col-md-12 col-sm-12">
                                    <p className="myText">
                                        <img className="float-left mr-2 mb-1 myImage" src={require("../assets/images/thumbnails/wally-thumb.jpg")} alt="dancers" />

                                        <strong>2006 | 7min | HD </strong>
                                        <br />Role: Writer / Director
                                         <br />
                                        <br /> Little Matilda cannot stand her geriatric dog, Wally. In retaliation to his countless bad habits she sets him up for a seemingly innocent crime involving chocolate cake. Unfortunately, for Wally, the consequences are
                                far more severe than Matilda ever expected.
                                        <br />
                                        <br />This multiple award winning short film was made at the Victorian College of the Arts.
                                    </p>
                                    <div class="profileButton">
                                        <a href="screenings" target="_blank" rel="noopener noreferrer" class="btn btn-outline-info">Screenings</a> &nbsp;
                                <a href="awards" target="_blank" rel="noopener noreferrer" class="btn btn-outline-info">Awards</a> &nbsp;

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

export default Wally;