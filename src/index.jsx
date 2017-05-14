import React, { Component } from 'react';
import { render } from 'react-dom';
import Routes from './config/routes';
import injectTapEventPlugin from 'react-tap-event-plugin';

export default class AppProvider extends Component {
  constructor() {
    super();
    this.state = {};
    injectTapEventPlugin();
  }

  // Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941

  render() {
    return (
        <div>
          <Routes />
        </div>
    );
  }
}
render(<AppProvider />, document.getElementById('app-wrapper'));