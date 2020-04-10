import React from "react";
import { Link } from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel';


function MovieCarousel() {
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
</div>


  );
}

export default MovieCarousel;
