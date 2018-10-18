import React from 'react';
import { createFragmentContainer, graphql } from 'react-relay'


class Note extends React.Component {

  render () {
    return (
        <li>
          <div>
            text: {this.props.note.text}
          </div>
          <div>
            jar: {this.props.note.jar.name}
          </div>
        </li>
    )
  }
}

export default createFragmentContainer(Note, graphql`
  fragment Note_note on Note {
    id
    text
    jar {
      name
    }
  }
`)
