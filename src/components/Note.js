import React from 'react';
import { createFragmentContainer, graphql } from 'react-relay'


class Note extends React.Component {

  render () {
    return (
        <li>
          {this.props.note.text}
        </li>
    )
  }
}

export default createFragmentContainer(Note, graphql`
  fragment Note_note on Note {
    id
    text
  }
`)
