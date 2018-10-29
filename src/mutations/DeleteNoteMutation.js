import {
  commitMutation,
  graphql,
} from 'react-relay'
import {ConnectionHandler} from 'relay-runtime';

import environment from '../Environment'

const mutation = graphql`
  mutation DeleteNoteMutation($input: DeleteNoteInput!) {
    deleteNote(input: $input) {
      viewer {
        id
      }
      deletedId
    }
  }
`

export default (id, callback) => {
  const variables = {
    input: {
      id,
      clientMutationId: ""
    },
  }

  commitMutation(
    environment,
    {
      mutation,
      variables,
      updater: proxyStore => {
        const payload = proxyStore.getRootField('deleteNote')
        const viewer = payload.getLinkedRecord('viewer')
        const deletedId = payload.getValue('deletedId')
        const conn = ConnectionHandler.getConnection(viewer, 'NoteList_allNotes')
        ConnectionHandler.deleteNode(conn, deletedId)
      },
      onError: err => console.error(err),
    },
  )
}
