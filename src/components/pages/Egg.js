import React from "react";
import "../assets/css/style.css"

function Egg() {
    return (
        <div className="container">
            <div className="card">
                <div className="card-header">
                    THE EGG &nbsp; | &nbsp; SHORT ANIMATION
        </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-8 col-sm-12">
                        <div className="container myContainer myContainerIndex">


                            <div className="row myRow-2">
                                <div className="col-lg-12 col-md-12 col-sm-12">
                                    <p className="myText">
                                        <img className="float-left mr-2 mb-1 myImage" src={require("../assets/images/thumbnails/egg-thumb.jpg")} alt="penguins cuddle egg" /> <strong>2013 | 10min | Animation </strong>
                                        <br />Role: Director / Animator
                                <br />
                                        <br /> Patsy is determined to beat the odds and hatch her own little chick, but she must fight some angry dads for her right to become a mum.

                            </p>
                                    <div className="profileButton">
                                        <a href="screenings" target="_blank" className="btn btn-outline-info">Screenings</a> &nbsp;


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

export default Egg;