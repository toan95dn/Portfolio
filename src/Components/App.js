import React from "react";

import Navbar from "./Navbar/Navbar";
import About from "./About/About";
import Portfolio from "./Portfolio/Portfolio";

import AppStyle from "./AppStyle.scss";

const App = () => {
  return (
    <div>
      <Navbar />
      {/* <About /> */}
      <Portfolio />
    </div>
  );
};

export default App;
