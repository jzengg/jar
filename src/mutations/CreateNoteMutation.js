import {
  commitMutation,
  graphql,
} from 'react-relay'
import {ConnectionHandler} from 'relay-runtime';

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
        }
      }
    }
  }
`

export default (text, jarId, callback) => {
  const variables = {
    input: {
      text,
      jarId,
      clientMutationId: ""
    },
  }

  commitMutation(
    environment,
    {
      mutation,
      variables,
      updater: proxyStore => {
        const payload = proxyStore.getRootField('createNote')
        const viewer = payload.getLinkedRecord('viewer')
        const note = payload.getLinkedRecord('note')
        const notes = ConnectionHandler.getConnection(viewer, 'NoteList_allNotes')
        const edge = ConnectionHandler.createEdge(proxyStore, notes, note, 'NotesEdge')
        ConnectionHandler.insertEdgeBefore(notes, edge)
      },
      onError: err => console.error(err),
    },
  )
}
