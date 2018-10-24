// display friend requests
import React from 'react';
import { createFragmentContainer, graphql } from 'react-relay'

import AcceptFriendRequestMutation from '../mutations/AcceptFriendRequestMutation'

import FriendRequest from './FriendRequest'

class ReceivedFriendRequestList extends React.Component {

  render () {
    let friendRequests = this.props.user.receivedFriendRequests.edges
    return (
      <ul>
        {
          friendRequests.map(( {node} ) =>
          <FriendRequest
            key={node.id}
          >
            <div onClick={ this._acceptFriendRequest.bind(this, node.id) }>
              From: {node.sender.email}
              status: {node.status}
            </div>
          </FriendRequest>

        )
      }
    </ul>
    )
  }

  _acceptFriendRequest = (id) => {
    AcceptFriendRequestMutation(id)
  }
}

export default createFragmentContainer(ReceivedFriendRequestList, graphql`
  fragment ReceivedFriendRequestList_user on User @argumentDefinitions(
    friendRequestFilter: {type: "FriendRequestFilter"}
  ) {
    receivedFriendRequests(last: 100, orderBy: createdAt_DESC, filter: $friendRequestFilter)
      @connection(key: "FriendRequestList_receivedFriendRequests", filters: []) {
      edges {
        node {
          id
          status
          createdAt
          sender {
            email
          }
        }
      }
    }
  }
`)
