import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'

import Layout from './Layout'
import Login from './pages/Login'
import History from './pages/History'
import Today from './pages/Today'
import FriendRequests from './pages/FriendRequests'
import Friends from './pages/Friends'

import PrivateRoute from './PrivateRoute'

class App extends Component {

  render() {
    return (

        <Switch>

          <Route exact path='/login' component={Login} />
          <Layout>
            <PrivateRoute exact path='/' component={Today} />
            <PrivateRoute exact path='/history' component={History} />
            <PrivateRoute exact path='/requests' component={FriendRequests} />
            <PrivateRoute exact path='/friends' component={Friends} />
          </Layout>

        </Switch>

    );
  }
}

export default App;
