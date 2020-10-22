// React
import React, { Component } from "react";

// React Router
import { BrowserRouter as Router, Link } from "react-router-dom";

// Pages

// Bootstrap Components
import { Col, Container, Row } from "react-bootstrap";

// Components

class FooterAlt extends Component {
  render() {
    return (
      <footer className="footerAlt">
        <Container>
        <Row className="legal">
            <div className="links">
            <p className="small">&#169; 2020 United HealthCare Services, Inc. All Rights Reserved.</p>
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

export default FooterAlt;
