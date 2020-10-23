// React
import React from "react";

// React Router
// import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

// Pages

// Bootstrap Components

// Components

import { Component } from "react";
import Nav from "./nav";
import CopyBlock from "./copyBlock";
import CardWidget from "./cardWidget";
import Footer from "./footer";

class Home extends Component {
  render() {
    return (
      <div className="home">
        <Nav />
        <CopyBlock />
        <CardWidget />
        <Footer />
      </div>
    );
  }
}

export default Home;
