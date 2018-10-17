import React from 'react'

import CreateNote from './CreateNote'
import NoteList from './NoteList'
import JarList from './JarList'

import { QueryRenderer, graphql } from 'react-relay'
import environment from '../Environment'

import { GC_USER_ID } from '../constants'


const HomeQuery = graphql`
  query HomeQuery($userId: ID) {
    viewer {
      User(id: $userId) {
        email
        ...JarList_user
      }
    }
  }
`

class Home extends React.Component {

  render() {
  return (
    <QueryRenderer
      environment={environment}
      query={HomeQuery}
      variables={{
        jarFilter: {owner: {id: localStorage.getItem(GC_USER_ID)}},
        userId: localStorage.getItem(GC_USER_ID)
      }}
      render={({error, props}) => {
        if (error) {
          return <div>{error.message}</div>
        } else if (props) {
          return (
            <div>
              <JarList user={props.viewer.User} />
              <CreateNote />
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
