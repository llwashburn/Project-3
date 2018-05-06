
import React, { Component } from "react";
import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";
import Jumbotron from "../components/Jumbotron.js";



class Home extends Component {
    render() {
    return <div>
        <Navbar />
        
        <Jumbotron title="" subtitle="" />
        <div className="container">
          <div className ="row" >
            <div className = "welcome col-md-12">
              <div className ="well">
                <h3>Welcome!</h3>
                  <p>
                   Fuel 4 Life is a group of dedicated women that come together
                   weekly to foster community, accountability and to engage in a
                  great work-out designed for all fitness levels. If you are
                  seeking encouragement, accountability and a community for
                  fitness or nutrition, then Fuel 4 Life is a great place for you!
                  Start your Journey with us today!
              </p>
          </div>
      </div>
  </div>
            
            
      
         
        </div>
        <Footer />
      </div>;
  }
}
    


export default Home;