import React from "react";
import "../assets/css/style.css"

function Vicious() {
  return (
<div className="container">
        <div className="card">
        <div className="card-header">
            THE VICIOUS & THE DELICIOUS &nbsp; | &nbsp; SHORT FILM
        </div>
    </div>
    <div className="container">
        <div className="row">
            <div className="col-lg-8 col-md-8 col-sm-12">
                <div className="container myContainer myContainerIndex">


                    <div className="row myRow-2">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <p className="myText">
                                <img className="float-left mr-2 mb-1 myImage" src={require("../assets/images/thumbnails/vicious.jpg")} alt="dancers" /> 

                             	<strong>2008 | 12min | HD </strong>
                                <br />Role: Writer / Director
                                <br />
                                <br /> An outrageous soap-opera, The Vicious and the Delicious explores the shocking scandals of the powerful Cassamento family and their lovers. Hair-pulling catfights, countless illicit affairs, flamboyant fashion statements
                                and bizarre story twists – all this and more in…The Vicious and the Delicious!
                                <br />
                                <br /> Made with the assistance of the Metro Screen Jump Start Initiative.
                                <br />
                                <br />North American Distributor: Frameline

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

export default Vicious;