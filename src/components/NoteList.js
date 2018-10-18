import React from 'react';
import { createFragmentContainer, graphql } from 'react-relay'

import Note from './Note'

class NoteList extends React.Component {

  render () {
    let notes = this.props.viewer.allNotes.edges

    return (
      <ul>
        {
          notes.map(( {node} ) =>
          <Note key={node.__id} note={node} />

        )
      }
    </ul>
  )
}


}

export default createFragmentContainer(NoteList, graphql`
  fragment NoteList_viewer on Viewer @argumentDefinitions(
    noteFilter: {type: "NoteFilter"},
  ) {
    allNotes(last: 100, orderBy: createdAt_DESC, filter: $noteFilter) @connection(key: "NoteList_allNotes", filters: []) {
      edges {
        node {
          ...Note_note
        }
      }
    }
  }
`)
