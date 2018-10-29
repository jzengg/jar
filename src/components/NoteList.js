import React from 'react';

import styled from 'react-emotion'


const Container = styled.div(props => ({
  display: 'flex',
  flexDirection: props.column && 'column',
}))

class NoteList extends React.Component {

  render () {
    return (
      <Container column>
        {this.props.children}
      </Container>
    )
  }

}

export default NoteList
