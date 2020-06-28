import React from 'react';
import { Row, Col, Container, Image } from 'react-bootstrap';

import Heading from '../../component/heading/heading';

import './experience.scss';

class Experience extends React.PureComponent {
  renderCompanyIcon = (iconName) => (
    <Col md={4} className="icon-container">
      <Image
        // eslint-disable-next-line global-require
        src={require(`../../assets/${iconName}.png`)}
        className={`d-inline-block ${
          iconName === 'ualbany' ? 'ualbany-icon' : 'company-icon'
        }`}
        alt={iconName}
      />
    </Col>
  );

  renderCompanyDetails = (companyName, position, period) => (
    <>
      <div className="company-name">{companyName}</div>
      <div>
        <span className="company-position">{position}</span>
        &nbsp;
        <span className="company-duration">{period}</span>
      </div>
    </>
  );

  renderJobDetails = (details) =>
    details.map((detail) => <li key={detail}>{detail}</li>);

  render() {
    return (
      <>
        <div className="container-gap" />
        <section className="container-experience" id="experience">
          <Container>
            <Heading heading="Experience" />
            <Row className="container-experience-body">
              {this.renderCompanyIcon('ibm')}
              <Col md={8}>
                {this.renderCompanyDetails(
                  'IBM',
                  'Software Developer',
                  'November 2019 - Current'
                )}
                <ul className="job-description">
                  {this.renderJobDetails([
                    'Part of development team for Northern Trust Bank’s fund utility project.',
                    'Translate wireframes into interactive, dynamic code.',
                    'Implemented Dashboard Views, for Fund Utility Project using React, Redux and redux-form and used redux-saga to fetch data asynchronously (middleware).',
                    'UI/UX overhaul and performance enhancement resulting in by 85% load time improvement.',
                    'Enhancing the quality of Fund Utility application used by Northern Trust Bank based on user-escalated defects.',
                  ])}
                </ul>
              </Col>
            </Row>
            <Row className="container-experience-body">
              {this.renderCompanyIcon('solutech')}
              <Col md={8}>
                {this.renderCompanyDetails(
                  'SoluTech Inc.',
                  'Full-Stack Developer',
                  'August 2018 - October 2019'
                )}
                <ul className="job-description">
                  {this.renderJobDetails([
                    'Designed architectural view to implement SlideDrive, a cross-platform desktop application using Electron, Angular6/7, Typescript, Node.JS and WebSocket.',
                    'Implemented OAuth2.0 standards for authorization and authentication. Enhanced security by providing Multi-factor authentication using TOTP protocol, email and messaging.',
                    'Designed and implemented signal processing server which allows users to establish peer-to-peer connections among their devices.',
                    'Designed multiple data-channel on a single peer-connection infrastructure using WebRTC to transfer files/folder between devices or peers securely without being dependent on the server.',
                    'Worked on CI/CD for SlideDrive to automate the testing process and publish software updates.',
                    'Worked on requirements gathering for XD (ERC20 Token) explorer and designed the architecture using draw.io which was referred by team members using Confluence.',
                    'Developed XD Explorer using React, Node.JS which provides clients to monitor all the transactions regarding the token, 24 hours circulating supply, Market Cap, Live token cost, total token holders, transfers count, the balance of the escrow account and token holders.',
                  ])}
                </ul>
              </Col>
            </Row>
            <Row className="container-experience-body">
              {this.renderCompanyIcon('ualbany')}
              <Col md={8}>
                {this.renderCompanyDetails(
                  'University at Albany',
                  'Research Assistant',
                  'August 2017 - August 2018'
                )}
                <ul className="job-description">
                  {this.renderJobDetails([
                    'Migrated the Java Applet based desktop application to cross-browser compatible web application.',
                    'Designed web service/APIs to fetch the data from KF6 discourses and populate on the UI using jQuery/AJAX.',
                    'Developed dynamic and browser compatible web pages using AngularJS, HTML5, CSS3, and JavaScript.',
                    'Developed three network graphs using Cytoscape.js, and Bipartite Graph Algorithm to demonstrate similarities between students or authors of the notes based on the selected words, similarities between all notes from the selected discourse and connection between all selected words from discourse.',
                    'Calculated Degree Centrality and Betweenness Centrality of the network and demonstrated it using C3.js.',
                    'Involved in the complete Software Development Life Cycle (SDLC) phases of the project.',
                  ])}
                </ul>
              </Col>
            </Row>
          </Container>
        </section>
      </>
    );
  }
}

export default Experience;
