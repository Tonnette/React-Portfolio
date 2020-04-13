import React from "react";



function Toncard() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12">
                    <p className="myName">Tonnette Stanford</p>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-5 col-md-5 col-md-offset-1 col-sm-5 col-xs-5 red">
                    <a href="/">
                        WEB DEVELOPER
                    </a>
                </div>




                <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1 green">
                    <p className="sep">|</p>
                </div>


                <div className="col-lg-4 col-md-5 col-sm-4 col-xs-5 blue">
                    <a href="/films">
                        WRITER / DIRECTOR
                    </a>
                </div>


            </div>
        </div>
    );
}

export default Toncard;
