import React from 'react';
import { createFragmentContainer, graphql } from 'react-relay'

import Timestamp from './Timestamp'

import styled, { css } from 'react-emotion'

const secondary = css`
  font-size: 0.85rem
`

export const NoteContainer = styled.div`
  border: 1px solid #d1d5da;
  padding: 1rem;
  margin: 1rem 0 1rem;
  border-radius: 3px;
`

export const NoteHeader = styled.div`
  ${secondary};
  display: flex;
  justify-content: space-between;
  height: 1.5rem;
`

export const NoteFooter = styled.div`
  ${secondary};
  display: flex;
  justify-content: space-between
`

export const JarTag = styled.div`
  background: lightyellow;
  padding: 0.25rem 0.5rem;
`

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
        <NoteHeader>
          <Timestamp createdAt={note.createdAt}/>
        </NoteHeader>
        <NoteText> { note.text } </NoteText>
        <NoteFooter>
          <JarTag> { note.jar.name }</JarTag>
          <AuthorTag>
            { note.jar.owner.email }
          </AuthorTag>
        </NoteFooter>
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
