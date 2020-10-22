// React
import React, { Component } from "react";

// Bootstrap Components
import { Col, Container, Row } from "react-bootstrap";

class CopyBlock extends Component {
  render() {
    return (
      <Container>
        <Row className="justify-content-center">
          <Col xs={8}>
            <div className="copyBlock">
              <h1 className="h100">Hello, Marty McFly!</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Provident, distinctio. Iusto consectetur veniam magni ex!
                Cupiditate corporis et sunt eos culpa, laudantium ab, molestias,
                ipsam accusamus ut officiis impedit deserunt.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default CopyBlock;
