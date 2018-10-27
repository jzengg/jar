import React from 'react';
import { createFragmentContainer, graphql } from 'react-relay'

import styled from 'react-emotion'

import Note from './Note'

const Container = styled.div(props => ({
  display: 'flex',
  flexDirection: props.column && 'column',
  justifyContent: 'space-between'
}))

class NoteList extends React.Component {

  render () {
    let notes = this.props.viewer.allNotes.edges

    return (
      <Container column>
        {
          notes.map(( {node} ) =>
          <Note key={node.__id} note={node} />

        )
      }
    </Container>
  )
}


}

export default createFragmentContainer(NoteList, graphql`
  fragment NoteList_viewer on Viewer @argumentDefinitions(
    noteFilter: {type: "NoteFilter"},
    orderBy: {type: "NoteOrderBy", defaultValue: "createdAt_DESC"}
  ) {
    allNotes(last: 100, orderBy: $orderBy, filter: $noteFilter) @connection(key: "NoteList_allNotes", filters: []) {
      edges {
        node {
          ...Note_note
        }
      }
    }
  }
`)
