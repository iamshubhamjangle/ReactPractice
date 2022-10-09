import React from "react";
import withCounter from "./withCounter";
/*
 * Tap Counter Component
 */
const TapCounter = (props) => {
  const { incrementCounter, count } = props;
  return (
    <div>
      <button onClick={incrementCounter}>
        This button was tapped {count} times
      </button>
    </div>
  );
};

export default withCounter(TapCounter);
