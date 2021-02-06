import React from "react";
import ReactDOM from "react-dom";
import "./style.scss";
import App from "./components/App";

ReactDOM.render(
  <React.StrictMode>
    <App title="The GitHub Cards App" />
  </React.StrictMode>,
  document.getElementById("root")
);
