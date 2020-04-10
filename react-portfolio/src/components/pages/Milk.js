import React from "react";
import "../assets/css/style.css"

function Milk() {
  return (
<div className="container">
        <div className="card">
        <div className="card-header">
            MILK & VODKA &nbsp; | &nbsp; SHORT DRAMA
        </div>
    </div>
    <div className="container">
        <div className="row">
            <div className="col-lg-8 col-md-8 col-sm-12">
                <div className="container myContainer myContainerIndex">


                    <div className="row myRow-2">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <p className="myText">
                                <img className="float-left mr-2 mb-1 myImage" src={require("../assets/images/thumbnails/milk-thumb.jpg")} alt="dancers" /> 

                                 <strong>2013 | 24min | HD </strong>
                                <br />Role: Director / Animator
                                <br />
                                <br /> Astrid immerses herself in the intensity of her first love, however paranoia consumes her when she suspects her girlfriend, Emily, may be cheating. Made with the assistance of Metro Screen Jump Start initiative.

                            </p>
                            <div class="profileButton">
                                <a href="screenings" target="_blank" class="btn btn-outline-info">Screenings</a> &nbsp;



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

export default Milk;