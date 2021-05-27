import React from 'react';
import { Container } from 'react-bootstrap';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import rootReducer from '../reducers/rootReducer';
import Header from './header/header';
import Home from './home/home';
import Footer from './footer/footer';
import About from './about/about';
import Skills from './skills/skills';
import Experience from './experience/experience';
import Education from './education/education';
import ContactMe from './contact/contact';

import './App.scss';

const rootStore = createStore(rootReducer);
const App = () => (
  <Provider store={rootStore}>
    <Header />
    <Home />
    <Container>
      <About />
      <Skills />
    </Container>
    <Experience />
    <Education />
    <div className="footer-container">
      <ContactMe />
      <Footer />
    </div>
  </Provider>
);

export default App;
