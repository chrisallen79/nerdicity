import React, { Fragment } from 'react';

import Navbar from './components/layout/Navbar';
import Main from './components/layout/Main';
import Footer from './components/layout/Footer';

import './style/custom.css';

const App = () => (
  <Fragment>
    <Navbar />
    <Main />
    <Footer />
  </Fragment>
);

export default App;
