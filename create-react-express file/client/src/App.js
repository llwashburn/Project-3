import React, { Component } from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
// import logo from "./logo.svg";
import "./App.css";



import Home from "./pages/Home.js";
import About from "./pages/About.js";
import Fitness from "./pages/Fitness.js";
import Health from "./pages/Health.js";
import Contact from "./pages/Contact.js";


class App extends Component {
  render() {
    return <Router>
        <div>
          <Route exact path ="/" component={Home} />
          <Route path ="/about" component={About} />
          <Route path ="/fitness" component={Fitness} />
          <Route path ="/health" component={Health} />
          <Route path ="/contact" component={Contact} />
        </div>
      </Router>;
  }
}

export default App;
