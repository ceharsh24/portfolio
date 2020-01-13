import React from 'react';
import { Container } from 'react-bootstrap';

// component
import Header from './header/header';
import Home from './home/home';
import Footer from './footer/footer';
import About from './about/about';

import './App.scss';

class App extends React.Component {
  render () {
    return (
      <>
        <Header />
        <Home />
        <Container className="container-body">
          <About />
        </Container>
        <Footer />
      </>
    )
  }
}

export default App;
