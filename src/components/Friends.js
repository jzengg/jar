import React, { Component } from 'react'
import moment from 'moment'
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
        friends(last: 100, orderBy: createdAt_DESC)
          @connection(key: "FriendList_friends", filters: []) {
          edges {
            node {
              id
            }
          }
        }
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

  constructor(props) {
    super(props)

    this.state = {
      activeFriendId: null
    }
  }

  _updateActiveFriend = (activeFriendId) => {
    this.setState({ activeFriendId })
  }

  render() {
    const userId = localStorage.getItem(GC_USER_ID)
    const startDate = moment().subtract(1, 'day').startOf('day')
    const endDate = moment().endOf('day')

    const variables = {
      noteFilter: {
        jar: { owner: { friends_some: { id: userId } } },
        createdAt_gt: startDate,
        createdAt_lte: endDate
      },
      userId: userId
    }

    if (this.state.activeFriendId) {
      variables.noteFilter.jar.owner.id = this.state.activeFriendId
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
                <FriendList
                  user={props.viewer.User}
                  updateActiveFriend={this._updateActiveFriend}
                  activeFriendId={this.state.activeFriendId}
                />
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
