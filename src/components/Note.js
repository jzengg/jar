import moment from 'moment'
import React from 'react';
import { createFragmentContainer, graphql } from 'react-relay'

import styled, { css } from 'react-emotion'

const secondary = css`
  font-size: 0.85rem
`

const ListItem = styled.div`
  border: 1px solid black;
  padding: 1rem;
  margin: 1rem 0 1rem;
  border-radius: 2px;
`

const NoteHeader = styled.div`
  ${secondary};
  display: flex;
`

const NoteFooter = styled.div`
  ${secondary};
  display: flex;
  justify-content: space-between
`

const JarTag = styled.div`
  background: yellow;
  border: 1px solid black;
`

const TimestampTag = styled.div`
  border: 1px solid black;
`

const AuthorTag = styled.div`
  font-style: italic;
`

const NoteText = styled.div`
  font-size: 2rem;
  padding: 1rem 0 1rem;
`

class Note extends React.Component {

  render () {
    const createdAt = moment(this.props.note.createdAt).calendar()
    return (
        <ListItem>
          <NoteHeader>
            <TimestampTag>
              {createdAt}
            </TimestampTag>
        </NoteHeader>
          <NoteText>
            {this.props.note.text}
          </NoteText>
          <NoteFooter>
            <JarTag>
              {this.props.note.jar.name}
            </JarTag>

            <AuthorTag>
              {this.props.note.jar.owner.email}
            </AuthorTag>
        </NoteFooter>
        </ListItem>
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
