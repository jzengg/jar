import React from 'react'
import { Route, Redirect } from 'react-router-dom'

import { GC_USER_ID } from '../constants'

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      localStorage.getItem(GC_USER_ID) ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/login",
            state: {}
          }}
        />
      )
    }
  />
);

export default PrivateRoute
