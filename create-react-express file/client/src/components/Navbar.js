import React, { Component} from "react";
// import { Link } from "react-router-dom";
import "./Navbar.css";

class Navbar extends Component {
    render() {
        return <nav className="navbar navbar-light">
            <div className="container-fluid">
            <div className ="container">
              <div className="navbar-header">
                <a className="navbar-brand" href="/">
                  <a className = "active">Fuel 4 Life</a>
                </a>
              </div>
              <ul className="nav navbar-nav">
                <li className="active">
                  <a href="/about">About</a>
                </li>
                <li>
                  <a href="/fitness">Fitness</a>
                </li>
                <li>
                  <a href="/health">Health</a>
                </li>
                <li>
                  <a href="/contact">Contact</a>
                </li>
              </ul>
              </div>
            </div>
          </nav>;
    }
}

export default Navbar;
