import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { QueryRenderer, graphql } from 'react-relay'
import environment from '../Environment'

import HeaderNavLink from './HeaderNavLink'

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
                  <HeaderNavLink to='/'>Home </HeaderNavLink>
                  {loggedIn || <HeaderNavLink activeClassName='selected' to='/login' > Login </HeaderNavLink>}
                  <HeaderNavLink activeClassName='selected' to='/history' > History </HeaderNavLink>
                  <HeaderNavLink activeClassName='selected' to='/add' > Add friends </HeaderNavLink>
                  <HeaderNavLink activeClassName='selected' to='/requests' > Friend requests </HeaderNavLink>
                  <HeaderNavLink activeClassName='selected' to='/friends' > Friends </HeaderNavLink>
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
