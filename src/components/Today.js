import React, { Component } from 'react'

import moment from 'moment'

import CreateNote from './CreateNote'
import NoteList from './NoteList'

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
      ...NoteList_viewer @arguments(noteFilter: $noteFilter)
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

export default Today
