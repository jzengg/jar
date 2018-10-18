import {
  commitMutation,
  graphql,
} from 'react-relay'
import environment from '../Environment'

const mutation = graphql`
  mutation CreateNoteMutation($input: CreateNoteInput!) {
    createNote(input: $input) {
      note {
        id
        createdAt
        text
        jar {
          id
          name
        }
      }
    }
  }
`

export default (text, jarId, callback) => {
  const variables = {
    input: {
      text,
      jarId,
      clientMutationId: ""
    },
  }

  commitMutation(
    environment,
    {
      mutation,
      variables,
      onCompleted: () => {
        callback()
      },
      onError: err => console.error(err),
    },
  )
}
