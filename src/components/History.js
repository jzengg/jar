import React, { Component } from 'react'
import { QueryRenderer, graphql } from 'react-relay'
import environment from '../Environment'
import { GC_USER_ID } from '../constants'

import moment from 'moment'

import NoteList from './NoteList'
import EditableNote from './EditableNote'
import HistoryNav from './HistoryNav'
import Spinner from './Spinner'

import SubHeading from '../css/SubHeading'
import Divider from '../css/Divider'
import { Container } from '../css/BaseLayout'


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
      endDate: moment().endOf('day'),
      interval
    }
  }

  _setPrevInterval = () => {
    const { endDate, interval } = this.state
    const newEndDate = endDate.clone().subtract(1, interval).endOf(interval)

    this.setState({ endDate: newEndDate })
  }

  _setNextInterval = () => {
    const { endDate, interval } = this.state
    const today = moment().endOf('day')

    if (today.isSame(endDate)) return

    let newEndDate = endDate.clone().add(1, interval)

    if (newEndDate.isAfter(today)) {
      newEndDate = today
    }

    this.setState({ endDate: newEndDate })
  }

  _getStartDate() {
    return this.state.endDate.clone().startOf(this.state.interval)
  }

  _updateInterval = ({ value, label }) => {
    this.setState({ interval: value })
  }

  render() {
    const userId = localStorage.getItem(GC_USER_ID)
    const startDate = this._getStartDate()

    const variables = {
      noteFilter: {
        jar: { owner: { id: userId } },
        createdAt_gt: startDate,
        createdAt_lte: this.state.endDate
      }
    }

    const intervalOptions = [
      {value: 'week', label: 'Week'},
      {value: 'month', label: 'Month'},
      {value: 'year', label: 'Year'},
    ]

    const headers = {
      week: `${startDate.format('dddd MM/DD/YYYY')} - ${this.state.endDate.format('dddd MM/DD/YYYY')}`,
      month: startDate.format('MMMM YYYY'),
      year: startDate.year()
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
                <Container css={`
                    text-align: center;
                    `}>
                  <SubHeading css={`margin-bottom: 1rem;`}> { headers[this.state.interval] } </SubHeading>
                  <HistoryNav
                    setPrevInterval={this._setPrevInterval}
                    setNextInterval={this._setNextInterval}
                    updateInterval={this._updateInterval}
                    interval={this.state.interval}
                    intervalOptions={intervalOptions}
                  />
                </Container>
                <Divider/>
                <NoteList>
                  {props.viewer.allNotes.edges.map(edge =>
                    <EditableNote key={edge.node.__id} note={edge.node} />
                  )}
                </NoteList>
              </div>
            )

          }
          return <Spinner />
        }}
      />
    )
  }

}

export default History
