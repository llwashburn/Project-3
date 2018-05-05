import React, { Component } from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";

import "./App.css";
// import injectTapEventPlugin from 'react-tap-event-plugin';



import Home from "./pages/Home.js";
import About from "./pages/About.js";
import Fitness from "./pages/Fitness.js";
import Health from "./pages/Health.js";
import Contact from "./pages/Contact.js";
import Testimonal from "./pages/Testimonial.js";

import LoginPage from './pages/LoginPage.js';
// import LogoutFunction from './pages/LogoutFunction.jsx';
// import SignUpPage from './pages/SignUpPage.jsx';
// import DashboardPage from './pages/DashboardPage.jsx';

// import Auth from './utils/Auth';


class App extends Component {
  render() {
    return <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/fitness" component={Fitness} />
          <Route path="/health" component={Health} />
          <Route path="/contact" component={Contact} />
          <Route path="/testimonial" component={Testimonal} />
          <Route path="/loginpage" component={LoginPage}/>
        </div>
      </Router>;
  }
}

export default App;




