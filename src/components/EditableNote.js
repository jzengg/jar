import React from 'react';
import { createFragmentContainer, graphql } from 'react-relay'
import styled, { css } from 'react-emotion'

import DeleteNoteMutation from '../mutations/DeleteNoteMutation'
import UpdateNoteMutation from '../mutations/UpdateNoteMutation'

import Timestamp from './Timestamp'
import { NoteContainer, NoteSecondary, JarTag, AuthorTag, NoteText } from './Note'
import Dropdown from 'react-dropdown'

import { WideInput } from '../css/BaseForm'
import MdDelete from 'react-icons/lib/md/delete'
import MdDone from 'react-icons/lib/md/done'


const actionIcon = css `
  font-size: 1.25rem;
  cursor: pointer;
`

const EditableNoteContainer = styled(NoteContainer)(props => ({
  cursor: !props.editing && 'pointer',
  opacity: props.editing && '0.6',
  '&:hover': !props.editing && {
    boxShadow: '0 1px 6px rgba(0, 0, 0, 0.575)'
  }
}))

class EditableNote extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      editing: false,
      text: this.props.note.text,
      jarId : this.props.note.jar.id,
    }
  }

  _enableEdit = (e) => {
    this.setState({
      editing: true
    })
  }

  _disableEdit = (e) => {
    this.setState({
      editing: false
    })
  }

  _saveNote = (e) => {
    e.stopPropagation()
    if (this.state.editing) {
      this._disableEdit()
    }

    const changed = this.state.text !== this.props.note.text || this.state.jarId !== this.props.note.jar.id
    if (changed) {
      this._updateNote(this.props.note.id, this.state.text, this.state.jarId, this.props.note.jar.owner.id)
    }
  }

  _handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this._saveNote(e)
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
    if (this.state.editing) {
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
      <EditableNoteContainer onClick={ this._enableEdit } editing={ this.state.editing }>
        <NoteSecondary>
          { JarContent }
          {this.state.editing && (
            <div>
              <MdDelete
                onClick={this._deleteNote}
                css={`
                  ${actionIcon}
                  @media (min-width: 414px) {
                    &:hover {
                      color: red;
                    }
                  }
                  `}
              />

              <MdDone
                css={`
                  ${actionIcon}
                  margin-left: 1rem;
                  color: green;
                  &:hover {
                    color: lightgreen;
                  }
                `}
                onClick={this._saveNote}
              /
              >
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
