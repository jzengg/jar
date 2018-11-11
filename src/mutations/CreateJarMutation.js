import {
  commitMutation,
  graphql,
} from 'react-relay'
import {ConnectionHandler} from 'relay-runtime';

import cuid from 'cuid'

import environment from '../Environment'

const mutation = graphql`
  mutation CreateJarMutation($input: CreateJarInput!) {
    createJar(input: $input) {
      viewer {
        id
      }
      jar {
        id
        name
        owner {
          id
        }
      }
    }
  }
`

export default (name, ownerId, callback) =>
  new Promise((resolve, reject) => {
    const variables = {
      input: {
        name,
        ownerId,
        clientMutationId: ""
      },
    }

    commitMutation(
      environment,
      {
        mutation,
        variables,
        onCompleted: (resp, err) => {
          if (err) return reject(err)
          return resolve(resp.createJar)
        },
        onError: (err) => {
          return reject(err)
        },
      }
    )
  })
