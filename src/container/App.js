import React from 'react';
import { Container } from 'react-bootstrap';

// component
import Header from './header/header';
import Home from './home/home';
import Footer from './footer/footer';
import About from './about/about';
import Skills from './skills/skills';
import Experience from './experience/experience';
import Education from './education/education';

import './App.scss';

class App extends React.Component {
  render () {
    return (
      <>
        <Header />
        <Home />
        <Container>
          <About />
          <Skills />
        </Container>
        <Experience />
        <Education />
        <Footer />
      </>
    )
  }
}

export default App;