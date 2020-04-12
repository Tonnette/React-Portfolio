import React from "react";
import "./style.css";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Mynavbar() {
  return (

<Navbar expand="lg sticky-top" style={{backgroundColor:"#00c0d1"}}>
 <Navbar.Toggle aria-controls="basic-navbar-nav"   />
    <Navbar.Collapse id="basic-navbar-nav" >
     <Nav className="mr-auto" className="centredNav" >
       <Nav.Link href="/home">Home</Nav.Link>
       <Nav.Link href="/">Web</Nav.Link>
       <NavDropdown title="Films" id="basic-nav-dropdown" class="collapse navbar-collapse justify-content-center order-2">
         <NavDropdown.Item href="egg">The Egg</NavDropdown.Item>
        <NavDropdown.Item href="front">Frontbum Dancin'</NavDropdown.Item>
        <NavDropdown.Item href="holding">Holding Hands</NavDropdown.Item>
         <NavDropdown.Item href="lovebytes">Love Bytes</NavDropdown.Item>
          <NavDropdown.Item href="milk">Milk & Vodka</NavDropdown.Item>
           <NavDropdown.Item href="romp">Romp the Web Series</NavDropdown.Item>
            <NavDropdown.Item href="slut">Slut - The Musical</NavDropdown.Item>
             <NavDropdown.Item href="tina">Tina Sol</NavDropdown.Item>
              <NavDropdown.Item href="vicious">The Vicious & the Delicious</NavDropdown.Item>
               <NavDropdown.Item href="wally">Wally</NavDropdown.Item>
                <NavDropdown.Item href="whyme">Why Me?</NavDropdown.Item>
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
