import React, { Component } from "react";
import API from "../utils/API";
import "./index.css";

class Form extends Component {
  state = {
    name: "",
    email: "",
    subject: "",
    message: ""
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    const name = event.target.name;
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (!this.state.name) {
      alert("All fields must be completed");
    }
    console.log(this.state);
    this.setState({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  componentDidMount() {
    this.loadForm();
  }

  loadForm = () => {
    API.getForm()
      .then(res => this.setState({ form: res.data }))
      .catch(err => console.log(err));
  };

  render() {
    return  <div>
      <p>Hello {this.state.name}</p>
      <form className="form">
        <input
          value={this.state.name}
          name="name"
          onChange={this.handleInputChange}
          type="text"
          placeholder="Name"
        />
        <input
          value={this.state.email}
          name="email"
          onChange={this.handleInputChange}
          type="text"
          placeholder="Email"
        />
        <input
          value={this.state.subject}
          name="subject"
          onChange={this.handleInputChange}
          type="text"
          placeholder="Subject"
        />
        <input
          value={this.state.message}
          name="message"
          onChange={this.handleInputChange}
          type="text"
          placeholder="Message"
        />

        <button onClick={this.handleFormSubmit}>Submit</button>
      </form>
    </div>;
  }
}

export default Form;
