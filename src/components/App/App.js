import React, { Component } from "react";
import "./App.css";

import Nav from "../Nav";
import Header from "../Header";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  // Callbacks go up here

  // HTML

  render() {
    return (
      <div className="App">
        <Nav />
        <Header />
      </div>
    );
  }
}

export default App;
