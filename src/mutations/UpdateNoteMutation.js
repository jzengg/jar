import {
  commitMutation,
  graphql,
} from 'react-relay'

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

export default (id, text, jarId) => {
  const variables = {
    input: {
      id,
      jarId,
      text,
      clientMutationId: ""
    },
  }

  commitMutation(
    environment,
    {
      mutation,
      variables,
      optimisticUpdater: (proxyStore) => {
        const jar = proxyStore.get(jarId)
        const node = proxyStore.get(id)
        node.setValue(text, 'text')
        node.setValue(id, 'id')
        node.setLinkedRecord(jar, 'jar')
      },
      onError: err => console.error(err),
    },
  )
}
