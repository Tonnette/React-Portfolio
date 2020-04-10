import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/style.css"
import Carousel from 'react-bootstrap/Carousel';
import CodeCarousel from '../Carousel/CodeCarousel';
import WebBio from '../WebBio';
import MovieReview from '../MovieReview';
import Burger from '../Burger';
import Cocktail from '../Cocktail';
import Weather from '../Weather';
import Quiz from '../Quiz';
import Planner from '../Planner';

function Web() {
    return (
  <div className="container">
            <div className="card">
                <div className="card-header">
                    CODING PROJECTS CAROUSEL
                </div>

            </div>

    <div className="container">
    
        <CodeCarousel />

        <WebBio />

        <h1 className="webText">CODING PROJECTS</h1>
        <br></br>
            
        <MovieReview />

        <Burger />

        <Cocktail />

        <Weather />

        <Quiz />

        <Planner />

    </div>
</div>
);
}

export default Web;
