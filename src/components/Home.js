import React from 'react'

import NoteList from './NoteList'

import { QueryRenderer, graphql } from 'react-relay'
import environment from '../Environment'

import { GC_USER_ID } from '../constants'


const HomeQuery = graphql`
  query HomeQuery($userId: ID, $noteFilter: NoteFilter) {
    viewer {
      User(id: $userId) {
        email
        ...JarList_user
      }
      ...NoteList_viewer @arguments(noteFilter: $noteFilter)
    }
  }
`

class Home extends React.Component {

  render() {
    const userId = localStorage.getItem(GC_USER_ID)
    const variables = {
      noteFilter: { jar: { owner: { id: userId } } },
      userId: userId
    }

  return (
    <QueryRenderer
      environment={environment}
      query={HomeQuery}
      variables={variables}
      render={({error, props}) => {
        if (error) {
          return <div>{error.message}</div>
        } else if (props) {
          return (
            <div>
              <NoteList viewer={props.viewer} />
          </div>
          )

        }
        return <div>Loading</div>
      }}
    />
  )
}

}

export default Home
