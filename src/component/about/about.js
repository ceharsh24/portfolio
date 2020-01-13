import React from 'react';
import { Row, Col } from 'react-bootstrap';
import SpeedometerIcon from 'mdi-react/SpeedometerIcon';
import ResponsiveIcon from 'mdi-react/ResponsiveIcon';
import LightbulbIcon from 'mdi-react/LightbulbIcon';
import RocketIcon from 'mdi-react/RocketIcon';

import './about.scss';

class About extends React.Component {
  render() {
    return (
      <section className="container-about" id="about">
        <Row>
          <Col md={12} className="about">
            About
          </Col>
        </Row>
        <Row>
          <Col md={12} className="about-body">
            <div>
              I'm a Software Developer specialised in frontend and backend development for complex scalable web & desktop applications. Extensive Experience in creating Web Applications using&nbsp; 
              <span className="about-body-highlight">MERN Stack, MEAN Stack</span>
              &nbsp;and Cross Platform Desktop applications using&nbsp;
              <span className="about-body-highlight">Electron.</span>
            </div>
          </Col>
        </Row>
        <Row className="about-footer">
          <Col md={3} className="about-footer-add-bottom-margin">
            <SpeedometerIcon size={65} color="#c0e8fd"/>
            <div className="about-footer-header">Fast</div> 
            <div>Fast load times and lag free interaction, my highest priority.</div>
          </Col>
          <Col md={3} className="about-footer-add-bottom-margin">
            <ResponsiveIcon size={65} color="#615591"/> 
            <div className="about-footer-header">Responsive</div>
            <div>My layouts will work on any device, big or small.</div>
          </Col>
          <Col md={3} className="about-footer-add-bottom-margin">
            <LightbulbIcon size={65} color="#FBC02D"/>
            <div className="about-footer-header">Intuitive</div> 
            <div>Strong preference for easy to use, intuitive UX/UI.</div>
          </Col>
          <Col md={3} className="about-footer-add-bottom-margin">
            <RocketIcon size={65} color="#4DD0E1"/>
            <div className="about-footer-header">Dynamic</div> 
            <div>Websites don't have to be static, I love making pages come to life.</div>
          </Col>
        </Row>
      </section>
    )
  }
}

export default About;