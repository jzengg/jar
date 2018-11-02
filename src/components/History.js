import React, { Component } from 'react'
import { QueryRenderer, graphql } from 'react-relay'
import environment from '../Environment'
import { GC_USER_ID } from '../constants'

import moment from 'moment'

import NoteList from './NoteList'
import EditableNote from './EditableNote'
import HistoryNav from './HistoryNav'

const HistoryQuery = graphql`
  query HistoryQuery($noteFilter: NoteFilter) {
    viewer {
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

class History extends Component {
  constructor(props) {
    super(props)
    const interval = 'week'

    this.state = {
      startDate: moment().startOf(interval),
      interval
    }
  }

  _back = () => {
    const { startDate, interval } = this.state
    const newStartDate = startDate.clone().subtract(1, interval)

    this._handleDateChange({ startDate: newStartDate })
  }

  _next = () => {
    const { startDate, interval } = this.state
    const today = moment().endOf('day')
    const newStartDate = startDate.clone().add(1, interval)

    if (newStartDate.isAfter(today)) return

    this._handleDateChange({ startDate: newStartDate })
  }

  _getEndDate(startDate = this.state.startDate) {
    return startDate.clone().add(1, this.state.interval).endOf('day')
  }

  _updateInterval(interval) {
    this.setState({ interval })
  }

  _handleDateChange = ({ startDate }) => {
    this.setState({ startDate })
  }

  render() {
    const userId = localStorage.getItem(GC_USER_ID)

    const variables = {
      noteFilter: {
        jar: { owner: { id: userId } },
        createdAt_gt: this.state.startDate,
        createdAt_lte: this._getEndDate()
      }
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
                <HistoryNav
                  back={this._back}
                  next={this._next}
                  updateInterval={this._updateInterval}
                  interval={this.state.interval}
                />
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

export default History
