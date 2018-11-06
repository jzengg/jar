// display friend requests
import React from 'react';
import { createFragmentContainer, graphql } from 'react-relay'

import Friend from './Friend'

class FriendList extends React.Component {

  render () {
    const friends = this.props.user.friends.edges
    const activeFriendIds = this.props.activeFriendIds

    return (
      <ul css={`
          display: flex;
          `}>
        {
          friends.map(( {node} ) =>
          <Friend
            active={activeFriendIds.includes(node.id)}
            key={node.id}
            friend={node}
            handleClick={this.props.updateActiveFriend}
          />

        )
      }
    </ul>
    )
  }
}

export default createFragmentContainer(FriendList, graphql`
  fragment FriendList_user on User {
    friends(last: 100, orderBy: createdAt_DESC)
      @connection(key: "FriendList_friends", filters: []) {
      edges {
        node {
          id
          ...Friend_friend
        }
      }
    }
  }
`)
