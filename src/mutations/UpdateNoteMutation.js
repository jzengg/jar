import {
  commitMutation,
  graphql,
} from 'react-relay'
import {ConnectionHandler} from 'relay-runtime';

import environment from '../Environment'

const mutation = graphql`
  mutation UpdateNoteMutation($input: UpdateNoteInput!) {
    updateNote(input: $input) {
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
          }
        }

      }
    }
  }
`

export default (id, text, callback) => {
  const variables = {
    input: {
      id,
      text,
      clientMutationId: ""
    },
  }

  commitMutation(
    environment,
    {
      mutation,
      variables,
      // updater: proxyStore => {
      //   const payload = proxyStore.getRootField('deleteNote')
      //   const viewer = payload.getLinkedRecord('viewer')
      //   const deletedId = payload.getValue('deletedId')
      //   const conn = ConnectionHandler.getConnection(viewer, 'NoteList_allNotes')
      //   ConnectionHandler.deleteNode(conn, deletedId)
      // },
      onError: err => console.error(err),
    },
  )
}
