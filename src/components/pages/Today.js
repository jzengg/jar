import React, { Component } from 'react'
import moment from 'moment'
import { QueryRenderer, graphql } from 'react-relay'

import environment from '../../Environment'
import { GC_USER_ID } from '../../constants'

import NewFriendNoteSubscription from '../../subscriptions/NewFriendNoteSubscription'

import Subscriber from '../Subscriber'
import CreateNote from '../CreateNote'
import NoteList from '../NoteList'
import EditableNote from '../EditableNote'
import Note from '../Note'
import Spinner from '../Spinner'

import SubHeading from '../../css/SubHeading'

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
    const startDate = moment().startOf('day')
    const endDate = moment().endOf('day')

    const variables = {
      noteFilter: {
        jar: {
          OR: [
            { owner: { id: userId } },
            { owner: { friends_some: { id: userId } } }
          ],
        },
        createdAt_gt: startDate,
        createdAt_lte: endDate
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
              <React.Fragment>
                <CreateNote user={props.viewer.User} />

                <Subscriber
                  startSub={NewFriendNoteSubscription.bind(null, userId)}
                  render={(subscription) => {
                    return (
                      <NoteList>
                        <SubHeading> Notes from Today </SubHeading>
                        {props.viewer.allNotes.edges.map(({ node }) => {
                          const isAuthor = node.jar.owner.id === userId
                          const NoteType = isAuthor ? EditableNote : Note
                          return <NoteType key={node.__id} note={node} />
                        }
                        )}
                    </NoteList>
                    )
                  }}
                />

              </React.Fragment>
            )

          }
          return <Spinner />
        }}
      />
    )
  }

}

export default Today
