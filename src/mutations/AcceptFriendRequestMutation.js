import {
  commitMutation,
  graphql,
} from 'react-relay'

import {ConnectionHandler} from 'relay-runtime';

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
      updater: proxyStore => {
        const payload = proxyStore.getRootField('acceptFriendRequest')
        const user = proxyStore.get(payload.getValue('user2Id'))
        const conn = ConnectionHandler.getConnection(user, 'FriendRequestList_receivedFriendRequests')
        const badge_conn = ConnectionHandler.getConnection(user, 'ReceivedFriendRequestBadge_receivedFriendRequests')
        ConnectionHandler.deleteNode(conn, id)
        ConnectionHandler.deleteNode(badge_conn, id)
      },
      onError: err => console.error(err),
    },
  )
}
