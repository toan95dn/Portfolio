import React, { useEffect } from "react";

import Navbar from "./Navbar/Navbar";
import About from "./About/About";
import Portfolio from "./Portfolio/Portfolio";
import Contact from "./Contact/Contact";
import { Switch, Route, useLocation } from "react-router-dom";

import AppStyle from "./AppStyle.scss";

import { AnimatePresence } from "framer-motion";

const App = () => {
  const location = useLocation();

  return (
    <div>
      <Navbar />
      <AnimatePresence>
        <Switch location={location} key={location.pathname}>
          <Route exact path="/Contact" component={Contact} />
          <Route exact path="/Portfolio" component={Portfolio} />
          <Route exact path="/About" component={About} />
          <Route path="/" component={About} />
        </Switch>
      </AnimatePresence>
    </div>
  );
};

export default App;
