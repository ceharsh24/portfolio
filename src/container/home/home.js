import React from 'react';

import { Container, Col, Row } from 'react-bootstrap';
import GithubCircleIcon from 'mdi-react/GithubCircleIcon';
import LinkedInBoxIcon from 'mdi-react/LinkedinBoxIcon';
import TwitterIcon from 'mdi-react/TwitterIcon';

import myImage from '../../assets/smallImage.png';

import './home.scss';

class Home extends React.PureComponent {
  render() {
    return (
      <section className="home-bg-image" id="home">
        <Container className="home-header">
          <Row>
            <Col>
              <img
                src={myImage}
                className="d-inline-block align-top brand-icon"
                alt="Harsh Shah"
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="name">Harsh Shah</div>
              <div className="title">Software Developer</div>
              <div>
                <a href="https://www.linkedin.com/in/harsh2403/" target="blank">
                  <LinkedInBoxIcon size={35} color="#90CAF9" className="add-margin no-left-margin" />
                </a>
                <a href="https://github.com/ceharsh24" target="blank">
                  <GithubCircleIcon size={35} color="#ECEFF1" className="add-margin" />
                </a>
                <a href="https://twitter.com/ceharsh" target="blank">
                  <TwitterIcon size={35} color="#4ba1ec" className="add-margin" />
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}

export default Home;
