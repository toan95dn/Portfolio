import React from "react";

import Navbar from "./Navbar/Navbar";
import About from "./About/About";
import Portfolio from "./Portfolio/Portfolio";
import Contact from "./Contact/Contact";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  HashRouter,
} from "react-router-dom";

import AppStyle from "./AppStyle.scss";

const App = () => {
  return (
    <div>
      <HashRouter basename="/">
        <Navbar />
        <Switch>
          <Route exact path="/Contact" component={Contact} />
          <Route exact path="/Portfolio" component={Portfolio} />
          <Route exact path="/About" component={About} />
          <Route path="/" component={About} />
        </Switch>
      </HashRouter>
    </div>
  );
};

export default App;
