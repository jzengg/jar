import React, { Component } from 'react'
import { QueryRenderer, graphql } from 'react-relay'
import moment from 'moment'

import environment from '../../Environment'
import { GC_USER_ID } from '../../constants'


import NoteList from '../NoteList'
import EditableNote from '../EditableNote'
import HistoryNav from '../HistoryNav'
import Spinner from '../Spinner'

import Divider from '../../css/Divider'
import SubHeading from '../../css/SubHeading'

const HistoryQuery = graphql`
  query HistoryQuery($userId: ID, $noteFilter: NoteFilter) {
    viewer {
      User(id: $userId) {
        ...HistoryNav_user
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

export const allJarsCode = 'ALL'

class History extends Component {
  constructor(props) {
    super(props)
    const interval = 'week'

    this.state = {
      endDate: moment().endOf('day'),
      interval,
      jarId: allJarsCode
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

  _updateJar = ({ label, value }) => {
    this.setState({ jarId: value })
  }

  render() {
    const userId = localStorage.getItem(GC_USER_ID)
    const startDate = this._getStartDate()
    const { jarId } = this.state

    const variables = {
      noteFilter: {
        jar: { owner: { id: userId } },
        createdAt_gt: startDate,
        createdAt_lte: this.state.endDate
      },
      userId
    }

    if (jarId !== allJarsCode) {
      variables.noteFilter.jar.id = jarId
    }

    const intervalOptions = [
      {value: 'week', label: 'Week'},
      {value: 'month', label: 'Month'},
      {value: 'year', label: 'Year'},
    ]

    const headers = {
      week: `${startDate.format('ddd MM/DD')} - ${this.state.endDate.format('ddd MM/DD')}`,
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
              <React.Fragment>
                <div css={`
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    text-align: center;
                    `}>
                  <SubHeading css={`
                      margin-bottom: 1rem;
                      `}> { headers[this.state.interval] } </SubHeading>
                  <HistoryNav
                    user={props.viewer.User}
                    jarId={jarId}
                    updateJar={this._updateJar}
                    setPrevInterval={this._setPrevInterval}
                    setNextInterval={this._setNextInterval}
                    updateInterval={this._updateInterval}
                    interval={this.state.interval}
                    intervalOptions={intervalOptions}
                  />
              </div>
                <Divider/>
                <NoteList>
                  {props.viewer.allNotes.edges.map(edge =>
                    <EditableNote key={edge.node.__id} note={edge.node} />
                  )}
                </NoteList>
              </React.Fragment>
            )

          }
          return <Spinner />
        }}
      />
    )
  }

}

export default History
