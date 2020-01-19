import React from 'react';
import { Container } from 'react-bootstrap';

import { createStore } from 'redux';
import { Provider } from "react-redux";
// store
import rootReducer from '../reducers/rootReducer';
// component
import Header from './header/header';
import Home from './home/home';
import Footer from './footer/footer';
import About from './about/about';
import Skills from './skills/skills';
import Experience from './experience/experience';
import Education from './education/education';
import ContactMe from './contact/contact';

import './App.scss';
const rootStore = (window.devToolsExtension
  ? window.__REDUX_DEVTOOLS_EXTENSION__()(createStore)
  : createStore)(rootReducer);
// const rootStore = createStore(rootReducer);
class App extends React.Component {
  render () {
    return (
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
    )
  }
}

export default App;
