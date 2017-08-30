// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authenticate } from '../../actions/session';
import NotFound from '../../components/NotFound';
import Home from '../Home';
import Login from '../Login';
import Signup from '../Signup';
import {
  BrowserRouter as Router,
  Link,
  Route,  /* renamed from Match */
  Switch, /* renamed from Miss */
} from 'react-router-dom';

class App extends Component {
  componentDidMount() {
    const token = localStorage.getItem('token');

    if (token) {
      this.props.authenticate();
    }
  }

  props: Props

  render() {
    return (
      <Router>
        <div style={{ display: 'flex', flex: '1' }}>
          <ul>
            <li>
              <Link to="/">Home</Link>{' '}
            </li>
            <li>
              <Link to="/">Login</Link>{' '}
            </li>
            <li>
              <Link to="/">Signup</Link>{' '}
            </li>
          </ul>
          <Route exact path="/" component={Home} />
          <Route exact path="/" component={Login} />
          <Route exact path="/" component={Signup} />
          <Switch component={NotFound} />
        </div>
      </Router>
    );
  }
}

export default connect(
  null,
  { authenticate }
)(App);
