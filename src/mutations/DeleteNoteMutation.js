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

const sharedUpdater = (proxyStore, id) => {
  const viewer = proxyStore.getRoot().getLinkedRecord('viewer')
  const conn = ConnectionHandler.getConnection(viewer, 'NoteList_allNotes')
  ConnectionHandler.deleteNode(conn, id)
}

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
      optimisticUpdater: proxyStore => {
        sharedUpdater(proxyStore, id)
      },
      updater: proxyStore => {
        sharedUpdater(proxyStore, id)
      },
      onError: err => console.error(err),
    },
  )
}
