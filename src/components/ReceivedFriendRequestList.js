// display friend requests
import React from 'react';
import { createFragmentContainer, graphql } from 'react-relay'

import AcceptFriendRequestMutation from '../mutations/AcceptFriendRequestMutation'
import IgnoreFriendRequestMutation from '../mutations/IgnoreFriendRequestMutation'

import FriendRequest from './FriendRequest'
import Timestamp from './Timestamp'

import { SecondaryButton, SmallPrimaryButton } from '../css/BaseButton'
import SubHeading from '../css/SubHeading'
import Divider from '../css/Divider'

import { Container } from '../css/BaseLayout'

const ListContainer = Container.withComponent('ul')

class ReceivedFriendRequestList extends React.Component {
  render () {
    let friendRequests = this.props.user.receivedFriendRequests.edges
    if (!friendRequests.length) return <div/>
    return (
      <ListContainer css={`
          display: flex;
          flex-direction: column;
          `}>

        <SubHeading> Received Requests </SubHeading>
        <Divider/>
        {
          friendRequests.map(( {node} ) =>
          <FriendRequest key={node.id}>
            <div css={`
              display: flex;
              justify-content: space-between;
              align-items: center;
              `}>
              <div>
              {node.sender.email}
              <Timestamp createdAt={node.createdAt}/>
              </div>
              <div css={`
                `}>
                <SecondaryButton css={`font-weight: 600; font-size: 0.85rem;`} onClick={ this._ignoreFriendRequest.bind(this, node.id) }> Ignore </SecondaryButton>
                <SmallPrimaryButton css={`margin-left: 0.5rem;`} onClick={ this._acceptFriendRequest.bind(this, node.id) }> Accept </SmallPrimaryButton>
              </div>
            </div>
          </FriendRequest>

        )
      }
    </ListContainer>

    )
  }

  _ignoreFriendRequest = (id) => {
    IgnoreFriendRequestMutation(id)
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
