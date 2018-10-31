import React, { Component } from 'react'
import moment from 'moment'
import { QueryRenderer, graphql } from 'react-relay'

import environment from '../Environment'
import { GC_USER_ID } from '../constants'

import CreateNote from './CreateNote'
import NoteList from './NoteList'
import EditableNote from './EditableNote'
import Note from './Note'

const TodayQuery = graphql`
  query TodayQuery($userId: ID, $noteFilter: NoteFilter) {
    viewer {
      id
      User(id: $userId) {
        email
        ...CreateNote_user
      }
      allNotes(last: 100, orderBy: createdAt_DESC, filter: $noteFilter) @connection(key: "NoteList_allNotes", filters: []) {
        edges {
          node {
            ...EditableNote_note
            ...Note_note
            jar {
              owner {
                id
              }
            }
          }
        }
      }
    }
  }
`

class Today extends Component {

  render() {
    const userId = localStorage.getItem(GC_USER_ID)
    const dayStart = moment().startOf('day')
    const dayEnd = moment().endOf('day')

    const variables = {
      noteFilter: {
        jar: {
          OR: [
            { owner: { id: userId } },
            { owner: { friends_some: { id: userId } } }
          ],
        },
        createdAt_gt: dayStart,
        createdAt_lte: dayEnd
      },
      userId: userId
    }

    return (
      <QueryRenderer
        environment={environment}
        query={TodayQuery}
        variables={variables}
        render={({error, props}) => {
          if (error) {
            return <div>{error.message}</div>
          } else if (props) {
            return (
              <div>
                <h2> Add a New Note </h2>
                <CreateNote user={props.viewer.User} />

                <h2> Notes from Today </h2>
                <NoteList subscribe>
                  {props.viewer.allNotes.edges.map(({ node }) => {
                    const isAuthor = node.jar.owner.id === userId

                    if (isAuthor) {
                      return <EditableNote key={node.__id} note={node} />
                    } else {
                      return <Note key={node.__id} note={node} />
                    }
                  }
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

export default Today
