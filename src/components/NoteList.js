import React from 'react';
import { GC_USER_ID } from '../constants'

import NewFriendNoteSubscription from '../subscriptions/NewFriendNoteSubscription'

import styled from 'react-emotion'


const Container = styled.div(props => ({
  display: 'flex',
  flexDirection: props.column && 'column',
}))

class NoteList extends React.Component {

  _subscribeToFriendNotes(userId) {
    return NewFriendNoteSubscription(userId)
  }

  componentDidMount() {
    const userId = localStorage.getItem(GC_USER_ID)
    this.subscription = this.props.subscribe && this._subscribeToFriendNotes(userId)
  }

  componentWillUnmount() {
    this.subscription && this.subscription.dispose()
  }

  render () {
    return (
      <Container column>
        {this.props.children}
      </Container>
    )
  }

}

export default NoteList
