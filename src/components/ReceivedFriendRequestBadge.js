import React from 'react';
import { createFragmentContainer, graphql } from 'react-relay'

class ReceivedFriendRequestBadge extends React.Component {

  render () {
    const receivedFriendRequests = this.props.user.receivedFriendRequests.edges
    return (
        <span css={`
          color: red;
          `}>
          { receivedFriendRequests.length }
        </span>
    )
  }
}

export default createFragmentContainer(ReceivedFriendRequestBadge, graphql`
  fragment ReceivedFriendRequestBadge_user on User @argumentDefinitions(
    friendRequestFilter: {type: "FriendRequestFilter"}
  ) {
    receivedFriendRequests(last: 100, orderBy: createdAt_DESC, filter: $friendRequestFilter)
      @connection(key: "ReceivedFriendRequestBadge_receivedFriendRequests", filters: []) {
      edges {
        node {
          id
          status
          sender {
            id
            email
          }
        }
      }
    }
  }
`)
