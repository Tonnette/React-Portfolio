import React from "react";
import "../assets/css/style.css"
import Carousel from 'react-bootstrap/Carousel';
import MovieCarousel from '../Carousel/MovieCarousel';
import HomeMovies from '../HomeMovies';

function Home() {
  return (

<div className="container">

<MovieCarousel />

<HomeMovies />

    
</div>

    
  );
}

export default Home;
