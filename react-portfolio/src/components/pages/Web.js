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
import WebCards from '../WebCards';
import projects from "./projects.json";

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
            
        <WebCards 

         name={projects[0].name}
        image={projects[0].image}
        alt={projects[0].alt}
        description={projects[0].description}
        url={projects[0].url}
        github={projects[0].github}

        / >
    <WebCards 
         name={projects[1].name}
        image={projects[1].image}
        alt={projects[1].alt}
        description={projects[1].description}
        url={projects[1].url}
        github={projects[1].github}

/ >
    <WebCards 
            name={projects[1].name}
        image={projects[1].image}
        alt={projects[1].alt}
        description={projects[1].description}
        url={projects[1].url}
        github={projects[1].github}

        / >

            <WebCards 

            name={projects[1].name}
        image={projects[1].image}
        alt={projects[1].alt}
        description={projects[1].description}
        url={projects[1].url}
        github={projects[1].github}

        / >


            <WebCards 

            name={projects[1].name}
        image={projects[1].image}
        alt={projects[1].alt}
        description={projects[1].description}
        url={projects[1].url}
        github={projects[1].github}

        / >

        <WebCards

            name={projects[1].name}
        image={projects[1].image}
        alt={projects[1].alt}
        description={projects[1].description}
        url={projects[1].url}
        github={projects[1].github}

    
       
        
         />

       

    </div>
</div>
);
}

export default Web;
