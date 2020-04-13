import React from "react";
import projects from "./pages/projects.json";

// Whenever we try to render an array containing JSX, React knows to render each JSX element separately
function Webcard(props) {
  return (
    <div className="container">
                    <br></br>
                    {props.projects.map(item => (
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
  );
}

export default Webcard;
