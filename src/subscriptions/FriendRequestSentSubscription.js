import {
  graphql,
  requestSubscription
} from 'react-relay'

import {ConnectionHandler} from 'relay-runtime';

import environment from '../Environment'

const friendRequestSentSubscription = graphql`
  subscription FriendRequestSentSubscription($filter: FriendRequestSubscriptionFilter) {
    FriendRequest(filter: $filter) {
      mutation
      node {
        id
        status
        recipient {
          id
          email
        }
        sender {
          id
          email
        }
      }
    }
  }
`

export default (userId) => {
  const filter = {
    node: {
      sender: {
        id: userId
      }
    },
  }

  const subscriptionConfig = {
    subscription: friendRequestSentSubscription,
    variables: { filter },
    updater: proxyStore => {
      const payload = proxyStore.getRootField('FriendRequest')
      const mutation = payload.getValue('mutation')
      if (mutation === 'CREATED') {
        const user = proxyStore.get(userId)
        const conn = ConnectionHandler.getConnection(user, 'FriendRequestList_sentFriendRequests')
        const friendRequest = payload.getLinkedRecord('node')
        const edge = ConnectionHandler.createEdge(proxyStore, conn, friendRequest, 'SentFriendsRequestsEdge')
        ConnectionHandler.insertEdgeBefore(conn, edge)
      }
    },
    onError: error => console.log(`An error occured:`, error)
  }

  return requestSubscription(
    environment,
    subscriptionConfig
  )

}
