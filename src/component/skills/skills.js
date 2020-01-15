import React from 'react';
import { Row, Col } from 'react-bootstrap';

import DatabaseIcon from 'mdi-react/DatabaseIcon';
import FlaskPlusOutlineIcon from 'mdi-react/FlaskPlusOutlineIcon';

import './skills.scss';

class SkillOverView extends React.Component {

  rendersvg = () => {
    return (
      <svg className="svg-inline--fa fa-check fa-w-16 mr-2 text-primary" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="#c0e8fd" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path></svg>
    )
  }

  renderSkills = skills => {
    return skills.map(skill => {
      return (
        <ul className="list-unstyled skill-texts">
          <li className="mb-2">
            {this.rendersvg()}
            <span>{skill}</span>
          </li>
        </ul>
      )
    })
  }
  render() {
    return (
      <section className="container-skills" id="skills">
        <Row>
          <Col md={12} className="about">
            Skills
          </Col>
        </Row>
        <Row>
          <Col md={4} className="skill-container">
            <div><DatabaseIcon size={85} className="skill-icon"/>
              <div className="skill-container-inside">
                <div className="skill-container-header">Front End</div>
                {this.renderSkills(['React/Redux', 'Angular', 'TypeScript', 'JavaScript', 'Webpack/Gulp/Grunt', 'HTML/CSS/SASS/SCSS'])}
              </div>
            </div>
          </Col>
          <Col md={4} className="skill-container">
            <div><DatabaseIcon size={85} className="skill-icon"/>
              <div className="skill-container-inside">
                <div className="skill-container-header">Back End</div>
                {this.renderSkills(['Node.JS', 'MongoDB', 'Python', 'Java', 'PostgresSQL/MySQL', 'PHP'])}
              </div>
            </div>
          </Col>
          <Col md={4} className="skill-container">
            <div><FlaskPlusOutlineIcon size={85} className="skill-icon"/>
              <div className="skill-container-inside">
                <div className="skill-container-header">Others</div>
                {this.renderSkills(['DevOps', 'Docker', 'Unit Testing', 'AWS', 'WebSockets/WebRTC', 'Electron Framework'])}
              </div>
            </div>
          </Col>
        </Row>
      </section>
    );
  }
}

export default SkillOverView;