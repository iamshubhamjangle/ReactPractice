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
import Project12 from "./project12";
import Project13 from "./project13";
import Project14 from "./project14/project14";
import Project15 from "./project15";
import Project16 from "./project16";
import "./style.css";

class App extends React.Component {
  render() {
    return (
      <div className="my2">
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
        <Project12 />
        <Project13 />
        <Project14 />
        <Project15 />
        <Project16 />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("container"));
