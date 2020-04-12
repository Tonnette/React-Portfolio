import React from "react";
import "../assets/css/style.css"

function Romp() {
    return (
        <div className="container">
            <div className="card">
                <div className="card-header">
                    ROMP' &nbsp; | &nbsp; WEB SERIES
        </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-8 col-sm-12">
                        <div className="container myContainer myContainerIndex">


                            <div className="row myRow-2">
                                <div className="col-lg-12 col-md-12 col-sm-12">
                                    <p className="myText">
                                        <img className="float-left mr-2 mb-1 myImage" src={require("../assets/images/thumbnails/romp-thumb.jpg")} alt="dancers" />

                                        <strong>2020 | 6 x 14min Eps | Coming soon</strong>
                                        <br />Role: Writer / Director
                                <br />
                                        <br /> Coming soon in 2020, Romp is the spin-off from Love Bytes, the viral hit web-series that has over 9 million views
                                and 14 thousand subscribers.
                                <br />Housemates, Jade, Stacey and Michael are the Neapolitan ice-cream of
                                sexuality. Young, sexy and single they search for love and lust but instead find humiliation and misadventure in
                                Sydney’s herteroflexible dating scene.
                                <br />
                                        <br /> Presented by Screen Australia
                                <br /> Supported by QueerScreen

     						</p>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Romp;