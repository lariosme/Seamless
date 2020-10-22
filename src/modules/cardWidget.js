// React
import React, { Component } from "react";

// React Router
import { Link } from "react-router-dom";

// Pages
// import Home from "./home";

// Bootstrap Components
import { Col, Container, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

// Components

class CardWidget extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col sm={12} lg={6} className="cardWidget">
            <Col className="card justify-content-between">
              <div className="textAlignCenter">
                <i class="lni lni-32 lni-capsule"></i>
                <h2 className="static400">Verify Eligibility & Benefits</h2>
                <Link to="#">
                  <p>Lorem ipsum dolor sit amet</p>
                </Link>
                <hr />
                <Form className="form textAlignLeft">
                  <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Label</Form.Label>
                    <Form.Control as="select">
                      <option>Option 1</option>
                      <option>Option 2</option>
                      <option>Option 3</option>
                      <option>Option 4</option>
                    </Form.Control>
                    <Form.Text className="text-muted">Muted Text</Form.Text>
                  </Form.Group>
                  <hr />
                  <div className="formGroup">
                    <Form.Group controlId="formBasicPassword">
                      <Form.Label>Label</Form.Label>
                      <Form.Control type="password" placeholder="Placeholder" />
                      <Form.Text className="text-muted">Muted Text</Form.Text>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                      <Form.Label>Label</Form.Label>
                      <Form.Control type="password" placeholder="Placeholder" />
                      <Form.Text className="text-muted">Muted Text</Form.Text>
                    </Form.Group>
                  </div>
                  <Link to="#">
                    <p>Search for Multiple Members</p>
                  </Link>
                  <hr />
                  <p className="micro">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                    totam suscipit quisquam qui enim, unde corrupti est cumque
                    velit tempore.
                  </p>
                  <div className="formGroup">
                    <Form.Group controlId="formBasicPassword">
                      <Form.Label>Label</Form.Label>
                      <Form.Control type="password" placeholder="Placeholder" />
                      <Form.Text className="text-muted">Muted Text</Form.Text>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                      <Form.Label>Label</Form.Label>
                      <Form.Control type="password" placeholder="Placeholder" />
                      <Form.Text className="text-muted">Muted Text</Form.Text>
                    </Form.Group>
                  </div>
                </Form>
              </div>
              <Button variant="primary" type="submit" block>
                Button Label
              </Button>
            </Col>
          </Col>
          <Col sm={12} lg={6} className="cardWidget">
            <Col className="card justify-content-between">
              <div className="textAlignCenter">
                <i class="lni lni-32 lni-sthethoscope"></i>
                <h2 className="static400">Look Up a Claim or Ticket</h2>
                <Link to="#">
                  <p>Lorem ipsum dolor sit amet</p>
                </Link>
                <hr />
                <Form className="form textAlignLeft">
                  <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Label</Form.Label>
                    <Form.Control as="select">
                      <option>Option 1</option>
                      <option>Option 2</option>
                      <option>Option 3</option>
                      <option>Option 4</option>
                    </Form.Control>
                    <Form.Text className="text-muted">Muted Text</Form.Text>
                  </Form.Group>
                  <hr />
                  <div className="formGroup">
                    <p className="micro">Searcg by:</p>
                    <Form.Group controlId="formBasicCheckbox">
                      <Form.Check type="checkbox" label="TIN" />
                      <div className="formGroupRadios">
                        <p>19841976</p>
                        <Link to="#">
                          <p>Edit</p>
                        </Link>
                      </div>
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                      <Form.Check type="checkbox" label="TIN" />
                      <div className="formGroupRadios">
                        <p>19841976</p>
                        <Link to="#">
                          <p>Edit</p>
                        </Link>
                      </div>
                    </Form.Group>
                  </div>
                  <hr />
                  <div className="formGroup">
                    <Form.Group controlId="formBasicPassword">
                      <Form.Label>Label</Form.Label>
                      <Form.Control type="password" placeholder="Placeholder" />
                      <Form.Text className="text-muted">Muted Text</Form.Text>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                      <Form.Label>Label</Form.Label>
                      <Form.Control type="password" placeholder="Placeholder" />
                      <Form.Text className="text-muted">Muted Text</Form.Text>
                    </Form.Group>
                  </div>
                  <hr />
                  <div className="formGroup">
                    <p className="micro">Searcg by:</p>
                    <Form.Group controlId="formBasicCheckbox">
                      <Form.Check type="checkbox" label="TIN" />
                      <div className="formGroupRadios">
                        <p>19841976</p>
                        <Link to="#">
                          <p>Edit</p>
                        </Link>
                      </div>
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                      <Form.Check type="checkbox" label="TIN" />
                      <div className="formGroupRadios">
                        <p>19841976</p>
                        <Link to="#">
                          <p>Edit</p>
                        </Link>
                      </div>
                    </Form.Group>
                  </div>
                  <div className="formGroup">
                    <Form.Group controlId="formBasicPassword">
                      <Form.Label>Label</Form.Label>
                      <Form.Control type="password" placeholder="Placeholder" />
                      <Form.Text className="text-muted">Muted Text</Form.Text>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                      <Form.Label>Label</Form.Label>
                      <Form.Control type="password" placeholder="Placeholder" />
                      <Form.Text className="text-muted">Muted Text</Form.Text>
                    </Form.Group>
                  </div>
                </Form>
              </div>
              <Button variant="primary" type="submit" block>
                Button Label
              </Button>
            </Col>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default CardWidget;
