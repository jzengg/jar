import React from 'react';
import { createFragmentContainer, graphql } from 'react-relay'

import Note from './Note'

class NoteList extends React.Component {

  render () {
    let notes = this.props.jar.notes.edges

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
  fragment NoteList_jar on Jar {
    notes(last: 100, orderBy: createdAt_DESC) @connection(key: "NoteList_notes", filters: []) {
      edges {
        node {
          ...Note_note
        }
      }
    }
  }
`)
