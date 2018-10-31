import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { QueryRenderer, graphql } from 'react-relay'
import environment from '../Environment'
import { GC_USER_ID } from '../constants'

import ReceivedFriendRequestBadge from './ReceivedFriendRequestBadge'

import HeaderNavLink from './HeaderNavLink'
import LogoutButton from './LogoutButton'

import styled from 'react-emotion'

const HeaderContainer = styled.div`
  display: flex;
  // justify-content: space-evenly;
`

const HeaderQuery = graphql`
  query HeaderQuery($id: ID, $friendRequestFilter: FriendRequestFilter) {
    viewer {
      id
      User(id: $id) {
        email
        ...ReceivedFriendRequestBadge_user @arguments(friendRequestFilter: $friendRequestFilter)
      }
    }
  }
`

class Header extends Component {

  render() {
    const id = localStorage.getItem(GC_USER_ID)

    const variables = {
      id,
      friendRequestFilter: { status: "PENDING" }
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
                <HeaderContainer>
                  <HeaderNavLink to='/'>Home </HeaderNavLink>
                  {loggedIn || <HeaderNavLink activeClassName='selected' to='/login' > Login </HeaderNavLink>}
                  <HeaderNavLink activeClassName='selected' to='/history' > History </HeaderNavLink>
                  <HeaderNavLink activeClassName='selected' to='/add' > Add friends </HeaderNavLink>
                  <HeaderNavLink activeClassName='selected' to='/requests' >
                    Friend requests {loggedIn &&
                      <ReceivedFriendRequestBadge
                        user={ props.viewer.User }
                        />
                    }
                  </HeaderNavLink>
                  <HeaderNavLink activeClassName='selected' to='/friends' > Friends </HeaderNavLink>
                </HeaderContainer>
                { loggedIn &&
                  <div>
                     {props.viewer.User.email}
                     <LogoutButton/>
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
