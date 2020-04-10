import React from "react";
import "../assets/css/style.css"
import Carousel from 'react-bootstrap/Carousel';

function Home() {
  return (

<div className="container">
<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
     src={require("../assets/images/milk.jpg")} className="d-block w-100" 
     alt="girls sitting on jetty" />
    
    <Carousel.Caption>
      <h3>Milk and Vodka</h3>
      <p>Short Film &nbsp; | &nbsp;24mins &nbsp; | &nbsp;2013</p>
    </Carousel.Caption>
  </Carousel.Item>

    <Carousel.Item>
    <img
      className="d-block w-100"
     src={require("../assets/images/cape.jpg")} className="d-block w-100" 
     alt="man in a cape" />
    
    <Carousel.Caption>
      <h3>Slut - the Musical</h3>
      <p>Short Musical &nbsp; | &nbsp;16mins &nbsp; | &nbsp;2010</p>
    </Carousel.Caption>
  </Carousel.Item>

    <Carousel.Item>
    <img
      className="d-block w-100"
     src={require("../assets/images/egg-night.jpg")} className="d-block w-100" 
     alt="animated penguin in snow" />
    
    <Carousel.Caption>
      <h3 >The Egg</h3>
      <p>Short | &nbsp;10mins &nbsp; | &nbsp;2013</p>
    </Carousel.Caption>
  </Carousel.Item>

    

    <Carousel.Item>
    <img
      className="d-block w-100"
     src={require("../assets/images/mayo.jpg")} className="d-block w-100" 
     alt="man in bed with mayo on his face" />
    
    <Carousel.Caption>
      <h3>Romp</h3>
      <p>Web Series &nbsp; | &nbsp;6 x 12min eps &nbsp; | &nbsp;Coming Soon!</p>
    </Carousel.Caption>
  </Carousel.Item>

   <Carousel.Item>
    <img
      className="d-block w-100"
     src={require("../assets/images/vicious.jpg")} className="d-block w-100" 
     alt="Nurses" />
    
    <Carousel.Caption>
      <h3>The Vicious and the Delicious</h3>
      <p>Short Film &nbsp; | &nbsp;12mins &nbsp; | &nbsp;2013</p>
    </Carousel.Caption>
  </Carousel.Item>

   <Carousel.Item>
    <img
      className="d-block w-100"
     src={require("../assets/images/whyme.jpg")} className="d-block w-100" 
     alt="family sing on stage" />
    
    <Carousel.Caption>
      <h3>Why Me?</h3>
      <p>Short Film &nbsp; | &nbsp;22mins &nbsp; | &nbsp;2010</p>
    </Carousel.Caption>
  </Carousel.Item>



  








</Carousel>



 



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
            <div className="col-sm-12 col-md-6 col-centered col-lg-4 col-xl-4 col-centered">
                <div className="card eggCard">
                    <a href="egg.html">
                        <img src={require("../assets/images/thumbnails/egg-thumb.jpg")} className="card-img-top thumbnail theEgg" alt="animated penguins" />
                        <div className="middle2">
                            <div className="text2">The Egg <br /> Short Animation</div>
                        </div>
                    </a>
                </div>
            </div>
            <div className="col-sm-12 col-md-6 col-centered col-lg-4 col-xl-4 col-centered">
                <div className="card milkCard">
                    <a href="milk.html">
                        <img src={require("../assets/images/thumbnails/milk-thumb.jpg")} className="card-img-top thumbnail milk" alt="girls looking out to sea" />
                        <div className="middle3">
                            <div className="text3">Milk & Vodka <br /> Short Drama</div>
                        </div>
                    </a>
                </div>

            </div>
            <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 col-centered">
                <div className="card loveCard">
                    <a href="lovebytes.html">
                        <img src={require("../assets/images/thumbnails/lovebytes-thumb.jpg")} className="card-img-top thumbnail loveBytes" alt="michael on computer" />
                        <div className="middle4">
                            <div className="text4">Love Bytes <br /> Web Series</div>
                        </div>
                    </a>
                </div>

            </div>
            <div className="col-sm-12 col-md-6 col-centered col-lg-4 col-xl-4 col-centered">
                <div className="card slutCard">
                    <a href="slu.html">
                        <img src={require("../assets/images/thumbnails/slut-thumb.jpg")} className="card-img-top thumbnail slut" alt="posing with cape" />
                        <div className="middle5">
                            <div className="text5">Slut the Musical <br />Comedy</div>
                        </div>
                    </a>
                </div>

            </div>
            <div className="col-sm-12 col-md-6 col-centered col-lg-4 col-xl-4 col-centered">
                <div className="card wallyCard">
                    <a href="wally.html">
                        <img src={require("../assets/images/thumbnails/wally-thumb.jpg")} className="card-img-top thumbnail wally" alt="girl eats cake" />
                        <div className="middle6">
                            <div className="text6">Wally <br />Short Comedy</div>
                        </div>
                    </a>
                </div>

            </div>
            <div className="col-sm-12 col-md-6 col-centered col-lg-4 col-xl-4 col-centered">
                <div className="card viciousCard">
                    <a href="vicious.html">
                        <img src={require("../assets/images/thumbnails/vicious.jpg")} className="card-img-top thumbnail vicious" alt="nurses posing" />
                        <div className="middle7">
                            <div className="text7">The Vicious & the Delicious <br /> Short Comedy</div>
                        </div>
                    </a>
                </div>

            </div>
            <div className="col-sm-12 col-md-6 col-centered col-lg-4 col-xl-4 col-centered">
                <div className="card holdingCard">
                    <a href="holding.html">
                        <img src={require("../assets/images/thumbnails/holding-thumb.jpg")} className="card-img-top thumbnail holding" alt="Holding Hands poster" />
                        <div className="middle8">
                            <div className="text8">Holding Hands <br /> Feature Doco</div>
                        </div>
                    </a>
                </div>

            </div>
            <div className="col-sm-12 col-md-6 col-centered col-lg-4 col-xl-4 col-centered">
                <div className="card whyCard">
                    <a href="why.html">
                        <img src={require("../assets/images/thumbnails/Whyme-thumb.jpg")} className="card-img-top thumbnail why" alt="awkward family pose" />
                        <div className="middle9">
                            <div className="text9">Why Me? <br /> Short Comedy</div>
                        </div>
                    </a>
                </div>

            </div>

        </div>
    </div>
        </div>

    
  );
}

export default Home;
