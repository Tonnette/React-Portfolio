import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';


// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Mynavbar() {
  return (

<Navbar expand="lg sticky-top" style={{backgroundColor:"#00c0d1"}}>
 <Navbar.Toggle aria-controls="basic-navbar-nav"   />
    <Navbar.Collapse id="basic-navbar-nav" >
     <Nav className="mr-auto" className="centredNav" >
       <Nav.Link href="/home">Home</Nav.Link>
       <Nav.Link href="/">Web</Nav.Link>
       <NavDropdown title="Films" id="basic-nav-dropdown" class="collapse navbar-collapse justify-content-center order-2">
         <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
         <NavDropdown.Divider />
         <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
       </NavDropdown>
       <Nav.Link href="/screenings">Screenings</Nav.Link>
       <Nav.Link href="/awards">Awards</Nav.Link>
       <Nav.Link href="/contact">Contact</Nav.Link>
      </Nav>
      </Navbar.Collapse>

</Navbar>

  
  );
}

export default Mynavbar;
