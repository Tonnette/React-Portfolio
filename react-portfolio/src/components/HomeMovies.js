import React from "react";
import "./assets/css/style.css"


function HomeMovies() {
    return (
<div className="container-fluid myContainer ">
        <div className="row firstRow row-centered">
            <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 col-centered">
                <div className="card rompCard">
                    <a href="/romp">
                        <img src={require("./assets/images/thumbnails/romp-thumb.jpg")} className="card-img-top thumbnail romp" alt="catwallk pose" />
                        <div className="middle1">
                            <div className="text1">Romp | Web Series</div>
                        </div>
                    </a>
                </div>
            </div>
            <div className="col-sm-12 col-md-6 col-centered col-lg-4 col-xl-4 col-centered">
                <div className="card eggCard">
                    <a href="/egg">
                        <img src={require("./assets/images/thumbnails/egg-thumb.jpg")} className="card-img-top thumbnail theEgg" alt="animated penguins" />
                        <div className="middle2">
                            <div className="text2">The Egg <br /> Short Animation</div>
                        </div>
                    </a>
                </div>
            </div>
            <div className="col-sm-12 col-md-6 col-centered col-lg-4 col-xl-4 col-centered">
                <div className="card milkCard">
                    <a href="/milk">
                        <img src={require("./assets/images/thumbnails/milk-thumb.jpg")} className="card-img-top thumbnail milk" alt="girls looking out to sea" />
                        <div className="middle3">
                            <div className="text3">Milk & Vodka <br /> Short Drama</div>
                        </div>
                    </a>
                </div>

            </div>
            <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 col-centered">
                <div className="card loveCard">
                    <a href="/love">
                        <img src={require("./assets/images/thumbnails/lovebytes-thumb.jpg")} className="card-img-top thumbnail loveBytes" alt="michael on computer" />
                        <div className="middle4">
                            <div className="text4">Love Bytes <br /> Web Series</div>
                        </div>
                    </a>
                </div>

            </div>
            <div className="col-sm-12 col-md-6 col-centered col-lg-4 col-xl-4 col-centered">
                <div className="card slutCard">
                    <a href="/slut">
                        <img src={require("./assets/images/thumbnails/slut-thumb.jpg")} className="card-img-top thumbnail slut" alt="posing with cape" />
                        <div className="middle5">
                            <div className="text5">Slut the Musical <br />Comedy</div>
                        </div>
                    </a>
                </div>

            </div>
            <div className="col-sm-12 col-md-6 col-centered col-lg-4 col-xl-4 col-centered">
                <div className="card wallyCard">
                    <a href="/wally">
                        <img src={require("./assets/images/thumbnails/wally-thumb.jpg")} className="card-img-top thumbnail wally" alt="girl eats cake" />
                        <div className="middle6">
                            <div className="text6">Wally <br />Short Comedy</div>
                        </div>
                    </a>
                </div>

            </div>
            <div className="col-sm-12 col-md-6 col-centered col-lg-4 col-xl-4 col-centered">
                <div className="card viciousCard">
                    <a href="/vicious">
                        <img src={require("./assets/images/thumbnails/vicious.jpg")} className="card-img-top thumbnail vicious" alt="nurses posing" />
                        <div className="middle7">
                            <div className="text7">The Vicious & the Delicious <br /> Short Comedy</div>
                        </div>
                    </a>
                </div>

            </div>
            <div className="col-sm-12 col-md-6 col-centered col-lg-4 col-xl-4 col-centered">
                <div className="card holdingCard">
                    <a href="/holding">
                        <img src={require("./assets/images/thumbnails/holding-thumb.jpg")} className="card-img-top thumbnail holding" alt="Holding Hands poster" />
                        <div className="middle8">
                            <div className="text8">Holding Hands <br /> Feature Doco</div>
                        </div>
                    </a>
                </div>

            </div>
            <div className="col-sm-12 col-md-6 col-centered col-lg-4 col-xl-4 col-centered">
                <div className="card whyCard">
                    <a href="/why">
                        <img src={require("./assets/images/thumbnails/Whyme-thumb.jpg")} className="card-img-top thumbnail why" alt="awkward family pose" />
                        <div className="middle9">
                            <div className="text9">Why Me? <br /> Short Comedy</div>
                        </div>
                    </a>
                </div>

            </div>

        </div>
    </div>
);
}
export default HomeMovies;
