import React from 'react';

import {
  Navbar,
  Button,
  Nav,
  Form
} from 'react-bootstrap';

import './header.scss';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isTop: true,
    };
  }

  componentDidMount() {
    document.addEventListener('scroll', () => {
      const isTop = window.scrollY < 1980;
      if (isTop !== this.state.isTop) {
        this.setState({ isTop });
      }
    });
  }

  render() {
    return (
      <Navbar
        className={
          this.state.isTop ? 'header header-white' : 'header header-black'
        }
        fixed="top"
        expand="md"
      >
        <Navbar.Brand href="#home" />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home" className="navbar-links">
              Home
            </Nav.Link>
            <Nav.Link href="#about" className="navbar-links">
              About
            </Nav.Link>
            <Nav.Link href="#skills" className="navbar-links">
              Skills
            </Nav.Link>
            <Nav.Link href="#experience" className="navbar-links">
              Experience
            </Nav.Link>
            <Nav.Link href="#education" className="navbar-links">
              Education
            </Nav.Link>
          </Nav>
          <Form inline>
            <Nav.Link href="#contactme" alt="contactme">
              <Button variant="outline-light" className="contact-button">
                Contact Me
              </Button>
            </Nav.Link>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Header;
