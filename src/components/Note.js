import moment from 'moment'
import React from 'react';
import { createFragmentContainer, graphql } from 'react-relay'

import DeleteNoteMutation from '../mutations/DeleteNoteMutation'
import UpdateNoteMutation from '../mutations/UpdateNoteMutation'

import styled, { css } from 'react-emotion'
// import 'airbnb-browser-shims'
import OutsideClickHandler from 'react-outside-click-handler'


const secondary = css`
  font-size: 0.85rem
`

const NoteContainer = styled.div(props => ({
  border: '1px solid #d1d5da',
  padding: '1rem',
  margin: '1rem 0 1rem',
  borderRadius: '3px',
  opacity: props.editable && '0.6',
  cursor: 'pointer',
  '&:hover': {
    border: '1px solid black'
  },
}))

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
      editable: false,
      text: this.props.note.text,
      jarId : this.props.note.jar.id,
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

  _handleOutsideClick = () => {
    this._disableEdit()

    const changed = this.state.text !== this.props.note.text || this.state.jarId !== this.props.note.jar.id
    if (changed) {
      this._updateNote(this.props.note.id, this.state.text, this.state.jarId)
    }
  }

  _handleTextChange = (e) => {
    this.setState({
      text: e.target.value
    })
  }

  _handleJarChange = (e) => {
    this.setState({
      jarId: e.target.value,
    })
  }

  _updateNote = (id, text, jarId) => {
    UpdateNoteMutation(id, text, jarId)
  }

  _deleteNote = () => {
    DeleteNoteMutation(this.props.note.id)
  }

  render () {
    const createdAt = moment(this.props.note.createdAt).calendar()
    const text = this.state.text
    const jars = this.props.note.jar.owner.jars.edges.map(edge => edge.node)

    let NoteBody, Jar
    if (this.state.editable) {
      NoteBody = (
        <NoteText>
          <input
            type="text"
            onChange={ this._handleTextChange }
            value={text}
            />
        </NoteText>
      )

      Jar = (
        <select value={ this.state.jarId } onChange={ this._handleJarChange }>
          {jars.map((jar) => {
            return (
              <option key={ jar.id } value={ jar.id }>
                {jar.name}
              </option>
            )
          })}

        </select>
      )

    } else {
      NoteBody = <NoteText> {text} </NoteText>
      Jar = (
        <JarTag> { this.props.note.jar.name }</JarTag>
      )
    }

    return (
      <OutsideClickHandler onOutsideClick={ this._handleOutsideClick } >
        <NoteContainer onClick={ this._enableEdit } editable={ this.state.editable }>
          <NoteHeader>
            <TimestampTag>
              {createdAt}
            </TimestampTag>
            {this.state.editable && <button onClick={ this._deleteNote }> X </button>}
          </NoteHeader>
          { NoteBody }
          <NoteFooter>
            {Jar}
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
      id
      name
      owner {
        email
        jars {
          edges {
            node {
              id
              name
            }
          }
        }
      }
    }
  }
`)
