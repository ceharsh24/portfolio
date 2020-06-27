import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

import Heading from '../../component/heading/heading';

import './education.scss';

class Education extends React.PureComponent {
  renderUniversityIcon = (iconName) => (
    <div className="icon-container university">
      <Image
        // eslint-disable-next-line global-require
        src={require(`../../assets/${iconName}.png`)}
        className="d-inline-block university-icon"
        alt={iconName}
      />
    </div>
  );

  render() {
    return (
      <section className="container-education" id="education">
        <Container>
          <Heading heading="Education" />
          <Row className="container-education-body">
            <Col md={6}>
              {this.renderUniversityIcon('ualbany')}
              <div className="university-name">University at Albany, SUNY</div>
              <div className="university-year">
                <ul>
                  <li>
                    <span>
                      <strong>Degree: </strong>
                      Master's
                    </span>
                  </li>
                  <li>
                    <span>
                      <strong>Major: </strong>
                      Computer Science
                    </span>
                  </li>
                  <li>
                    <span>
                      <strong>Location: </strong>
                      Albany, NY
                    </span>
                  </li>
                </ul>
              </div>
            </Col>
            <Col md={6}>
              {this.renderUniversityIcon('gtu')}
              <div className="university-name">
                Gujarat Technological University, India
              </div>
              <div className="university-year">
                <ul>
                  <li>
                    <span>
                      <strong>Degree: </strong>
                      Bachelor's
                    </span>
                  </li>
                  <li>
                    <span>
                      <strong>Major: </strong>
                      Computer Engineering
                    </span>
                  </li>
                  <li>
                    <span>
                      <strong>Location: </strong>
                      Gujarat, India
                    </span>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}

export default Education;
