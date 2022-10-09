// Project 3: Show/Hide element on button click
import React from "react";

const Project3 = () => {
  const [isVisible, SetIsVisible] = React.useState(true);

  return (
    <div className="project">
      <h3>Project 3: Show/Hide element on button click</h3>
      {isVisible && <p>This Paragraph should toggle hidden on button click</p>}
      <button onClick={() => SetIsVisible(!isVisible)}>Show/Hide</button>
    </div>
  );
};

export default Project3;
