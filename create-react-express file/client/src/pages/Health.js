import React, { Component } from "react";
import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";
import Jumbotron from "../components/Jumbotron.js";

class Health extends Component {
  render() {
    return <div>
        <Navbar />
        <Jumbotron title="Health" subtitle="" />
        <div className="container">
          <h2>Health</h2>
          <p>
            Fuel 4 Life Health Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Nunc aliquet diam tortor, id consequat mauris
            ullamcorper eu. Orci varius natoque penatibus et magnis dis
            parturient montes, nascetur ridiculus mus. Pellentesque et dui
            id justo finibus
          </p>
        </div>
        <Footer />
      </div>
  }
}

export default Health;
