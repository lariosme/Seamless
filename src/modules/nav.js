// React
import React, { Component } from "react";

// React Router
import { BrowserRouter as Router, Link } from "react-router-dom";

// Pages

// Bootstrap Components
import { Button, Col, Container, Row } from "react-bootstrap";

// Components
import NavProvider from "./navProvider";

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
                <div className="row">
                  <Router>
                    <Button className="navButtonNoBorder"><Link className="navLink">Return to Link Dashboard<i class="fas fa-xs fa-external-link-alt fasLeft"></i></Link></Button>
                    <Button className="navButtonNoBorder"><Link className="navLink"><i class="fas fa-question-circle fasRight"></i>Help</Link></Button>
                    <Button className="navButtonNoBorder"><Link className="navLink">Track It<i class="fas fa-circle notification fasLeft"></i></Link></Button>
                    <Button className="navButtonNoBorder"><Link className="navLink"><i class="fas fa-user-circle fasRight"></i>My Account<i class="fas fa-angle-down fasLeft"></i></Link></Button>
                  </Router>
                </div>
                <div className="row relative">
                  <Router>
                    <p>Payer</p><Button className="navButton"><Link className="navLink">87726 - UnitedHealthcare <i class="fas fa-angle-down fasLeft"></i></Link></Button>
                    <p>Provider</p><NavProvider />
                  </Router>
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
