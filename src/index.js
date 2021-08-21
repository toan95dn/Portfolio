import React from "react";
import ReactDom from "react-dom";
import { HashRouter as Router } from "react-router-dom";

import App from "./Components/App";

ReactDom.render(
  <Router basename="/">
    <App />
  </Router>,
  document.getElementById("root")
);
