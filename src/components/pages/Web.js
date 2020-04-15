import React from "react";
import "../assets/css/style.css"
import CodeCarousel from '../Carousel/CodeCarousel';
import WebBio from '../WebBio';
import Webcard from '../Webcard';

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

                <Webcard 
                
                
                />


            </div>
        </div>
    );
}

export default Web;
