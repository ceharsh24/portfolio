import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { PropTypes } from 'prop-types';

import './heading.scss';

const Heading = (props) => (
  <Row className="section-heading">
    <Col md={12}>{props.heading}</Col>
  </Row>
);

Heading.propTypes = {
  heading: PropTypes.string.isRequired,
};

export default Heading;
