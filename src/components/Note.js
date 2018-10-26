import moment from 'moment'
import React from 'react';
import { createFragmentContainer, graphql } from 'react-relay'

import { css } from 'emotion'


class Note extends React.Component {

  render () {
    const createdAt = moment(this.props.note.createdAt).calendar()
    return (
        <li>
          <div
            className={css`
              color: red;
              `}
          >
            text: {this.props.note.text}
          </div>
          <div>
            jar: {this.props.note.jar.name}
          </div>
          <div>
            createdAt: {createdAt} -- by: {this.props.note.jar.owner.email}
          </div>
        </li>
    )
  }
}

export default createFragmentContainer(Note, graphql`
  fragment Note_note on Note {
    id
    text
    createdAt
    jar {
      name
      owner {
        email
      }
    }
  }
`)
