import React from 'react';
import { createFragmentContainer, graphql } from 'react-relay'
import styled from 'react-emotion'
import OutsideClickHandler from 'react-outside-click-handler'

import DeleteNoteMutation from '../mutations/DeleteNoteMutation'
import UpdateNoteMutation from '../mutations/UpdateNoteMutation'

import Timestamp from './Timestamp'
import { NoteContainer, NoteSecondary, JarTag, AuthorTag, NoteText } from './Note'
import Dropdown from 'react-dropdown'

import { WideInput } from '../css/BaseForm'
import { MdDelete } from "react-icons/md"

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

  _handleOutsideClick = () => {
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
      this._handleOutsideClick()
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
    DeleteNoteMutation(this.props.note.id)
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
      <OutsideClickHandler onOutsideClick={ this._handleOutsideClick } >
        <EditableNoteContainer onClick={ this._enableEdit } editable={ this.state.editable }>
          <NoteSecondary>
            { JarContent }
            {this.state.editable &&
              <MdDelete
                css={`
                  font-size: 1.25rem;
                  cursor: pointer;
                  &:hover {
                    color: red;
                  }}
                  `}
                onClick={ this._deleteNote } />}
          </NoteSecondary>
          { NoteBody }
          <NoteSecondary>
            <Timestamp icon createdAt={this.props.note.createdAt}/>
            <AuthorTag>
              {this.props.note.jar.owner.email}
            </AuthorTag>
        </NoteSecondary>
      </EditableNoteContainer>
    </OutsideClickHandler>
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
