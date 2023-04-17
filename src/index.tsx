import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import "./assets/fonts/Roboto-Medium.ttf";
import "./assets/fonts/Roboto-Medium.woff";
import "./assets/fonts/Roboto-Medium.woff2";
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
