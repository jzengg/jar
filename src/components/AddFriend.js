import React, { Component } from 'react'
import { QueryRenderer, graphql } from 'react-relay'
import environment from '../Environment'

import { GC_USER_ID } from '../constants'

import CreateFriendRequest from './CreateFriendRequest'
import SentFriendRequestList from './SentFriendRequestList'

import SubHeading from '../css/SubHeading'
import { Container } from '../css/BaseLayout'

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
                  <SubHeading> Pending Requests </SubHeading>
                  <SentFriendRequestList user={props.viewer.User} subscribe />
                </div>
                <Container>
                  <SubHeading> Add a friend </SubHeading>
                  <CreateFriendRequest viewer={props.viewer} />
                </Container>
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
