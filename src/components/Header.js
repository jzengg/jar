import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { withRouter } from 'react-router'
import { QueryRenderer, graphql } from 'react-relay'
import environment from '../Environment'

import { GC_USER_ID } from '../constants'

const HeaderQuery = graphql`
  query HeaderQuery($id: ID) {
    viewer {
      User(id: $id) {
        email
      }
    }
  }
`

class Header extends Component {

  render() {
    const id = localStorage.getItem(GC_USER_ID)

    const variables = {
      id
    }

    return (
      <QueryRenderer
        environment={environment}
        query={HeaderQuery}
        variables={variables}
        render={({error, props}) => {
          if (error) {
            return <div>{error.message}</div>
          } else if (props) {
            const loggedIn = !!props.viewer.User
            return (
              <div>
                <h1>Jar</h1>
                <div>
                  <NavLink exact activeClassName='selected' to='/'>Home</NavLink>
                  {loggedIn || <NavLink activeClassName='selected' to='/login' > Login </NavLink>}
                  <NavLink activeClassName='selected' to='/history' > History </NavLink>
                  <NavLink activeClassName='selected' to='/add' > Add friends </NavLink>
                  <NavLink activeClassName='selected' to='/requests' > Friend requests </NavLink>
                  <NavLink activeClassName='selected' to='/friends' > Friends </NavLink>
                </div>
                { loggedIn &&
                  <div>
                     {props.viewer.User.email}
                  </div>
                }
              </div>
            )

          }
          return <div>Loading</div>
        }}
      />
    )
  }

}

export default withRouter(Header)
