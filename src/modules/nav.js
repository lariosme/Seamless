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
            <i class="lni lni-menu"></i>
          </Container>
        </div>
        <div className="desktopNav">
          <Row>
            <div className="top">
              <img src={"/assets/logo-uhc-link.svg"} className="logo" />
              <div className="navUtilities">
                <div className="">
                  <Router>
                    <Link>Return to Link Dashboard</Link>
                    <i class="fas fa-xs fa-external-link-alt"></i>
                    <Link>Help</Link>
                    <i class="fas fa-question-circle"></i>
                    <Link>Track It</Link>
                    <i class="fas fa-circle notification"></i>
                    <i class="fas fa-user-circle"></i>
                    <Link>My Account</Link>
                    <i class="fas fa-angle-down"></i>
                  </Router>
                </div>
                <div className="navButtons">
                  <button className="navButton">87726 - UnitedHealthcare<i class="fas fa-angle-down"></i></button>
                  <button className="navButton">Scott Brundle<i class="fas fa-angle-down"></i></button>
                </div>
              </div>
            </div>
          </Row>
          <div className="bottom"></div>
        </div>
      </nav>
    );
  }
}

export default Nav;
