// Disable the button when input is empty
import React from "react";

class Project5 extends React.Component {
  constructor() {
    super();
    this.state = {
      isInputEmpty: true
    };
  }

  processInput = (text) => {
    let isInputEmpty;

    if (text.length === 0) isInputEmpty = true;
    else isInputEmpty = false;

    this.setState({
      isInputEmpty: isInputEmpty
    });
  };

  render() {
    const { isInputEmpty } = this.state;

    return (
      <div className="project">
        <h3>Project 5: Disable the button when input is empty</h3>
        <input
          type="text"
          onChange={(e) => this.processInput(e.target.value)}
        />
        <button disabled={isInputEmpty}>Submit</button>
      </div>
    );
  }
}

export default Project5;
