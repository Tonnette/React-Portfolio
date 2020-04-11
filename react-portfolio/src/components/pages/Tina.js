import React from "react";
import "../assets/css/style.css"

function Tina() {
  return (
<div className="container">
        <div className="card">
        <div className="card-header">
            TINA SOL &nbsp; | &nbsp; SHORT FILM
        </div>
    </div>
    <div className="container">
        <div className="row">
            <div className="col-lg-8 col-md-8 col-sm-12">
                <div className="container myContainer myContainerIndex">


                    <div className="row myRow-2">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <p className="myText">
                                <img className="float-left mr-2 mb-1 myImage" src={require("../assets/images/thumbnails/tina-thumb.jpg")} alt="dancers" /> 

                             	<strong>2006 | 3min | HD </strong>
                                <br />Role: Writer / Director
                                <br />
                                <br /> Tina Sol promotes her new album which promises to touch a lot of children. Tina Sol is...all real woman!
                                <br />
                                <br />This award winning short film was made at the Victorian College of the Arts.
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

export default Tina;