/**
 * This is the HOC Component - This will take a original component and return an enhanced component.
 * This function will add the common functionality needed by both component which is state:count, increment count
 * If a prop is sent to Children of HOC it will first come to HOC. In this case if prop sent from project11.js
 * It will first be passed to withCounter.js hence we should use ...props to pass it down to children
 */
import React from "react";

const withCounter = (OriginalComponent, step) => {
  const newComponent = (props) => {
    // console.log(props);
    const [count, setCount] = React.useState(0);

    const incrementCounter = () => {
      setCount(count + step);
    };

    return (
      <OriginalComponent
        incrementCounter={incrementCounter}
        count={count}
        {...props}
      />
    );
  };
  return newComponent;
};

export default withCounter;
