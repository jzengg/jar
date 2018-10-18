import React, { Component } from 'react'
import { QueryRenderer, graphql } from 'react-relay'
import environment from '../Environment'
import { GC_USER_ID } from '../constants'

import moment from 'moment'

import NoteList from './NoteList'

const HistoryQuery = graphql`
  query HistoryQuery($noteFilter: NoteFilter) {
    viewer {
      ...NoteList_viewer @arguments(noteFilter: $noteFilter)
    }
  }
`

class History extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dayStart: moment().startOf('week'),
      dayEnd: moment().endOf('day')
    }
  }
  render() {
    const userId = localStorage.getItem(GC_USER_ID)

    const variables = {
      noteFilter: {
        jar: { owner: { id: userId } },
        createdAt_gt: this.state.dayStart,
        createdAt_lte: this.state.dayEnd
      },
    }

    return (
      <QueryRenderer
        environment={environment}
        query={HistoryQuery}
        variables={variables}
        render={({error, props}) => {
          if (error) {
            return <div>{error.message}</div>
          } else if (props) {
            return (
              <div>
                <h2> Notes from this week </h2>
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

export default History
