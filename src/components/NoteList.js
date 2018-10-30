import React from 'react';

import styled from 'react-emotion'


const Container = styled.div(props => ({
  display: 'flex',
  flexDirection: props.column && 'column',
}))

class NoteList extends React.Component {

  componentDidMount() {
    const subscribe = this.props.subscribeToFriendNotes
    this.subscription = subscribe && subscribe(this.props.viewer.id)
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
