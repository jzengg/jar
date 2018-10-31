import {
  commitMutation,
  graphql,
} from 'react-relay'
// import {ConnectionHandler} from 'relay-runtime';

import environment from '../Environment'

const mutation = graphql`
  mutation CreateFriendRequestMutation($email: String!, $senderId: ID!) {
    addFriendByEmail(email: $email, senderId: $senderId) {
      id
    }
  }
`

export default (senderId, email, callback) => {
  const variables = {
    senderId,
    email,
    clientMutationId: ""
  }

  commitMutation(
    environment,
    {
      mutation,
      variables,
      // updater: proxyStore => {
      //   const payload = proxyStore.getRootField('createNote')
      //   const viewer = payload.getLinkedRecord('viewer')
      //   const note = payload.getLinkedRecord('note')
      //   const notes = ConnectionHandler.getConnection(viewer, 'NoteList_allNotes')
      //   const edge = ConnectionHandler.createEdge(proxyStore, notes, note, 'NotesEdge')
      //   ConnectionHandler.insertEdgeBefore(notes, edge)
      // },
      onError: err => console.error(err),
    },
  )
}
