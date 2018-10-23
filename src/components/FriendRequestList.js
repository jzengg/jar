// display friend requests
import React from 'react';
import { createFragmentContainer, graphql } from 'react-relay'

import AcceptFriendRequestMutation from '../mutations/AcceptFriendRequestMutation'

import FriendRequest from './FriendRequest'

class FriendRequestList extends React.Component {

  render () {
    let friendRequests = this.props.user.receivedFriendRequests.edges
    return (
      <ul>
        {
          friendRequests.map(( {node} ) =>
          <FriendRequest
            key={node.__id}
            friendRequest={node}
            handleClick={this._acceptFriendRequest}
          />

        )
      }
    </ul>
    )
  }

  _acceptFriendRequest = (id) => {
    AcceptFriendRequestMutation(id)
  }
}

export default createFragmentContainer(FriendRequestList, graphql`
  fragment FriendRequestList_user on User {
    receivedFriendRequests(last: 100, orderBy: createdAt_DESC)
      @connection(key: "FriendRequestList_receivedFriendRequests", filters: []) {
      edges {
        node {
          ...FriendRequest_friendRequest
        }
      }
    }
  }
`)
