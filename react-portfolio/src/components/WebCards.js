import React from "react";
import "./assets/css/style.css"
import projects from "./pages/projects.json";



function WebCards(props) {
    return (
<div className="container">
    <div className="card">
        <div className="card-header">
                    {props.name}
        </div>
    </div>
                <div className="row">
                    <div className="col-lg-8 col-md-8 col-sm-12">
                        
                                    <p className="myText">

  


                                        <a href={props.url} target="_blank">
                                            <img className="float-left mr-2 mb-1 myImage" src={props.image}
                                                alt={props.alt} />
                                               

                                        </a>
                                          {props.description}  
                                        </p>
                                    <div className="profileButton">
                                        <a href={props.url} target="_blank"
                                            className="btn btn-outline-info">{props.name} App</a> &nbsp;
                                <a href={props.github} target="_blank"
                                            className="btn btn-outline-info">Github Repo</a> &nbsp;


                            </div>

                                </div>
                 
                </div>
          



</div>


);
}
export default WebCards;
