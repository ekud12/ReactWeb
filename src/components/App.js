import React, { Component } from "react";
import logo from "../logo.svg";
import "./App.css";
import { Hello } from "./header/header";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { text: "" };
  }
  render() {
    return (
      <div className="wrapper">
        <div class="box a">A</div>
        <div class="box b">B</div>
        <div class="box c">C</div>
        <div class="box d">D</div>
        <div class="box e">E</div>
        <div class="box f">F</div>
      </div>
    );
  }
}

export default App;
