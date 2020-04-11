import React from "react";
import "../assets/css/style.css"
import Carousel from 'react-bootstrap/Carousel';
import MovieCarousel from '../Carousel/MovieCarousel';
import HomeMovies from '../HomeMovies';
import movies from "./movies.json";

function Home() {
  return (

<div className="container">

<MovieCarousel />

<HomeMovies

name={movies[0].name}
image={movies[0].image}
alt={movies[0].alt}
description={movies[0].description}
url={movies[0].url}
whichCard={movies[0].whichCard}
theClass={movies[0].theClass}
classy={movies[0].classy}

 

 />


    
</div>

    
  );
}

export default Home;
