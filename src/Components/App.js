import React from "react";

import Navbar from "./Navbar/Navbar";
import About from "./About/About";
import Portfolio from "./Portfolio/Portfolio";
import Contact from "./Contact/Contact";

import AppStyle from "./AppStyle.scss";

const App = () => {
  return (
    <div>
      <Navbar />
      <About />
      {/* <Portfolio />
      <Contact /> */}
    </div>
  );
};

export default App;
