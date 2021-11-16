import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-light bg-light">
          <div className="container-fluid">
            <h3>There are {this.props.counters.length} Counters</h3>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
