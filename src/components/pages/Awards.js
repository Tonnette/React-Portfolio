import React from "react";
import "../assets/css/style.css"

function Awards() {
    return (

        <div className="card" style={{ paddingBottom: '50px' }}>
            <div className="card-header">
                FILM AWARDS
        </div>

            <div className="container">
                <div className="row" style={{ paddingTop: '50px' }}>
                    <div className="col-lg-4 offset-lg-1 col-sm-12">
                        <img src={require("../assets/images/thumbnails/holding-awards.jpg")} className="card-img-top egg" alt="holding hands poster" />
                        <div className="card-body">
                            <p className="card-text screeningText">
                                <strong>Holding Hands | 67min | Feature Doco</strong>
                                <br /> * The Spokane Audience Choice Award, Spokane Film Festival, USA, 2010
                            <br /> * The John M. Deen Memorial Award, Spokane LGBT Film Festival, USA, 2010
                            <br /> * ScreenNSW Travel Grant, 2010
                            <br /> * SPECIAL JURY AWARD at KASHISH – Mumbai Int. Queer Film Festival 2010
                            <br /> * Frameline Film and Video Completion Fund, 2009
                            <br /> * Metro Screen Network production subsidy, 2008
                            <br />
                            </p>
                        </div>



                    </div>
                    <div className="col-lg-4 offset-lg-2 col-sm-12">
                        <img src={require("../assets/images/cape.jpg")} className="card-img-top egg" alt="holding hands poster" />
                        <div className="card-body">
                            <p className="card-text screeningText">
                                <p className="card-text screeningText">
                                    <strong>Slut-The Musical | 16min | Comedy</strong>
                                    <br /> * Outstanding Comedy, Queer Fruits Film Festival, 2012
                            <br /> * Selectors Choice, Best Short Film – Celluloid Casserole, Melbourne Queer Film Festival, 2011
                            <br /> * Queer Perspective Award, My Queer Career, Mardi Gras Film Fest, 2011
                            <br /> * Audience Award, My Queer Career, Mardi Gras Film Festival, Sydney, 2011
                            <br />


                                </p>
                            </p>
                        </div>



                    </div>
                </div>

                <div className="row" style={{ paddingBottom: '50px' }}>
                    <div className="col-lg-4 offset-lg-1 col-sm-12">
                        <img src={require("../assets/images/wally.jpg")} className="card-img-top egg" alt="holding hands poster" />
                        <div className="card-body">
                            <p className="card-text screeningText">
                                <strong>Wally | 7min | Comedy</strong>
                                <br /> * Best Film, Joy House Film Festival, Australia 2013
                            <br /> * Peoples Choice Award – Howard Shorts Film Festival, Australia 2010
                            <br /> * Best Comedy, Westgarth Film Festival, Australia 2007
                            <br /> * Best Children’s Film, Newtown Flicks, Australia 2007
                            <br /> * Best Student Film, Mandura Film Festival, Australia 2006
                            <br /> * Best Editing, Queen St Film Festival 2006
                            <br /> * Best Visual Effects Film, VCA Opening Night 2005
                            <br /> * Animal Logic Script Award, VCA Opening Night 2005


                        </p>
                        </div>



                    </div>
                    <div className="col-lg-4 offset-lg-2 col-sm-12">
                        <img src={require("../assets/images/vicious.jpg")} className="card-img-top egg" alt="holding hands poster" />
                        <div className="card-body">
                            <p className="card-text screeningText">
                                <strong>The Vicious and The Delicious | 12min | Comedy</strong>
                                <br /> * Audience Award – PERV Film Festival, Australia 2009
                            <br /> * Finalist: The Iris Prize 2008
                            <br /> * Selected for distribution across North America by Frameline
                            <br /> * Selected for distribution across German-speaking territories by Salzgeber and Co. Home Entertainment

                            <br /> * Winner of the top ten prize pack, Optus One80 Project 2008
                            <br /> * Travel Grant Funding, AFC 2008
                            <br /> * Metro Screen Network production subsidy, 2007
                            <br />



                            </p>
                        </div>



                    </div>

                </div>
                <div className="row" style={{ paddingBottom: '50px' }}>
                    <div className="col-lg-4 offset-lg-1 col-sm-12">
                        <img src={require("../assets/images/frontbum.jpg")} className="card-img-top egg" alt="holding hands poster" />
                        <div className="card-body">
                            <p className="card-text screeningText">
                                <strong>Frontbum Danci' | 7min | Comedy</strong>
                                <br /> * Selected for distribution across North America by Frameline
                            <br /> * Travel Grant Funding, AFC 2007


                        </p>
                        </div>



                    </div>
                    <div className="col-lg-4 offset-lg-2 col-sm-12">
                        <img src={require("../assets/images/mayo.jpg")} className="card-img-top egg" alt="holding hands poster" />
                        <div className="card-body">
                            <p className="card-text screeningText">
                                <strong>Tina Sol | 3min | Comedy</strong>
                                <br /> * Best Film, Digibytes Film Festival, Australia 2006
<br />
                                <br /> <strong>Inspirit | 8min | Horror</strong>
                                <br /> * Best Film, Eye Scream Film Festival, Australia 2002

                        </p>
                        </div>



                    </div>

                </div>

            </div>

        </div>


    );
}

export default Awards;