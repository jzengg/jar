import React from 'react';
import { createFragmentContainer, graphql } from 'react-relay'


class SentFriendRequestBadge extends React.Component {
  render () {
    const sentFriendRequests = this.props.user.sentFriendRequests.edges
    return (
        <span css={`
          color: red;
          `}>
          { sentFriendRequests.length }
        </span>
    )
  }
}

export default createFragmentContainer(SentFriendRequestBadge, graphql`
  fragment SentFriendRequestBadge_user on User @argumentDefinitions(
    friendRequestFilter: {type: "FriendRequestFilter"}
  ) {
    sentFriendRequests(last: 100, orderBy: createdAt_DESC, filter: $friendRequestFilter)
      @connection(key: "SentFriendRequestBadge_sentFriendRequests", filters: []) {
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
