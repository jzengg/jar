import {
  commitMutation,
  graphql,
} from 'react-relay'

import {ConnectionHandler} from 'relay-runtime';

import environment from '../Environment'

const mutation = graphql`
  mutation IgnoreFriendRequestMutation($input: UpdateFriendRequestInput!) {
    updateFriendRequest(input: $input) {
      friendRequest {
        id
        status
      }
      recipient {
        id
        email
      }
      sender {
        id
        email
      }
    }
  }
`

export default (id) => {
  const status = 'IGNORED'
  const variables = {
    input: {
      id,
      status,
      clientMutationId: ""
    }
  }

  commitMutation(
    environment,
    {
      mutation,
      variables,
      updater: proxyStore => {
        const payload = proxyStore.getRootField('updateFriendRequest')
        const user = payload.getLinkedRecord('recipient')
        const conn = ConnectionHandler.getConnection(user, 'FriendRequestList_receivedFriendRequests')
        const badge_conn = ConnectionHandler.getConnection(user, 'ReceivedFriendRequestBadge_receivedFriendRequests')
        ConnectionHandler.deleteNode(conn, id)
        ConnectionHandler.deleteNode(badge_conn, id)
      },
      onError: err => console.error(err),
    },
  )
}
