import React, { Component } from "react";
import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";
// import Jumbotron from "../components/Jumbotron.js";
// import Form from "../components/Form.js";
// import Field from "../components/Field.js";
// import Button from "../components/Button.js";


class Contact extends Component {
    render() {
    return <div>
        <Navbar/>
        {/* <Jumbotron title="Contact" subtitle=""/> */}
        <div className="container">
          <h2>Fuel 4 Life</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            aliquet diam tortor, id consequat mauris ullamcorper eu. Orci
            varius natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus. Pellentesque et dui id justo finibus
          </p>
        </div>
        <Footer/>
      </div>
    }
}

export default Contact;
