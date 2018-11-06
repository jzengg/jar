import React, { Component } from 'react'
import { QueryRenderer, graphql } from 'react-relay'
import environment from '../Environment'

import { GC_USER_ID } from '../constants'

import Spinner from './Spinner'
import CreateFriendRequest from './CreateFriendRequest'
import SentFriendRequestList from './SentFriendRequestList'
import ReceivedFriendRequestList from './ReceivedFriendRequestList'

const FriendRequestsQuery = graphql`
  query FriendRequestsQuery($userId: ID, $friendRequestFilter: FriendRequestFilter) {
    viewer {
      User(id: $userId) {
        email
        ...SentFriendRequestList_user @arguments(friendRequestFilter: $friendRequestFilter)
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
                <div>
                  <ReceivedFriendRequestList user={props.viewer.User} />
                  <SentFriendRequestList user={props.viewer.User} subscribe />
                </div>
                  <CreateFriendRequest viewer={props.viewer} />
              </div>
            )

          }
          return <Spinner />
        }}
      />
    )
  }

}

export default FriendRequests
