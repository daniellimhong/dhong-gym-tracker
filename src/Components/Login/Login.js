import React, { Component } from "react";
import "./Login";
import "../../App.css";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      password: ""
    };
  }

  checkPassword = () => {
    //   console.log(this.state);
    if (this.state.password === "danielhong") {
      this.props.adminTrue();
    } else {
      this.setState({
        password: ""
      });
      alert("Wrong Password. Please try again");
    }
  };

  changeHandler(event) {
    this.setState({
      password: event.target.value
    });
  }

  render() {
    return (
      <div className="LoginContainer">
        <h2>Login</h2>
        <form onSubmit={this.checkPassword}>
          <input
            className="pwInput"
            placeholder="Password"
            type="Password"
            onChange={event => this.changeHandler(event)}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Login;
