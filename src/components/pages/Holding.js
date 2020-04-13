import React from "react";
import "../assets/css/style.css"

function Holding() {
    return (
        <div className="container">
            <div className="card">
                <div className="card-header">
                    HOLDING HANDS &nbsp; | &nbsp; FEATURE DOCUMENTARY
        </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-8 col-sm-12">
                        <div className="container myContainer myContainerIndex">


                            <div className="row myRow-2">
                                <div className="col-lg-12 col-md-12 col-sm-12">
                                    <p className="myText">
                                        <img className="float-left mr-2 mb-1 myImage" src={require("../assets/images/thumbnails/holding-thumb.jpg")} alt="dancers" />

                                        <strong>2009 | 67min | HD </strong>
                                        <br />Role: Co-Director / Editor
                                <br />
                                        <br /> It was the hate crime that shocked the world. Now prepare for the inspiring true story of courage and survival. Over the course of a year experience Craig and Shane’s journey through battles with police, endless surgeries
                                and emotional breakdowns. Follow them triumphantly leading the Sydney Mardi Gras parade, planning for a family and discovering the true power of their love. This multi-award winning films charts the most difficult and rewarding
                                year of their lives, and together they faced their greatest challenge…as only soul mates can.

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

export default Holding;