import React from 'react';
import { createFragmentContainer, graphql } from 'react-relay'


class ReceivedFriendRequestBadge extends React.Component {
  render () {
    const receivedFriendRequests = this.props.user.receivedFriendRequests.edges
    return (
        <span css={`
          color: white;
          border-radius: 20px;
          font-weight: 600;
          font-size: 12px;
          padding: 2px 5px;
          margin-left: 3px;
          background-color: hsla(0,0%,25%,.25);
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
