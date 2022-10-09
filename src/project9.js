// Project 9: create a counter
import React from "react";

const Project9 = () => {
  const [count, setCount] = React.useState(0);

  return (
    <div className="project">
      <h3>Project 9: create a counter</h3>
      <p>Counter: {count}</p>
      <button className="mr1" onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <button className="mr1" onClick={() => setCount(count - 1)}>
        Decrement
      </button>
    </div>
  );
};

export default Project9;
