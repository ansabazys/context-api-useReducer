import { createContext, useReducer, useState } from "react";
import { counterReducer } from "../components/Counter/counterReducer";

export const CounterContext = createContext();

export const CounterProvider = ({ children }) => {
    const [state, dispatch] = useReducer(counterReducer, {
        count: 0,
        error: "",
      });

  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      {children}
    </CounterContext.Provider>
  );
};
