import React from "react";
import "../assets/css/style.css"

function Lovebytes() {
    return (
        <div className="container">
            <div className="card">
                <div className="card-header">
                    LOVE BYTES &nbsp; | &nbsp; WEB SERIES
        </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-8 col-sm-12">
                        <div className="container myContainer myContainerIndex">


                            <div className="row myRow-2">
                                <div className="col-lg-12 col-md-12 col-sm-12">
                                    <p className="myText">
                                        <img className="float-left mr-2 mb-1 myImage" src={require("../assets/images/thumbnails/lovebytes-thumb.jpg")} alt="dancers" />

                                        <strong>2014 | 4 x 10min Eps | YouTube </strong>
                                        <br />Role: Writer / Director
                                <br />
                                        <br /> Love Bytes is the viral hit LGBT web-series that has clocked over 9 million views and 14,000 subscribers on YouTube.
                                <br />Housemates, Jade, Stacey and Michael are the Neapolitan ice-cream of sexuality. Young, sexy and single they search for love and lust but instead find humiliation and misadventure in Sydney’s herteroflexible dating scene.
                                <br />
                                        <br />Love Bytes was made with the assistance of the Metro Screen Story to Screen initiative and a successful crowd funding campaign.

                            </p>
                                    <div class="profileButton">
                                        <a href="https://www.youtube.com/channel/UC4NIIKWFBOxPvuN3HMqegMQ?view_as=subscriber" target="_blank" rel="noopener noreferrer" class="btn btn-outline-info">WATCH HERE</a> &nbsp;


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

export default Lovebytes;