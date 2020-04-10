import React from "react";
import "./assets/css/style.css"


function Burger() {
    return (
<div className="container">
    <div className="card">
        <div className="card-header">
                    MOVIE REVIEW WEBSITE
        </div>


    </div>


            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-8 col-sm-12">
                        <div className="container myContainer myContainerIndex">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                         
                            </div>

                            <div className="row myRow-2">
                                <div className="col-lg-12 col-md-12 col-sm-12">
                                    <p className="myText">


                                        <a href="https://peaceful-savannah-89179.herokuapp.com/" target="_blank">
                                            <img className="float-left mr-2 mb-1 myImage" src={require("./assets/images/Burger.png")}
                                                alt="screenshot of Burger App" />

                                        </a>




                                This app allows the user to name all the burgers they want to eat. They can then choose
                                to devour which every burger they want.
                                After they devour their burger, they can then choose to delete the item.
                                This burger app was built using MySQL, Node, Express, Handlebars and ORM.



                            </p>
                                    <div className="profileButton">
                                        <a href="https://peaceful-savannah-89179.herokuapp.com/" target="_blank"
                                            className="btn btn-outline-info">Eat De Burger App</a> &nbsp;
                                <a href="https://github.com/Tonnette/burger-project" target="_blank"
                                            className="btn btn-outline-info">Github Repo</a> &nbsp;


                            </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>




</div>


);
}
export default Burger;
