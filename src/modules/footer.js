// React
import React, { Component } from "react";

// React Router
import { BrowserRouter as Router, Link } from "react-router-dom";

// Pages

// Bootstrap Components
import { Col, Container, Row } from "react-bootstrap";

// Components

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <Container>
          <Row>
            <Col lg={3}>
            <img src={'/assets/logo-uhc-monogram-white.svg'} className="logo" />
            </Col>
            <Col lg={3} className="links">
              <Router>
                <Link to="#" className="footerLink">
                  Eligibility & Benefits
                </Link>
                <Link to="#" className="footerLink">
                  Claims
                </Link>
                <Link to="#" className="footerLink">
                  Referrals
                </Link>
                <Link to="#" className="footerLink">
                  Prior Authorizations
                </Link>
              </Router>
            </Col>
            <Col lg={3} className="links">
              <Router>
                <Link to="#" className="footerLink">
                  TrackIt
                </Link>
                <Link to="#" className="footerLink">
                  My Account
                </Link>
                <Link to="#" className="footerLink">
                  Help
                </Link>
              </Router>
            </Col>
            <Col lg={3} className="links">
              <Router>
                <Link to="#" className="footerLink">
                  UHCProvider.com
                  <i class="fas fa-xs fa-external-link-alt"></i>
                </Link>
                <Link to="#" className="footerLink">
                  UHC.com
                  <i class="fas fa-xs fa-external-link-alt"></i>
                </Link>
                <Link to="#" className="footerLink">
                  Link Dashboard
                  <i class="fas fa-xs fa-external-link-alt"></i>
                </Link>
              </Router>
            </Col>
          </Row>
          <hr />
          <Row className="legal">
            <p className="small">&#169; 2020 United HealthCare Services, Inc. All Rights Reserved.</p>
            <div className="links">
              <Router>
                <Link to="#" className="footerLink small">
                  Privacy
                </Link>
                <Link to="#" className="footerLink small">
                  Terms of Use
                </Link>
                <Link to="#" className="footerLink small">
                  Opt Out
                </Link>
              </Router>
            </div>
          </Row>
        </Container>
      </footer>
    );
  }
}

export default Footer;
