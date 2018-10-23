import {
  commitMutation,
  graphql,
} from 'react-relay'

import environment from '../Environment'

const mutation = graphql`
  mutation AcceptFriendRequestMutation($id: ID!) {
    acceptFriendRequest(id: $id) {
      user1Id
      user2Id
    }
  }
`

export default (id, callback) => {
  const variables = {
    id,
    clientMutationId: ""
  }

  commitMutation(
    environment,
    {
      mutation,
      variables,
      onCompleted: (response) => {
        console.log('accepted fr')
      },
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
