import React, { Component } from 'react'

import moment from 'moment'

import CreateNote from './CreateNote'
import NoteList from './NoteList'
import EditableNote from './EditableNote'

import { QueryRenderer, graphql } from 'react-relay'
import environment from '../Environment'

import { GC_USER_ID } from '../constants'

const TodayQuery = graphql`
  query TodayQuery($userId: ID, $noteFilter: NoteFilter) {
    viewer {
      User(id: $userId) {
        email
        ...CreateNote_user
      }
      allNotes(last: 100, orderBy: createdAt_DESC, filter: $noteFilter) @connection(key: "NoteList_allNotes", filters: []) {
        edges {
          node {
            ...EditableNote_note
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
        jar: { owner: { id: userId } },
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
                <NoteList>
                  {props.viewer.allNotes.edges.map(edge =>
                    <EditableNote key={edge.node.__id} note={edge.node} />
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
