import React from 'react';
import { createFragmentContainer, graphql } from 'react-relay'

import Note from './Note'

class NoteList extends React.Component {

  render () {
    console.log(this.props)
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
