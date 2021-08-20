import React from "react";

import Navbar from "./Navbar/Navbar";
import About from "./About/About";
import Portfolio from "./Portfolio/Portfolio";
import Contact from "./Contact/Contact";
import { Switch, Route, HashRouter as Router } from "react-router-dom";

import AppStyle from "./AppStyle.scss";

const App = () => {
  return (
    <div>
      <Router basename="/">
        <Navbar />
        <Switch>
          <Route exact path="/Contact" component={Contact} />
          <Route exact path="/Portfolio" component={Portfolio} />
          <Route exact path="/About" component={About} />
          <Route path="/" component={About} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
