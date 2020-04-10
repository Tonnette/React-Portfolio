import React from "react";
import "./assets/css/style.css"



function Cocktail() {
    return (
<div className="container">
<div className="card">
                <div className="card-header">
                    COCKTAIL WEBSITE
        </div>

            </div>


            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-8 col-sm-12">
                        <div className="container myContainer myContainerIndex">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                         
                            </div>

                            <div className="row myRow-2">
                                <div className="col-lg-12 col-md-12 col-sm-12">
                                    <p className="myText">


                                        <a href="https://jeqp.github.io/mixer-upper/index.html" target="_blank">
                                            <img className="float-left mr-2 mb-1 myImage" src={require("./assets/images/mixer.jpg")}
                                                alt="screenshot of cocktail website" />

                                        </a>




                                This dynamic webpage provides an easy way to discover and create cocktails through
                                searching by name or by ingredient. The user receives an image of the cocktail, a list
                                of ingredients and instructions on how to prepare it. The user can post to Twitter
                                or Facebook, and can open Google Maps and find their closest cocktail bar. Materialize,
                                Javascript, Jquery and the Cocktail Database API (thecocktaildb.com) were used. <br />
                                Contributors:
                                Takuji Okubo | James Pearce | Tonnette Stanford


                            </p>
                                    <div className="profileButton">
                                        <a href="https://jeqp.github.io/mixer-upper/index.html" target="_blank"
                                            className="btn btn-outline-info">Mixer Upper Website</a> &nbsp;
                                <a href="https://github.com/JEQP/mixer-upper/" target="_blank"
                                            className="btn btn-outline-info">Github Repo</a> &nbsp;


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
export default Cocktail;
