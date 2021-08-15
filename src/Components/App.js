import React from "react";

import Navbar from "./Navbar/Navbar";
import About from "./About/About";

import AppStyle from "./AppStyle.scss";

const App = () => {
  return (
    <div>
      <Navbar />
      <About />
    </div>
  );
};

export default App;
