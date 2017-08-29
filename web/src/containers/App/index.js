// @flow
import Home from '../Home';
import NotFound from '../../components/NotFound';
import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Link,
  Route,  /* renamed from Match */
  Switch, /* renamed from Miss */
} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>{' '}
            </li>
          </ul>
          <Route exact path="/" component={Home} />
          <Switch component={NotFound} />
        </div>
      </Router>
    );
  }
}

export default App;
