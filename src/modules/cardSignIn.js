// React
import React, { Component } from "react";

// React Router
import { Link } from "react-router-dom";

// Pages

// Bootstrap Components
import { Col, Container, Nav, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

// Components
import NavAlt from "./navAlt";
import FooterAlt from "./footerAlt";
import Footer from "./footer";

class CardSignIn extends Component {
  render() {
    return (
      <div>
        <NavAlt />
        <Container>
          <Row className="flex-row card cardSignIn">
            <Col sm={12}>
              <h1 className="static400">Sign In with your Optum ID</h1>
            </Col>
            <Col sm={12} lg={6}>
              <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Form Label</Form.Label>
                  <Form.Control type="email" placeholder="Placeholder Text" />
                  <Form.Text className="text-muted">Muted Text</Form.Text>
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Form Label</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Placeholder Text"
                  />
                  <Form.Text className="text-muted">Muted Text</Form.Text>
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Checkbox Label" />
                </Form.Group>
                <Link to="./home">
                  <Button variant="primary" type="submit" block>
                    Button Label
                  </Button>
                </Link>
                <div className="links">
                  <Link to="./">
                    <p>Link Label</p>
                  </Link>
                  <Link to="./">
                    <p>Link Label</p>
                  </Link>
                </div>
              </Form>
            </Col>
            <Col sm={12} lg={6}>
              <h2 className="h500">Additional Options</h2>
              <Link to="./">
                <p>Link Label</p>
              </Link>
              <Link to="./">
                <p>Link Label</p>
              </Link>
            </Col>
          </Row>
        </Container>
        <FooterAlt />
      </div>
    );
  }
}

export default CardSignIn;
