import React from 'react';
import { Row, Col } from 'react-bootstrap';

import './heading.scss';

class Heading extends React.Component {
  render() {
    return (
      <Row className="section-heading">
        <Col md={12}>
          {this.props.heading}
        </Col>
      </Row>
    )
  }
}

export default Heading;