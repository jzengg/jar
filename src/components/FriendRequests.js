import React, { Component } from 'react'

import { QueryRenderer, graphql } from 'react-relay'
import environment from '../Environment'

import { GC_USER_ID } from '../constants'

import FriendRequestList from './FriendRequestList'

const FriendRequestsQuery = graphql`
  query FriendRequestsQuery($userId: ID) {
    viewer {
      User(id: $userId) {
        email
        ...FriendRequestList_user
      }
    }
  }
`

class FriendRequests extends Component {

  render() {
    const userId = localStorage.getItem(GC_USER_ID)

    const variables = {
      userId: userId
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
                <FriendRequestList user={props.viewer.User} />
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
