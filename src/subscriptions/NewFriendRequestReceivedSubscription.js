import {
  graphql,
  requestSubscription
} from 'react-relay'

import {ConnectionHandler} from 'relay-runtime';

import environment from '../Environment'

const newFriendRequestReceivedSubscription = graphql`
  subscription NewFriendRequestReceivedSubscription($filter: FriendRequestSubscriptionFilter) {
    FriendRequest(filter: $filter) {
      mutation
      node {
        id
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

export default (viewerId, userId) => {
  const filter = {
    node: {
      recipient: {
        id: userId
      }
    },
    mutation_in: "CREATED"
  }

  const subscriptionConfig = {
    subscription: newFriendRequestReceivedSubscription,
    variables: { userId, filter },
    // updater: proxyStore => {
    //   const payload = proxyStore.getRootField('Note')
    //   const mutation = payload.getValue('mutation')
    //   const viewer = proxyStore.get(viewerId)
    //   const conn = ConnectionHandler.getConnection(viewer, 'NoteList_allNotes')
    //   if (mutation === 'CREATED') {
    //     const note = payload.getLinkedRecord('node')
    //     const edge = ConnectionHandler.createEdge(proxyStore, conn, note, 'NotesEdge')
    //     ConnectionHandler.insertEdgeBefore(conn, edge)
    //   } else if (mutation === 'DELETED') {
    //     const deletedId = payload.getLinkedRecord('previousValues').getValue('id')
    //     ConnectionHandler.deleteNode(conn, deletedId)
    //   }
    // },
    onError: error => console.log(`An error occured:`, error)
  }


  return requestSubscription(
    environment,
    subscriptionConfig
  )

}
