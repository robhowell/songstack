import React, { Component } from 'react';
import './App.css';
import isAuthenticated from './isAuthenticated';
import Login from '../Login/Login';
import PageWrapper from '../PageWrapper/PageWrapper';

class App extends Component {
  render() {
    return (
      <PageWrapper>
        {isAuthenticated() ? <div>Test</div> : <Login />}
      </PageWrapper>
    );
  }
}

export default App;
