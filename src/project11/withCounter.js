/**
 * This is the HOC Component - This will take a original component and return an enhanced component.
 * This function will add the common functionality needed by both component which is state:count, increment count
 */
import React from "react";

const withCounter = (OriginalComponent) => {
  const newComponent = () => {
    const [count, setCount] = React.useState(0);

    const incrementCounter = () => {
      setCount(count + 1);
    };

    return (
      <OriginalComponent incrementCounter={incrementCounter} count={count} />
    );
  };
  return newComponent;
};

export default withCounter;
