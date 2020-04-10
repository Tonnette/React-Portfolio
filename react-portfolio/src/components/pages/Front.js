import React from "react";
import "../assets/css/style.css"

function Front() {
    return ( 
<div className="container">
        <div className="card">
        <div className="card-header">
            FONTBUM DANCIN' &nbsp; | &nbsp; SHORT FILM
        </div>
    </div>
    <div className="container">
        <div className="row">
            <div className="col-lg-8 col-md-8 col-sm-12">
                <div className="container myContainer myContainerIndex">


                    <div className="row myRow-2">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <p className="myText">
                                <img className="float-left mr-2 mb-1 myImage" src={require("../assets/images/thumbnails/frontbum-thumb.jpg")} alt="dancers" /> 

                                 <strong>2007 | 7min | HD </strong>
                                <br />Role: Writer / Director
                                <br />
                                <br /> It’s artistic, it’s aggressive, it’s visually stunning.
                                <br />This is FRONTBUM DANCIN’.
                                <br />
                                <br />North American Distributor: Frameline

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

export default Front;