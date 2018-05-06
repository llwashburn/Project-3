import React, { Component} from "react";
import {Link} from "react-router-dom";
import "./index.css";



class Navbar extends Component {
    render() {
        return <nav className="navbar navbar-light">
            <div className="container-fluid">
              <div className="container">
                
                
                <Link className="navbar-header" to="/">
                Fuel 4 Life
                </Link>

                <ul className="nav navbar-nav">
                  <li className={window.location.pathname === "/about" ? "active" : ""}>
                    <Link to="/about">About</Link>
                  </li>

                  <li className={window.location.pathname === "/fitness" ? "active" : ""}>
                    <Link to="/fitness">Fitness</Link>
                  </li>

                  <li className={window.location.pathname === "/health" ? "active" : ""}>
                    <Link to="/health">Health</Link>
                  </li>

                  <li className={window.location.pathname === "/contact" ? "active" : ""}>
                    <Link to="/contact">Contact</Link>
                  </li>

                  <li className={window.location.pathname === "/testimonal" ? "active" : ""}>
                    <Link to="/testimonial">Client Love</Link>
                  </li>
                
                <li className={window.location.pathname ==="/loginpage" ? "active" : ""}>
                <Link to ="/loginpage">Login</Link>
                </li>

                  <li>
                    <a href="https://www.facebook.com/groups/1700296396901242/" className="fa fa-facebook" />
                  </li>
                  <li>
                    <a href="https://www.instagram.com/isagenix/" className="fa fa-instagram" />
                  </li>
                  <li>
                    <a href="https://www.pinterest.com/isagenix" className="fa fa-pinterest" />
                  </li>
                </ul>
              </div>
            </div>
          </nav>
    }
}

export default Navbar;
