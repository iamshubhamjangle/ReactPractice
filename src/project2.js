// Project 2: This is the copy of project 1 in functional component
import React, { useState } from "react";

const Project2 = () => {
  const [name, setName] = useState("Enter Something Below");

  return (
    <div className="project">
      <h3>Project 2: This is the copy of project 1 in functional component</h3>
      <p>
        Whatever you type in the text box below reflects here:
        <b>{name}</b>
      </p>
      <input type="text" onChange={(e) => setName(e.target.value)} />
    </div>
  );
};

export default Project2;
