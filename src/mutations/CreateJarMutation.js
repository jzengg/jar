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

const sharedUpdater = (proxyStore, node) => {
  const viewer = proxyStore.getRoot().getLinkedRecord('viewer')
  const conn = ConnectionHandler.getConnection(viewer, 'JarSelect_jars')
  const edge = ConnectionHandler.createEdge(proxyStore, conn, node, 'JarsEdge')
  ConnectionHandler.insertEdgeBefore(conn, edge)
}

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
        updater: proxyStore => {
          const payload = proxyStore.getRootField('createJar')
          const jar = payload.getLinkedRecord('jar')
          const owner = jar.getLinkedRecord('owner')
          const conn = ConnectionHandler.getConnection(owner, 'JarSelect_jars')
          const edge = ConnectionHandler.createEdge(proxyStore, conn, jar, 'JarsEdge')
          ConnectionHandler.insertEdgeBefore(conn, edge)
        },
      }
    )
  })
