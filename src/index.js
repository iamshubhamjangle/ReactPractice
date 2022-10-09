import React from "react";
import ReactDOM from "react-dom";
import Project1 from "./project1";
import Project2 from "./project2";
import Project3 from "./project3";
import Project4 from "./project4";
import Project5 from "./project5";
import Project6 from "./project6";
import Project7 from "./project7";
import Project8 from "./project8";
import Project9 from "./project9";
import Project10 from "./project10";
import Project11 from "./project11/project11";
import "./style.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <Project1 />
        <Project2 />
        <Project3 />
        <Project4 />
        <Project5 />
        <Project6 />
        <Project7 />
        <Project8 />
        <Project9 />
        <Project10 />
        <Project11 />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("container"));
