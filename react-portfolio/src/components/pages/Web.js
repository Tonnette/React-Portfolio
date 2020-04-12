import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/style.css"
import Carousel from 'react-bootstrap/Carousel';
import CodeCarousel from '../Carousel/CodeCarousel';
import WebBio from '../WebBio';
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
            name={projects[2].name}
        image={projects[2].image}
        alt={projects[2].alt}
        description={projects[2].description}
        url={projects[2].url}
        github={projects[2].github}

        / >

            <WebCards 

            name={projects[3].name}
        image={projects[3].image}
        alt={projects[3].alt}
        description={projects[3].description}
        url={projects[3].url}
        github={projects[3].github}

        / >


            <WebCards 

            name={projects[4].name}
        image={projects[4].image}
        alt={projects[4].alt}
        description={projects[4].description}
        url={projects[4].url}
        github={projects[4].github}

        / >

        <WebCards

            name={projects[5].name}
        image={projects[5].image}
        alt={projects[5].alt}
        description={projects[5].description}
        url={projects[5].url}
        github={projects[5].github}

    
       
        
         />

   

        

       

    </div>
</div>
);
}

export default Web;

   // <ul className="list-group">
   //    {projects.map(item => (
   //      <li className="list-group-item" key={item.id}>
   //        {item.name}
   //        {item.image}
   //        {item.alt}
   //        {item.description}
   //        {item.url}
   //      </li>
   //    ))}
   //  </ul>
