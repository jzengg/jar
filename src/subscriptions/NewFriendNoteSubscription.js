import {
  graphql,
  requestSubscription
} from 'react-relay'

import {ConnectionHandler} from 'relay-runtime';

import environment from '../Environment'

const newFriendNoteSubscription = graphql`
  subscription NewFriendNoteSubscription($filter: NoteSubscriptionFilter) {
    Note(filter: $filter) {
      mutation
      previousValues {
        id
      }
      node {
        id
        text
        createdAt
        jar {
          owner {
            id
            email
          }
        }
      }
    }
  }
`

export default (viewerId, userId) => {
  const filter = {
    node: {
      jar: {
        owner: {
        AND: [
          {friends_some: {
            id: userId
          }},
          {id_not: userId}
        ]
        }
      }
    }
  }

  const subscriptionConfig = {
    subscription: newFriendNoteSubscription,
    variables: { userId, filter },
    updater: proxyStore => {
      const payload = proxyStore.getRootField('Note')
      const mutation = payload.getValue('mutation')
      const viewer = proxyStore.get(viewerId)
      const conn = ConnectionHandler.getConnection(viewer, 'NoteList_allNotes')
      if (mutation === 'CREATED') {
        const note = payload.getLinkedRecord('node')
        const edge = ConnectionHandler.createEdge(proxyStore, conn, note, 'NotesEdge')
        ConnectionHandler.insertEdgeBefore(conn, edge)
      } else if (mutation === 'DELETED') {
        const deletedId = payload.getLinkedRecord('previousValues').getValue('id')
        ConnectionHandler.deleteNode(conn, deletedId)
      }
    },
    onError: error => console.log(`An error occured:`, error)
  }


  return requestSubscription(
    environment,
    subscriptionConfig
  )

}
