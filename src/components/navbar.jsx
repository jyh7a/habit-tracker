import React, { Component } from "react";

export class Navbar extends Component {
  render() {
    console.log("Navbar");
    return (
      <nav className="navbar">
        <i className="navbar-logo fas fa-leaf"></i>
        <span>Habit Tracker</span>
        <span className="navbar-count">{this.props.totalCount}</span>
      </nav>
    );
  }
}

export default Navbar;
