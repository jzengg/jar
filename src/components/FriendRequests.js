import React, { Component } from 'react'

import { QueryRenderer, graphql } from 'react-relay'
import environment from '../Environment'

import { GC_USER_ID } from '../constants'

import ReceivedFriendRequestList from './ReceivedFriendRequestList'

const FriendRequestsQuery = graphql`
  query FriendRequestsQuery($userId: ID, $friendRequestFilter: FriendRequestFilter) {
    viewer {
      User(id: $userId) {
        email
        ...ReceivedFriendRequestList_user @arguments(friendRequestFilter: $friendRequestFilter)
      }
    }
  }
`

class FriendRequests extends Component {

  render() {
    const userId = localStorage.getItem(GC_USER_ID)

    const variables = {
      userId: userId,
      friendRequestFilter: { status: "PENDING" }
    }

    return (
      <QueryRenderer
        environment={environment}
        query={FriendRequestsQuery}
        variables={variables}
        render={({error, props}) => {
          if (error) {
            return <div>{error.message}</div>
          } else if (props) {
            return (
              <div>
                <h2> FriendRequests </h2>
                <ReceivedFriendRequestList user={props.viewer.User} />
              </div>
            )

          }
          return <div>Loading</div>
        }}
      />
    )
  }

}

export default FriendRequests
