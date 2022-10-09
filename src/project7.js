// Access nested children from parent
import React from "react";

function Project7() {
  return (
    <div className="project">
      <h3>Project 7: Access nested children from parent</h3>
      <Parent>
        <Child />
      </Parent>
    </div>
  );
}

const Parent = (props) => {
  return (
    <div>
      This is the parent component
      {props.children}
    </div>
  );
};

const Child = () => {
  return <div>This is the child component</div>;
};

export default Project7;
