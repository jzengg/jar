import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'

import Layout from './Layout'
import Login from './Login'
import History from './History'
import Today from './Today'
import FriendRequests from './FriendRequests'
import Friends from './Friends'

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
