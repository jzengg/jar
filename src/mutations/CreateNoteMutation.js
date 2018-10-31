import {
  commitMutation,
  graphql,
} from 'react-relay'
import {ConnectionHandler} from 'relay-runtime';

import cuid from 'cuid'

import environment from '../Environment'

const mutation = graphql`
  mutation CreateNoteMutation($input: CreateNoteInput!) {
    createNote(input: $input) {
      viewer {
        id
      }
      note {
        id
        createdAt
        text
        jar {
          id
          name
          owner {
            id
            email
            jars {
              edges {
                node {
                  id
                  name
                }
              }
            }
          }
        }

      }
    }
  }
`

const sharedUpdater = (proxyStore, node) => {
  const viewer = proxyStore.getRoot().getLinkedRecord('viewer')
  const conn = ConnectionHandler.getConnection(viewer, 'NoteList_allNotes')
  const edge = ConnectionHandler.createEdge(proxyStore, conn, node, 'NotesEdge')
  ConnectionHandler.insertEdgeBefore(conn, edge)
}

export default (text, jarId, callback) => {
  const variables = {
    input: {
      text,
      jarId,
      clientMutationId: ""
    },
  }

  const id = cuid()

  commitMutation(
    environment,
    {
      mutation,
      variables,
      optimisticUpdater: proxyStore => {
        const jar = proxyStore.get(jarId)
        const node = proxyStore.create(`create-note${id}`, 'Note')
        node.setValue(text, 'text')
        node.setValue(id, 'id')
        node.setLinkedRecord(jar, 'jar')

        const newEdge = proxyStore.create(
          `new-edge-${id}`,
          'NoteEdge',
        )
        newEdge.setLinkedRecord(node, 'node')
        sharedUpdater(proxyStore, node)
      },
      updater: proxyStore => {
        const payload = proxyStore.getRootField('createNote')
        const note = payload.getLinkedRecord('note')

        sharedUpdater(proxyStore, note)
      },
      onError: err => console.error(err),
    },
  )
}
