import React from "react";
import "./assets/css/style.css"
import movies from "./pages/movies.json";


function HomeMovies(props) {
    return (

                <div className={props.whichCard}>
                    <a href={props.url}>
                        <img src={props.image} className="card-img-top thumbnail {props.classy}" alt="{props.alt}" />
                        <div className={props.theClass}>
                            <div className="text1">{props.description}</div>
                        </div>
                    </a>
                </div>
            
            
     
);
}
export default HomeMovies;
