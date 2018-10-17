import {
  commitMutation,
  graphql
} from 'react-relay'
import environment from '../Environment'

const mutation = graphql`
  mutation AuthenticateUserMutation($email: String!, $password: String!) {
    authenticateUser(email: $email, password: $password) {
      id
      token
    }
  }
`

export default (email, password, callback) => {
  const variables = {
    email,
    password,
    clientMutationId: ""
  }

  commitMutation(
    environment,
    {
      mutation,
      variables,
      onCompleted: (response) => {
        const { id, token } = response.authenticateUser
        callback(id, token)
      },
      onError: err => console.error(err),
    },
  )
}
