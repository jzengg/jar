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
      if (mutation === 'CREATED') {
        const note = payload.getLinkedRecord('node')
        const viewer = proxyStore.get(viewerId)

        const conn = ConnectionHandler.getConnection(viewer, 'NoteList_allNotes')
        const edge = ConnectionHandler.createEdge(proxyStore, conn, note, 'NotesEdge')
        ConnectionHandler.insertEdgeBefore(conn, edge)
      } else if (mutation === 'DELETED') {

      } else if (mutation === 'UPDATED') {

      }
    },
    onError: error => console.log(`An error occured:`, error)
  }


  return requestSubscription(
    environment,
    subscriptionConfig
  )

}
