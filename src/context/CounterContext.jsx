import { createContext, useState } from "react";

export const CounterContext = createContext();

export const CounterProvider = ({ children }) => {
  const [counter, setCounter] = useState(0);
  const onIncrement = () => {
    setCounter((prev) => prev + 1);
  };

  const onDecrement = () => {
    setCounter((prev) => prev - 1);
  };

  return (
    <CounterContext.Provider value={{ counter, onIncrement, onDecrement }}>
      {children}
    </CounterContext.Provider>
  );
};
