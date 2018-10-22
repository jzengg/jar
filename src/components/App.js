import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'

import '../App.css';

import Header from './Header'
import Login from './Login'
import History from './History'
import Today from './Today'
import AddFriend from './AddFriend'

class App extends Component {
  render() {
    return (
      <div>
        <Header />

        <Switch>

          <Route exact path='/' component={Today} />
          <Route exact path='/history' component={History} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/add' component={AddFriend} />

        </Switch>

    </div>
    );
  }
}

export default App;
