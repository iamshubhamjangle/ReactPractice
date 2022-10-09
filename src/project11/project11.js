/**
 * Project 11: Counter - The Higher Order Component
 * Create two component TouchCounter, TapCounter. Both will share an incrementCount and count:state as common.
 * Use HOC to implement this.
 * Further add a step function which will be passed from TouchCounter & TapCounter component. This will be used as a step for counter
 * Pass some props like name="Shubham" from parent. HOC will receive this make sure this is passed down to TapCounter.
 */
import React from "react";
import TapCounter from "./TapCounter";
import TouchCounter from "./TouchCounter";

const Counter = () => {
  return (
    <div className="project">
      <h3>Project 11: Counter - The Higher Order Component</h3>
      <TapCounter name="Shubham" />
      <TouchCounter />
    </div>
  );
};

export default Counter;
