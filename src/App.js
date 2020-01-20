import React, { Component } from "react";
import Login from "./Components/Login";
import Header from "./Components/Header";
import Tracker from "./Components/Tracker";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      admin: false
    };
  }

  adminTrue = () => {
    this.setState({
      admin: true
    });
  };

  render() {
    const { admin } = this.state;
    console.log(admin);

    return (
      <div className="App">
        <Header />
        {admin === false && <Login adminTrue={this.adminTrue} />}
        {admin === true && <Tracker />}
      </div>
    );
  }
}

export default App;
