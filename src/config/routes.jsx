import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import Home from '../components/home';

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/home" /> } />
          <Route path="/home" component={Home} />
        </Switch>
      </Router>
    )
  }
}

export default Routes;
