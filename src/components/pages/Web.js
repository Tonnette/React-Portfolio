import React from "react";
import "../assets/css/style.css"
import CodeCarousel from '../Carousel/CodeCarousel';
import WebBio from '../WebBio';
import Webcard from '../Webcard';
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

                <div className="container">
                    <br></br>
                    {projects.map(item => (
                        <div className="card" key={item.id}>

                            <div className="card-header">
                                {item.name}
                            </div>
                            <br></br>

                            <div className="col-lg-8 offset-lg-2 col-md-8 offset-md-2 col-sm-12">
                                <p className="myText">
                                    <a href={item.url} target="_blank">
                                        <img className="float-left mr-2 mb-1 myImage" src={item.image}
                                            alt={item.alt} />
                                    </a>
                                    {item.description}
                                </p>
                                <div className="profileButton">
                                    <a href={item.url} target="_blank"
                                        className="btn btn-outline-info">{item.name} App</a> &nbsp;
                                        <a href={item.github} target="_blank"
                                        className="btn btn-outline-info">Github Repo</a> &nbsp;
                                    </div>
                            </div>

                            <br></br>
                        </div>

                    ))}
                </div>










            </div>
        </div>
    );
}

export default Web;
