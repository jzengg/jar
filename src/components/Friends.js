import React, { Component } from 'react'

import { QueryRenderer, graphql } from 'react-relay'
import environment from '../Environment'

import { GC_USER_ID } from '../constants'

import FriendList from './FriendList'

const FriendsQuery = graphql`
  query FriendsQuery($userId: ID) {
    viewer {
      User(id: $userId) {
        email
        ...FriendList_user
      }
    }
  }
`

class Friends extends Component {

  render() {
    const userId = localStorage.getItem(GC_USER_ID)

    const variables = {
      userId: userId
    }

    return (
      <QueryRenderer
        environment={environment}
        query={FriendsQuery}
        variables={variables}
        render={({error, props}) => {
          if (error) {
            return <div>{error.message}</div>
          } else if (props) {
            return (
              <div>
                <h2> Friends </h2>
                <FriendList user={props.viewer.User} />
              </div>
            )

          }
          return <div>Loading</div>
        }}
      />
    )
  }

}

export default Friends
