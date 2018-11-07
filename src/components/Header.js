import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { QueryRenderer, graphql } from 'react-relay'
import environment from '../Environment'
import { GC_USER_ID } from '../constants'

import ReceivedFriendRequestBadge from './ReceivedFriendRequestBadge'

import HeaderNavLink from './HeaderNavLink'
import LogoutButton from './LogoutButton'
import Spinner from './Spinner'

import styled from 'react-emotion'

const HeaderContainer = styled.nav`
  display: flex;
  justify-content: center;
  background-color: #18bc9c;
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
                { loggedIn &&
                  <HeaderContainer>
                    <HeaderNavLink to='/'> Today </HeaderNavLink>
                    <HeaderNavLink to='/history' > History </HeaderNavLink>
                    <HeaderNavLink to='/requests' >
                      <div css={`
                          display: flex;
                          align-items: center;
                          `}>
                        <span>
                          Requests
                        </span>
                        <ReceivedFriendRequestBadge user={ props.viewer.User } />
                    </div>
                    </HeaderNavLink>
                    <HeaderNavLink to='/friends' > Friends </HeaderNavLink>
                    <LogoutButton/>
                  </HeaderContainer>
                }
              </div>
            )

          }
          return <Spinner />
        }}
      />
    )
  }

}

export default withRouter(Header)
