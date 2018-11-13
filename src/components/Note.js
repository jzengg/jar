import React from 'react';
import { createFragmentContainer, graphql } from 'react-relay'
import styled from 'react-emotion'

import Timestamp from './Timestamp'

export const NoteContainer = styled.div`
  background-color: white;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.175);
  border: 1px solid #d4d4d4;
  padding: 1rem;
  margin: 1rem 0 1rem;
  border-radius: 3px;
`

export const NoteSecondary = styled.div`
  font-size: 0.85rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const JarTag = styled.div(props => ({
  background: props.editable ? '#d9534f' : '#95a5a6',
  borderRadius: '3px',
  color: 'white',
  padding: '0.25rem 0.5rem',
}))

export const AuthorTag = styled.div`
`

export const NoteText = styled.div`
  font-size: 2rem;
  padding: 1rem 0 1rem;
`

class Note extends React.Component {
  render () {
    const note = this.props.note

    return (
      <NoteContainer>
        <NoteSecondary>
          <JarTag> { note.jar.name }</JarTag>
        </NoteSecondary>
        <NoteText> { note.text } </NoteText>
        <NoteSecondary>
          <Timestamp icon createdAt={note.createdAt}/>
          <AuthorTag>
            { note.jar.owner.email }
          </AuthorTag>
        </NoteSecondary>
      </NoteContainer>
    )
  }
}

export default createFragmentContainer(Note, graphql`
  fragment Note_note on Note {
    id
    text
    createdAt
    jar {
      id
      name
      owner {
        email
      }
    }
  }
`)
