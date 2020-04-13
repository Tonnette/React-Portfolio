import React from "react";
import "./assets/css/style.css"

function FilmBio() {
    return (
        <div className="container">
            <div className="card">
                <div className="card-header">
                    FILM BIO
            </div>
            </div>
            <div className="col-lg-8 offset-lg-2 col-md-12 col-sm-12">
                <div className="row myRowBio">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <p className="myText">
                            <img className="float-left mr-2 mb-1 myImage" src={require("./assets/images/ton.jpg")} alt="toni puts on jacket" /> Tonnette is Sydney based a trained writer and director. She is a graduate of the Australian Film Television and Radio
                                School (AFTRS), the Victorian College of the Arts (VCA) and the University of Technology Sydney (UTS). Her films have won numerous awards and have screened at over 200 festivals internationally and nationally, including
                                Oscar recognised festivals. Her film, Holding Hands is a multi-award winning feature documentary that is distributed by CFMDC Distribution in Canada. Her AFTRS film, Slut – The Musical is distributed by Ouat Media Inc.
                                in Canada and has recently has been sold to Canal +France and Canal +Spain and has reached #1 on iTunes.


                            </p>
                    </div>
                </div>

            </div>
        </div>
    );
}
export default FilmBio;
