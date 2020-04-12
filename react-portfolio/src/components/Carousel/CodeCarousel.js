import React from "react";
import "../assets/css/style.css"
import Carousel from 'react-bootstrap/Carousel';


function CodeCarousel() {
  return (

        <Carousel>
            <Carousel.Item>
    <img
      className="d-block w-80"
     src={require("../assets/images/carousel/mixer.jpg")} className="d-block w-100" 
     alt="girls sitting on jetty" />
    
  
  </Carousel.Item>

    <Carousel.Item>
    <img
      className="d-block w-80"
     src={require("../assets/images/carousel/movies.jpg")} className="d-block w-100" 
     alt="man in a cape" />
    
  
  </Carousel.Item>

    <Carousel.Item>
    <img
      className="d-block w-80"
     src={require("../assets/images/carousel/quiz.jpg")} className="d-block w-100" 
     alt="animated penguin in snow" />
    
  
  </Carousel.Item>

    

    <Carousel.Item>
    <img
      className="d-block w-80"
     src={require("../assets/images/carousel/schedule.jpg")} className="d-block w-100" 
     alt="man in bed with mayo on his face" />
 
  </Carousel.Item>

   <Carousel.Item>
    <img
      className="d-block w-80"
     src={require("../assets/images/carousel/weather.jpg")} className="d-block w-100" 
     alt="Nurses" />
    

  </Carousel.Item>

   
</Carousel>







  );
}

export default CodeCarousel;
