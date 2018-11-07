import React from 'react';
import { createFragmentContainer, graphql } from 'react-relay'
import styled, { css } from 'react-emotion'

import DeleteNoteMutation from '../mutations/DeleteNoteMutation'
import UpdateNoteMutation from '../mutations/UpdateNoteMutation'

import Timestamp from './Timestamp'
import { NoteContainer, NoteSecondary, JarTag, AuthorTag, NoteText } from './Note'
import Dropdown from 'react-dropdown'

import { WideInput } from '../css/BaseForm'
import { MdDelete, MdDone } from "react-icons/md"

const actionIcon = css `
  font-size: 1.25rem;
  cursor: pointer;
`

const EditableNoteContainer = styled(NoteContainer)(props => ({
  cursor: !props.editable && 'pointer',
  opacity: props.editable && '0.6'
}))

class EditableNote extends React.Component {

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

  _saveNote = (e) => {
    e.stopPropagation()
    if (this.state.editable) {
      this._disableEdit()
    }

    const changed = this.state.text !== this.props.note.text || this.state.jarId !== this.props.note.jar.id
    if (changed) {
      this._updateNote(this.props.note.id, this.state.text, this.state.jarId, this.props.note.jar.owner.id)
    }
  }

  _handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this._saveNote()
    }
  }

  _handleTextChange = (e) => {
    this.setState({
      text: e.target.value
    })
  }

  _handleJarChange = ({ label, value }) => {
    this.setState({
      jarId: value,
    })
  }

  _updateNote = (id, text, jarId, userId) => {
    UpdateNoteMutation({ id, text, jarId, userId})
  }

  _deleteNote = () => {
    if (window.confirm('Are you sure you want to delete this note?')) {
      DeleteNoteMutation(this.props.note.id)
    }
  }

  render () {
    const text = this.state.text
    const jars = this.props.note.jar.owner.jars.edges.map(edge => edge.node)

    let NoteBody, JarContent
    if (this.state.editable) {
      NoteBody = (
        <NoteText>
          <WideInput
            type="text"
            onChange={ this._handleTextChange }
            onKeyPress={ this._handleKeyPress }
            value={text}
            />
        </NoteText>
      )

      JarContent = (
        <Dropdown
          value={this.state.jarId}
          options={jars.map(jar => ({ label: jar.name, value: jar.id }))}
          onChange={ this._handleJarChange }
        />
      )

    } else {
      NoteBody = <NoteText> {text} </NoteText>
      JarContent = (
        <JarTag editable> { this.props.note.jar.name }</JarTag>
      )
    }

    return (
      <EditableNoteContainer onClick={ this._enableEdit } editable={ this.state.editable }>
        <NoteSecondary>
          { JarContent }
          {this.state.editable && (
            <div>
              <MdDone
                css={`
                  ${actionIcon}
                  color: green;
                  &:hover {
                    color: lightgreen;
                  }
                  `}
                onClick={this._saveNote}
                />

              <MdDelete
                onClick={this._deleteNote}
                css={`
                  ${actionIcon}
                  margin-left: 0.5rem;
                  &:hover {
                    color: red;
                  }
                  `}
              />
            </div>
          )
        }
        </NoteSecondary>
        { NoteBody }
        <NoteSecondary>
          <Timestamp icon createdAt={this.props.note.createdAt}/>
          <AuthorTag>
            {this.props.note.jar.owner.email}
          </AuthorTag>
      </NoteSecondary>
    </EditableNoteContainer>
    )
  }
}

export default createFragmentContainer(EditableNote, graphql`
  fragment EditableNote_note on Note {
    id
    text
    createdAt
    jar {
      id
      name
      owner {
        id
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
