import React, { Component } from 'react'

import { QueryRenderer, graphql } from 'react-relay'
import environment from '../Environment'

import { GC_USER_ID } from '../constants'

import FriendList from './FriendList'
import NoteList from './NoteList'
import Note from './Note'

const FriendsQuery = graphql`
  query FriendsQuery($userId: ID, $noteFilter: NoteFilter) {
    viewer {
      User(id: $userId) {
        email
        ...FriendList_user
      }
      allNotes(last: 100, orderBy: createdAt_DESC, filter: $noteFilter) @connection(key: "Friends_allNotes", filters: []) {
        edges {
          node {
            ...Note_note
          }
        }
      }
    }
  }
`

class Friends extends Component {

  render() {
    const userId = localStorage.getItem(GC_USER_ID)

    const variables = {
      noteFilter: {
        jar: { owner: { friends_some: { id: userId } } }
      },
      userId: userId
    }

    return (
      <QueryRenderer
        environment={environment}
        query={FriendsQuery}
        variables={variables}
        render={({error, props}) => {
          if (error) {
            return <div>{error.message}</div>
          } else if (props) {
            return (
              <div>
                <h2> Friends </h2>
                <FriendList user={props.viewer.User} />
                <h2> Their notes </h2>
                  <NoteList>
                    {props.viewer.allNotes.edges.map(edge =>
                      <Note key={edge.node.__id} note={edge.node} />
                    )}
                  </NoteList>
              </div>
            )

          }
          return <div>Loading</div>
        }}
      />
    )
  }

}

export default Friends
