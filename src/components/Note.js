import moment from 'moment'
import React from 'react';
import { createFragmentContainer, graphql } from 'react-relay'

import styled, { css } from 'react-emotion'
// import 'airbnb-browser-shims'
import OutsideClickHandler from 'react-outside-click-handler'


const secondary = css`
  font-size: 0.85rem
`

const NoteContainer = styled.div`
  border: 1px solid #d1d5da;
  padding: 1rem;
  margin: 1rem 0 1rem;
  border-radius: 3px;
`

const NoteHeader = styled.div`
  ${secondary};
  display: flex;
  justify-content: space-between;
  height: 1.5rem;
`

const NoteFooter = styled.div`
  ${secondary};
  display: flex;
  justify-content: space-between
`

const JarTag = styled.div`
  background: lightyellow;
  padding: 0.25rem 0.5rem;
`

const TimestampTag = styled.div`
`

const AuthorTag = styled.div`
  font-style: italic;
`

const NoteText = styled.div`
  font-size: 2rem;
  padding: 1rem 0 1rem;
`

class Note extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      editable: false
    }
  }

  _enableEdit = (e) => {
    this.setState({
      editable: true
    })
  }

  _disableEdit = (e) => {
    this.setState({
      editable: false
    })
  }

  render () {
    const createdAt = moment(this.props.note.createdAt).calendar()
    return (
      <OutsideClickHandler onOutsideClick={ this._disableEdit } >
        <NoteContainer onClick={ this._enableEdit }>
          <NoteHeader>
            <TimestampTag>
              {createdAt}
            </TimestampTag>
            {this.state.editable && <button onClick={ this._deleteNote }> X </button>}
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
      </NoteContainer>
    </OutsideClickHandler>
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
