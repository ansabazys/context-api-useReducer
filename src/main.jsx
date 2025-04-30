import { createRoot } from "react-dom/client";
import "./styles/globals.css";
import App from "./App.jsx";
import { CounterProvider } from "./context/CounterContext.jsx";

createRoot(document.getElementById("root")).render(
  <CounterProvider>
    <App />
  </CounterProvider>
);
