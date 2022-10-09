import React from "react";
import withCounter from "./withCounter";
/*
 * Tap Counter Component
 */
const TapCounter = (props) => {
  const { incrementCounter, count, name } = props;
  return (
    <div>
      <button onClick={incrementCounter}>
        This button was tapped {count} times by {name}
      </button>
    </div>
  );
};

export default withCounter(TapCounter);
