import React from 'react';
import { createFragmentContainer, graphql } from 'react-relay'

import FriendRequest from './FriendRequest'

class SentFriendRequestList extends React.Component {

  render () {
    let friendRequests = this.props.user.sentFriendRequests.edges
    return (
      <ul>
        {
          friendRequests.map(( {node} ) =>
          <FriendRequest
            key={node.id}
            friendRequest={node}
          >
            To: {node.recipient.email}
            status: {node.status}
          </FriendRequest>

        )
      }
    </ul>
    )
  }
}

export default createFragmentContainer(SentFriendRequestList, graphql`
  fragment SentFriendRequestList_user on User @argumentDefinitions(
    friendRequestFilter: {type: "FriendRequestFilter"}
  ) {
    sentFriendRequests(last: 100, orderBy: createdAt_DESC, filter: $friendRequestFilter)
      @connection(key: "FriendRequestList_sentFriendRequests", filters: []) {
      edges {
        node {
          id
          status
          createdAt
          recipient {
            email
          }
        }
      }
    }
  }
`)
