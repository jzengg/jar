import React, { Component } from 'react';
import Header from './Header'
import Login from './Login'
import { Route, Switch } from 'react-router-dom'

import '../App.css';

import Today from './Today'

class App extends Component {
  render() {
    return (
      <div>
        <Header />

        <Switch>

          <Route exact path='/' component={Today} />
          <Route exact path='/login' component={Login} />

        </Switch>

    </div>
    );
  }
}

export default App;
