import React, { Component } from 'react'
import { QueryRenderer, graphql } from 'react-relay'
import environment from '../Environment'

import { GC_USER_ID } from '../constants'

import CreateFriendRequest from './CreateFriendRequest'
import SentFriendRequestList from './SentFriendRequestList'

const AddFriendQuery = graphql`
  query AddFriendQuery($userId: ID, $friendRequestFilter: FriendRequestFilter) {
    viewer {
      User(id: $userId) {
        email
        ...SentFriendRequestList_user @arguments(friendRequestFilter: $friendRequestFilter)
      }
    }
  }
`

class AddFriend extends Component {

  render() {
    const userId = localStorage.getItem(GC_USER_ID)

    const variables = {
      userId: userId,
      friendRequestFilter: { status: "PENDING" }
    }

    return (
      <QueryRenderer
        environment={environment}
        query={AddFriendQuery}
        variables={variables}
        render={({error, props}) => {
          if (error) {
            return <div>{error.message}</div>
          } else if (props) {
            return (
              <div>
                <div>
                  <h2> Pending Requests </h2>
                  <SentFriendRequestList user={props.viewer.User} subscribe />
                </div>
                <div>
                  <h2> Add a friend </h2>
                  <CreateFriendRequest viewer={props.viewer} />
              </div>
              </div>
            )

          }
          return <div>Loading</div>
        }}
      />
    )
  }

}

export default AddFriend
