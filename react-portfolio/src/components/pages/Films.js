import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/style.css"

function Films() {
  return (

    <div className="container">
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12">
          <p className="myName">Tonnette Stanford</p>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-5 col-md-5 col-md-offset-1 col-sm-5 col-xs-5 red">
          <Link
            to="/"
            className={
              window.location.pathname === "/" || window.location.pathname === "/"

            }
          >
            WEB DEVELOPER
            </Link>
        </div>
        <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1 green">
          <p className="sep">|</p>
        </div>


        <div className="col-lg-4 col-md-5 col-sm-4 col-xs-5 blue">
          <Link
            to="/films"
            className={
              window.location.pathname === "/films" || window.location.pathname === "/films"

            }
          >
            WRITER/DIRECTOR
            </Link>
        </div>


      </div>


      <div className="card">
        <div className="card-header">
          FILM BIO
        </div>

      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 col-md-12 col-sm-12">
            <div className="container myContainer myContainerIndex">


              <div className="row myRowBio">
                <div className="col-lg-12 col-md-12 col-sm-12">
                  <p className="myText">
                    <img className="float-left mr-2 mb-1 myImage" src={require("../assets/images/ton.jpg")} alt="toni puts on jacket" /> Tonnette is Sydney based a trained writer and director. She is a graduate of the Australian Film Television and Radio
                                School (AFTRS), the Victorian College of the Arts (VCA) and the University of Technology Sydney (UTS). Her films have won numerous awards and have screened at over 200 festivals internationally and nationally, including
                                Oscar recognised festivals. Her film, Holding Hands is a multi-award winning feature documentary that is distributed by CFMDC Distribution in Canada. Her AFTRS film, Slut – The Musical is distributed by Ouat Media Inc.
                                in Canada and has recently has been sold to Canal +France and Canal +Spain and has reached #1 on iTunes.


                            </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid myContainer ">
        <div className="row firstRow row-centered">
          <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 col-centered">
            <div className="card rompCard">
              <a href="romp.html">
                <img src={require("../assets/images/thumbnails/romp-thumb.jpg")} className="card-img-top thumbnail romp" alt="catwallk pose" />
                <div className="middle1">
                  <div className="text1">Romp | Web Series</div>
                </div>
              </a>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 col-centered">
            <div className="card rompCard">
              <a href="romp.html">
                <img src={require("../assets/images/thumbnails/egg-thumb.jpg")} className="card-img-top thumbnail romp" alt="animated penguins hugging egg" />
                <div className="middle1">
                  <div className="text1">The Egg | Animated Short Film</div>
                </div>
              </a>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 col-centered">
            <div className="card rompCard">
              <a href="romp.html">
                <img src={require("../assets/images/thumbnails/milk-thumb.jpg")} className="card-img-top thumbnail romp" alt="two women look out to see" />
                <div className="middle1">
                  <div className="text1">Milk & Vodka | Short Drama</div>
                </div>
              </a>
            </div>
          </div>
         
        </div>
        <div className="row firstRow row-centered">
        <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 col-centered">
            <div className="card rompCard">
              <a href="romp.html">
                <img src={require("../assets/images/thumbnails/lovebytes-thumb.jpg")} className="card-img-top thumbnail romp" alt="man on computer shocked" />
                <div className="middle1">
                  <div className="text1">Love Bytes | Web Series</div>
                </div>
              </a>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 col-centered">
            <div className="card rompCard">
              <a href="romp.html">
                <img src={require("../assets/images/thumbnails/slut-thumb.jpg")} className="card-img-top thumbnail romp" alt="prefects strutting" />
                <div className="middle1">
                  <div className="text1">Slut - The Musical | Short Comedy</div>
                </div>
              </a>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 col-centered">
            <div className="card rompCard">
              <a href="romp.html">
                <img src={require("../assets/images/thumbnails/wally-thumb.jpg")} className="card-img-top thumbnail romp" alt="girl eating cake" />
                <div className="middle1">
                  <div className="text1">Wally | Short Comedy</div>
                </div>
              </a>
            </div>
          </div>






          </div>
          <div className="row firstRow row-centered">
          <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 col-centered">
            <div className="card rompCard">
              <a href="romp.html">
                <img src={require("../assets/images/thumbnails/vicious.jpg")} className="card-img-top thumbnail romp" alt="dancing girls" />
                <div className="middle1">
                  <div className="text1">The Vicious & the Delicious | Short Comedy</div>
                </div>
              </a>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 col-centered">
            <div className="card rompCard">
              <a href="romp.html">
                <img src={require("../assets/images/thumbnails/holding-thumb.jpg")} className="card-img-top thumbnail romp" alt="mardi gras" />
                <div className="middle1">
                  <div className="text1">Holding Hands | Feature Documentary</div>
                </div>
              </a>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 col-centered">
            <div className="card rompCard">
              <a href="romp.html">
                <img src={require("../assets/images/thumbnails/Whyme-thumb.jpg")} className="card-img-top thumbnail romp" alt="awkward family photo" />
                <div className="middle1">
                  <div className="text1">Why Me? | Short Comedy</div>
                </div>
              </a>
            </div>
          </div>



            </div>
      </div>
    </div>







  );
}

export default Films;
