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

export default (email, password) =>
  new Promise((resolve, reject) => {
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
        onCompleted: (resp, err) => {
          if (err) return reject(err)
          return resolve(resp.authenticateUser)
        },
        onError: (err) => {
          return reject(err)
        }
      }
    )
  })
