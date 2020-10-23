// React
import React from "react";

// React Router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Pages
import Home from "./home";
import Sandbox from "./sandbox";

// Bootstrap Components

// Components

import { Component } from "react";
import NavAlt from "./navAlt";
import CardSignIn from "./cardSignIn";
import FooterAlt from "./footerAlt";

// Page Content

class App extends Component {
  render() {
    return (
      <div className="app">
        <Router>
          <Switch>
            <Route path="/" exact component={CardSignIn} />
            <Route path="/home" component={Home} />
            <Route path="/sandbox" component={Sandbox} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
