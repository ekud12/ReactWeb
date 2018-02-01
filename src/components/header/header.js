import React, { Component } from "react";
import styles from './header.css';

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className="main">{this.props.name}</div>;
  }
}

export default Header;
