// Project 1: Class Component:  Whatever you type in the text box below reflects here: above

import React, { Component } from "react";

class Project1 extends Component {
  constructor() {
    super();
    this.state = {
      name: "Enter Something Below",
    };
  }

  onNameSubmit = (name) => {
    this.setState({
      name: name,
    });
  };

  render() {
    return (
      <div className="project">
        <h3>
          Project 1: Class Component: Whatever you type in the text box below
          reflects here: above
        </h3>
        <p>
          Whatever you type in the text box below reflects here:{" "}
          <b>{this.state.name}</b>
        </p>
        <div>
          <input
            type="text"
            onChange={(e) => this.onNameSubmit(e.target.value)}
          />
        </div>
      </div>
    );
  }
}

export default Project1;
