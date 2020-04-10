import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Web from "./components/pages/Web";
import Home from "./components/pages/Home";
import Films from "./components/pages/Films";
import Screenings from "./components/pages/Screenings";
import Awards from "./components/pages/Awards";
import Contact from "./components/pages/Contact";
import Egg from "./components/pages/Egg";
import Front from "./components/pages/Front";
import Holding from "./components/pages/Holding";
import Lovebytes from "./components/pages/Lovebytes";
import Milk from "./components/pages/Milk";
import Romp from "./components/pages/Romp";
import Slut from "./components/pages/Slut";
import Tina from "./components/pages/Tina";
import Vicious from "./components/pages/Vicious";
import Wally from "./components/pages/Wally";
import Why from "./components/pages/Why";
import Mynavbar from "./components/Navbar";
import Toncard from "./components/Toncard";
import Footer from "./components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
// import Wrapper from "./components/Wrapper";


function App() {
  return (
<Router>
      <div>
        <Mynavbar />
       <Toncard />
          <Route exact path="/" component={Web} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/films" component={Films} />
          <Route exact path="/screenings" component={Screenings} />
          <Route exact path="/awards" component={Awards} />
          <Route exact path="/contact" component={Contact} />
            <Route exact path="/egg" component={Egg} />
              <Route exact path="/front" component={Front} />
                <Route exact path="/holding" component={Holding} />
                  <Route exact path="/lovebytes" component={Lovebytes} />
                    <Route exact path="/milk" component={Milk} />
                      <Route exact path="/romp" component={Romp} />
                        <Route exact path="/slut" component={Slut} />
                          <Route exact path="/tina" component={Tina} />
                            <Route exact path="/vicious" component={Vicious} />
                              <Route exact path="/wally" component={Wally} />
                                <Route exact path="/why" component={Why} />

        
        <Footer />
      </div>
    </Router>


  ) 
}

export default App;