import React, { useContext, useReducer } from "react";
import "./Counter.css";
import { counterReducer } from "./counterReducer.js";
import { CounterContext } from "../../context/CounterContext.jsx";



export const Counter = () => {

  const { state, dispatch } = useContext(CounterContext)

  return (
    <div className="container">
      <h1>{state.count}</h1>
      <div className="button-container">
        <button onClick={() => dispatch({ type: "decrement" })}>-</button>
        <button onClick={() => dispatch({ type: "increment" })}>+</button>
        <button onClick={() => dispatch({ type: "reset" })}>reset</button>
        <button
          onClick={() =>
            dispatch({
              type: "decrement_by",
              payload: {
                count: 5,
              },
            })
          }
        >
          on decrement by 5
        </button>
        <button
          onClick={() =>
            dispatch({
              type: "increment_by",
              payload: {
                count: 10,
              },
            })
          }
        >
          on increment by 10
        </button>
      </div>
      {state.error && <p>{state.error}</p>}
    </div>
  );
};
