import React from 'react';
import { createFragmentContainer, graphql } from 'react-relay'
import styled from 'react-emotion'
import OutsideClickHandler from 'react-outside-click-handler'

import DeleteNoteMutation from '../mutations/DeleteNoteMutation'
import UpdateNoteMutation from '../mutations/UpdateNoteMutation'

import Timestamp from './Timestamp'
import { NoteContainer, NoteHeader, NoteFooter, JarTag, AuthorTag, NoteText } from './Note'

const EditableNoteContainer = styled(NoteContainer)(props => ({
  opacity: props.editable && '0.6',
  backgroundColor: '#eff3f6',
  backgroundImage: 'linear-gradient(-180deg,#fafbfc,#eff3f6 90%)',
  cursor: 'pointer',
  '&:hover': {
    border: '1px solid black'
  },
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

  _updateNote = (id, text, jarId, userId) => {
    UpdateNoteMutation({ id, text, jarId, userId})
  }

  _deleteNote = () => {
    DeleteNoteMutation(this.props.note.id)
  }

  render () {
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
        <EditableNoteContainer onClick={ this._enableEdit } editable={ this.state.editable }>
          <NoteHeader>
            <Timestamp createdAt={this.props.note.createdAt}/>

            {this.state.editable && <button onClick={ this._deleteNote }> X </button>}
          </NoteHeader>
          { NoteBody }
          <NoteFooter>
            { Jar }
            <AuthorTag>
              {this.props.note.jar.owner.email}
            </AuthorTag>
        </NoteFooter>
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
