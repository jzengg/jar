import React from 'react';
import { GC_USER_ID } from '../constants'

import NewFriendNoteSubscription from '../subscriptions/NewFriendNoteSubscription'

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
      <React.Fragment>
        {this.props.children}
      </React.Fragment>
    )
  }

}

export default NoteList
