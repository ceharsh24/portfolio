import React from 'react';

import { Navbar, Container, Col, Row, Button } from 'react-bootstrap';
import GithubCircleIcon from 'mdi-react/GithubCircleIcon';
import LinkedInBoxIcon from 'mdi-react/LinkedinBoxIcon';
import TwitterIcon from 'mdi-react/TwitterIcon'

import myImage from '../../assets/smallImage.png';

import './header.scss';
class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <Container>
          <Row>
            <Col md={3}>
              <Navbar.Brand href="#home">
                <img
                  src={myImage}
                  className="d-inline-block align-top brand-icon"
                  alt="React Bootstrap logo"
                />
              </Navbar.Brand>
            </Col>
            <Col md={6}>
              <div className="name">Harsh Shah</div>
              <div className="title">Software Developer</div>
              <div>
                <a href="https://www.linkedin.com/in/harsh2403/" target="blank">
                  <LinkedInBoxIcon size={35} color="#90CAF9" className="add-margin no-left-margin" />
                </a>
                <a href="https://github.com/ceharsh24" target="blank">
                  <GithubCircleIcon size={35} color="#ECEFF1" className="add-margin"/>
                </a>
                <a href="https://twitter.com/ceharsh" target="blank">
                  <TwitterIcon size={35} color="#4ba1ec" className="add-margin"/>
                </a>
              </div>
            </Col>
            <Col md={3} className="center-element">
              <Button variant="outline-light" className="contact-button">Contact Me</Button>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default Header;