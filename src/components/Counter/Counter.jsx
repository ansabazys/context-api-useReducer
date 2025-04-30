import React, { useContext } from "react";
import { Button } from "../Button/Button";
import "./Counter.css";
import { CounterContext } from "../../context/CounterContext";

export const Counter = () => {
  const { counter, onIncrement, onDecrement } = useContext(CounterContext);
  return (
    <div className="container">
      <h1>{counter}</h1>
      <div className="button-container">
        <Button value="-" handleClick={onDecrement} />
        <Button value="+" handleClick={onIncrement} />
      </div>
    </div>
  );
};
