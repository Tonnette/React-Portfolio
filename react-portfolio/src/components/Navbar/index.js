import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (

    <nav class="navbar navbar-light navbar-expand-lg sticky-top myNav" style={{backgroundColor:"#00c0d1"}}>

      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-center order-2" id="navbarNavDropdown">
            <ul class="navbar-nav">

                <li class="nav-item">
                <Link
              to="/home"
              className={
                window.location.pathname === "/home" || window.location.pathname === "/about"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Home
            </Link>
                
                </li>

                <li className="nav-item">
            <Link
              to="/"
              className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}
            >
             Web Projects
            </Link>
          </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Films
                    </a>
                    {/* <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <a class="dropdown-item" href="romp.html">Romp</a>
                        <a class="dropdown-item" href="lovebytes.html">Love Bytes</a>
                        <a class="dropdown-item" href="egg.html">The Egg</a>
                        <a class="dropdown-item" href="milk.html">Milk and Vodka</a>
                        <a class="dropdown-item" href="slu.html">Slut - The Musicl</a>
                        <a class="dropdown-item" href="holding.html">Holding Hands</a>
                        <a class="dropdown-item" href="why.html">Why Me?</a>
                        <a class="dropdown-item" href="vicious.html">The Vicious and the Delicious</a>
                        <a class="dropdown-item" href="front.html">Frontbum Dancin'</a>
                        <a class="dropdown-item" href="wally.html">Wally</a>
                        <a class="dropdown-item" href="tina.html">Tina Sol</a>
                    </div> */}
                </li>
                <li className="nav-item">
                <Link
              to="/screenings"
              className={window.location.pathname === "/screenings" ? "nav-link active" : "nav-link"}
            >
              Screenings
            </Link>
           
          </li>
          <li className="nav-item">
            <Link
              to="/awards"
              className={window.location.pathname === "/awards" ? "nav-link active" : "nav-link"}
            >
              Awards
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/contact"
              className={window.location.pathname === "/contact" ? "nav-link active" : "nav-link"}
            >
              Contact
            </Link>
          </li>
                
         
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
