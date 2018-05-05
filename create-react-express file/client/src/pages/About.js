import React, { Component } from "react";
import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";




class About extends Component {
  render() {
    return <div>
        <Navbar />
        
        <div className="container">
            <h2>About</h2>
            <p>
              FuelFitness is a group of dedicated women that come together
              weekly to foster community, accountability and to engage in a
              great work-out designed for all fitness levels. If you are
              seeking encouragement, accountability and a community for
              fitness or nutrition, then this group is a great place for
              you. Believing in yourself with a team motivated by the same
              goals is crucial for any stage of life. If you want to be
              challenged and encouraged in a community focused on better
              health through nutrition and fitness, then FuelFitness is for
              you! The team meets right after school drop-off and lasts one
              hour. We also get together at local venues throughout the year
              for coffee or food to foster fellowship. Fuel for life is
              dedicated to bring fitness and nutrition to the lives of MOMS
              and all WOMEN, so we can take care of the ones we love most.
            </p>
          
        </div>
        <Footer />
      </div>;
  }
}

export default About;
