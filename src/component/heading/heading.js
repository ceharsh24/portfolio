import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { PropTypes } from 'prop-types';

import './heading.scss';

const Heading = ({ heading }) => (
  <Row className="section-heading">
    <Col md={12}>{heading}</Col>
  </Row>
);

Heading.propTypes = {
  heading: PropTypes.string.isRequired,
};

export default Heading;
