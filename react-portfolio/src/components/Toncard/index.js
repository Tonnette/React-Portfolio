import React from "react";
import { Link } from "react-router-dom";


function Toncard() {
  return (
 <div className="container">
            <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12">
                    <p className="myName">Tonnette Stanford</p>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-5 col-md-5 col-md-offset-1 col-sm-5 col-xs-5 red">
                    <Link
                        to="/"
                        className={
                            window.location.pathname === "/" || window.location.pathname === "/"

                        }
                    >
                        WEB DEVELOPER
            </Link>
                </div>




                <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1 green">
                    <p className="sep">|</p>
                </div>


                <div className="col-lg-4 col-md-5 col-sm-4 col-xs-5 blue">
                    <Link
                        to="/films"
                        className={
                            window.location.pathname === "/films" || window.location.pathname === "/films"

                        }
                    >
                        WRITER/DIRECTOR
            </Link>
                </div>


            </div>
             </div>
  );
}

export default Toncard;
