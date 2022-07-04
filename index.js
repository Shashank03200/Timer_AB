import React from "react";
import ReactDOM from "react-dom";
import TimerList from "./TimerList";
import "./styles.css";

import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <TimerList />
    {/* <Timer /> */}
  </React.StrictMode>,
  document.getElementById("root")
);
