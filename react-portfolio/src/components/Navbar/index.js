import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Mynavbar() {
  return (
//     <Navbar bg="light" expand="lg">
//   <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
//   <Navbar.Toggle aria-controls="basic-navbar-nav" />
//   <Navbar.Collapse id="basic-navbar-nav">
//     <Nav className="mr-auto">
//       <Nav.Link href="#home">Home</Nav.Link>
//       <Nav.Link href="#link">Link</Nav.Link>
//       <NavDropdown title="Dropdown" id="basic-nav-dropdown">
//         <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//         <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
//         <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//         <NavDropdown.Divider />
//         <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
//       </NavDropdown>
//     </Nav>
//     <Form inline>
//       <FormControl type="text" placeholder="Search" className="mr-sm-2" />
//       <Button variant="outline-success">Search</Button>
//     </Form>
//   </Navbar.Collapse>
// </Navbar>

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
          <NavDropdown title="Films" id="basic-nav-dropdown">
         <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
         <NavDropdown.Divider />
         <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
       </NavDropdown>
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

export default Mynavbar;
