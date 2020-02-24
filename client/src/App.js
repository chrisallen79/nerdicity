import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Main from './components/layout/Main';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Footer from './components/layout/Footer';

import './style/custom.css';

const App = () => (
  <Router>
    <Fragment>
      <Navbar />
      <Route exact path="/" component={Main} />
      <section className="container">
        <Switch>
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </section>
      <Footer />
    </Fragment>
  </Router>
);

export default App;
