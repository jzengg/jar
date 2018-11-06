import React from 'react';
import { createFragmentContainer, graphql } from 'react-relay'
import { GC_USER_ID } from '../constants'

import FriendRequestSentSubscription from '../subscriptions/FriendRequestSentSubscription'

import FriendRequest from './FriendRequest'
import Timestamp from './Timestamp'

import SubHeading from '../css/SubHeading'
import Divider from '../css/Divider'

import { Container } from '../css/BaseLayout'

const ListContainer = Container.withComponent('ul')

class SentFriendRequestList extends React.Component {

    _subscribeToFriendRequestSent(userId) {
      return FriendRequestSentSubscription(userId)
    }

    componentDidMount() {
      const userId = localStorage.getItem(GC_USER_ID)
      this.subscription = this.props.subscribe && this._subscribeToFriendRequestSent(userId)
    }

    componentWillUnmount() {
      this.subscription && this.subscription.dispose()
    }

  render () {
    let friendRequests = this.props.user.sentFriendRequests.edges
    if (!friendRequests.length) return <div/>

    return (
      <ListContainer css={`
          display: flex;
          flex-direction: column;
          `}>

        <SubHeading> Sent Requests </SubHeading>
        <Divider/>
        {
          friendRequests.map(( {node} ) =>
          <FriendRequest
            key={node.id}
            friendRequest={node}
          >
            <div>
              {node.recipient.email}
            </div>
            <Timestamp createdAt={node.createdAt}/>

          </FriendRequest>

        )
      }
    </ListContainer>
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
          createdAt
          recipient {
            email
          }
        }
      }
    }
  }
`)
