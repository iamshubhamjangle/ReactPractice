import React from "react";
import withCounter from "./withCounter";
/*
 * TouchCounter Component
 */
const TouchCounter = (props) => {
  const { incrementCounter, count } = props;

  return (
    <div>
      <h4 onClick={incrementCounter} className="no-select">
        This heading was touched {count} times
      </h4>
    </div>
  );
};

export default withCounter(TouchCounter);
