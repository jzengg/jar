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

export default (senderId, email, callback) =>
  new Promise((resolve, reject) => {
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
        onCompleted: (resp, err) => {
          if (err) return reject(err)
          return resolve(resp.addFriendByEmail)
        },
        onError: (err) => {
          return reject(err)
        }
      }
    )
  })
