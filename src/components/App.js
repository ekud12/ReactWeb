import React, { Component } from "react";
import logo from "../logo.svg";
import "./App.css";
import Header from "./header/header";

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
        <Header name="Liel" />
    );
  }
}

export default App;
