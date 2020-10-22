// React
import React, { Component } from "react";

// React Router
import { BrowserRouter as Router, Link } from "react-router-dom";

// Pages

// Bootstrap Components
import { Col, Container, Row } from "react-bootstrap";

class Nav extends Component {
  render() {
    return (
      <nav>
        <div className="mobileNav">
          <Container>
            <img src={"/assets/logo-uhc-link-white.svg"} className="logo" />
          </Container>
        </div>
        <div className="desktopNav">
          <Row>
            <div className="top">
              <img src={"/assets/logo-uhc-link.svg"} className="logo" />
            </div>
          </Row>
        </div>
      </nav>
    );
  }
}

export default Nav;
