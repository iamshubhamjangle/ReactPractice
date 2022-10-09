/*
 * Project 11: Counter - The Higher Order Component
 */
import React from "react";
import TapCounter from "./TapCounter";
import TouchCounter from "./TouchCounter";

const Counter = () => {
  return (
    <div className="project">
      <h3>Project 11: Counter - The Higher Order Component</h3>
      <TapCounter />
      <TouchCounter />
    </div>
  );
};

export default Counter;
