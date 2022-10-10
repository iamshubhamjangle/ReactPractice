// Project 12 - React Lifecycle methods
import React from "react";

class Project12 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log("CONSTRUCTOR");
  }

  componentDidMount() {
    console.log("COMPONENT_DID_MOUNT");
    // this.timerID = setInterval(() => this.tick(), 1000);
    // API calls
  }

  shouldComponentUpdate() {
    console.log("SHOULD_COMPONENT_UPDATE");
    return true;
  }

  componentWillUpdate() {
    console.log("COMPONENT_WILL_UPDATE");
  }

  componentDidUpdate() {
    console.log("COMPONENT_DID_UPDATE");
  }

  componentWillUnmount() {
    console.log("COMPONENT_WILL_UNMOUNT");
    // clearInterval(this.timerID);
  }

  setCount = (cnt) => {
    this.setState({
      count: cnt,
    });
  };

  render() {
    console.log("RENDER");
    const { count } = this.state;
    return (
      <div className="project">
        <h3>Project 12 - React Lifecycle methods</h3>
        <ol>
          <li>CONSTRUCTOR</li>
          <li>RENDER</li>
          <li>COMPONENT_DID_MOUNT - api calls/setTimer</li>
          <li>SHOULD_COMPONENT_UPDATE</li>
          <li>COMPONENT_WILL_UPDATE</li>
          <li>RENDER</li>
          <li>COMPONENT_DID_UPDATE</li>
          <li>COMPONENT_WILL_UNMOUNT - clearInterval()</li>
        </ol>
        <p>Counter: {count}</p>
        <button className="mr1" onClick={() => this.setCount(count + 1)}>
          Increment
        </button>
        <button className="mr1" onClick={() => this.setCount(count - 1)}>
          Decrement
        </button>
      </div>
    );
  }
}

export default Project12;
