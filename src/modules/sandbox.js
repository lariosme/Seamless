// React
import React from "react";

// React Router
// import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

// Pages

// Bootstrap Components

// Components

import { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
// import Nav from "./nav";
// import CopyBlock from "./copyBlock";
// import CardWidget from "./cardWidget";
// import Footer from "./footer";

class Sandbox extends Component {
  render() {
    return (
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} lg={3}>
            <div className="card">
              <h2>This is prety cool!</h2>
              <div className="p">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dignissimos delectus corporis sint rem numquam reprehenderit
                dicta nobis recusandae repellat, voluptatem facere quibusdam hic
                quod veniam commodi consequatur maxime esse. Libero voluptatum
                consequatur aspernatur, suscipit ratione eligendi ea quos beatae
                eum!
              </div>
            </div>
          </Col>
          <Col xs={12} lg={3}>
            <div className="card">
              <h2>Lorem Ipsum</h2>
              <div className="p">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dignissimos delectus corporis sint rem numquam reprehenderit
                dicta nobis recusandae repellat, voluptatem facere quibusdam hic
                quod veniam commodi consequatur maxime esse. Libero voluptatum
                consequatur aspernatur, suscipit ratione eligendi ea quos beatae
                eum!
              </div>
            </div>
          </Col>
          <Col xs={12} lg={3}>
            <div className="card">
              <h2>Lorem Ipsum</h2>
              <div className="p">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dignissimos delectus corporis sint rem numquam reprehenderit
                dicta nobis recusandae repellat, voluptatem facere quibusdam hic
                quod veniam commodi consequatur maxime esse. Libero voluptatum
                consequatur aspernatur, suscipit ratione eligendi ea quos beatae
                eum!
              </div>
            </div>
          </Col>
          <Col xs={12} lg={3}>
            <div className="card">
              <h2>Lorem Ipsum</h2>
              <div className="p">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dignissimos delectus corporis sint rem numquam reprehenderit
                dicta nobis recusandae repellat, voluptatem facere quibusdam hic
                quod veniam commodi consequatur maxime esse. Libero voluptatum
                consequatur aspernatur, suscipit ratione eligendi ea quos beatae
                eum!
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Sandbox;
