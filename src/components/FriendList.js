// display friend requests
import React from 'react';
import { createFragmentContainer, graphql } from 'react-relay'

import SubHeading from '../css/SubHeading'
import Divider from '../css/Divider'
import { Container } from '../css/BaseLayout'

import Friend from './Friend'

class FriendList extends React.Component {

  render () {
    const friends = this.props.user.friends.edges
    const activeFriendId = this.props.activeFriendId

    return (
      <Container>
        <SubHeading> Your friends </SubHeading>
        <Divider/>
        <ul css={`
            display: flex;
            `}>
          {
            friends.map(( {node} ) =>
            <Friend
              active={activeFriendId === node.id}
              key={node.id}
              friend={node}
              handleClick={this.props.updateActiveFriend}
            />

          )
        }
        </ul>
      </Container>
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
