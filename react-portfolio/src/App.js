import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Web from "./components/pages/Web";
import Home from "./components/pages/Home";
import Films from "./components/pages/Films";
import Screenings from "./components/pages/Screenings";
import Awards from "./components/pages/Awards";
import Contact from "./components/pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
// import Wrapper from "./components/Wrapper";


function App() {
  return (
<Router>
      <div>
        <Navbar />
       
          <Route exact path="/" component={Web} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/films" component={Films} />
          <Route exact path="/screenings" component={Screenings} />
          <Route exact path="/awards" component={Awards} />
          <Route exact path="/contact" component={Contact} />
        
        <Footer />
      </div>
    </Router>


  ) 
}

export default App;
