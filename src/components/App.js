import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'

import '../App.css';

import Layout from './Layout'
import Login from './Login'
import History from './History'
import Today from './Today'
import AddFriend from './AddFriend'
import FriendRequests from './FriendRequests'
import Friends from './Friends'

import PrivateRoute from './PrivateRoute'

class App extends Component {

  render() {
    return (
      <div>
        <Layout>

          <Switch>

            <PrivateRoute exact path='/' component={Today} />
            <PrivateRoute exact path='/history' component={History} />
            <Route exact path='/login' component={Login} />
            <PrivateRoute exact path='/add' component={AddFriend} />
            <PrivateRoute exact path='/requests' component={FriendRequests} />
            <PrivateRoute exact path='/friends' component={Friends} />

          </Switch>
        </Layout>

    </div>
    );
  }
}

export default App;
