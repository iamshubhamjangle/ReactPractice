// Update a state in Parent from child
import React from "react";

const Project6 = () => {
  // this is parent component
  const [text, setText] = React.useState("Update Me!");

  return (
    <div className="project">
      <h3>Project 6: Update a state in Parent from child</h3>
      <p>I am a parent text paragraph.</p>
      <p>{text}</p>
      <Child setText={setText} />
    </div>
  );
};

const Child = ({ setText }) => {
  return (
    <div>
      <hr />
      <p>I am a child component</p>
      <button onClick={() => setText("Hey you are updated from child!")}>
        Click here to update parent data!
      </button>
    </div>
  );
};

export default Project6;
