import React, { Component } from 'react'
import { createFragmentContainer, graphql } from 'react-relay'

import JarList from './JarList'
import CreateNoteMutation from '../mutations/CreateNoteMutation'

import BaseButton from '../css/BaseButton'

import styled from 'react-emotion'

const CreateButton = styled.button `
  ${BaseButton}
  background-color: #28a745;
  background-image: linear-gradient(-180deg,#34d058,#28a745 90%);
`

const TextInput = styled.textarea `
    border: 1px solid #d1d5da;
    border-radius: 3px;
    max-width: 100%;
    font-size: 14px;
    padding: 6px 8px;
`

const FormContainer = styled.div `
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  border-radius: 5px;
  padding: 1rem;
`

class CreateNote extends Component {
  constructor(props) {
    super(props)

    const jars = this.props.user.jars.edges

    this.state = {
      selectedJarId: jars[0].node.__id,
      text: ''
    }
  }

  _updateSelectedJar = (id) => {
    this.setState({
      selectedJarId: id
    })
  }

  _createNote = () => {
    const { text, selectedJarId } = this.state
    if (text && selectedJarId) {
      CreateNoteMutation(text, selectedJarId, this.props.user.id)

      this.setState({
        text: ''
      })
    }
  }

  render() {
    return (
      <FormContainer>
        <JarList
          handleClick={this._updateSelectedJar}
          selectedJarId={this.state.selectedJarId}
          user={this.props.user}
        />

        <div>
          <label htmlFor='note_text' css={`
              font-weight: 600;
              display: block;
                  `}
          >
            Text
          </label>
          <TextInput
            value={this.state.text}
            onChange={(e) => this.setState({ text: e.target.value })}
            type='text'
            id='note_text'
          />
        </div>
        <CreateButton
          onClick={() => this._createNote()}
        >
          Submit
        </CreateButton>
      </FormContainer>
    )

  }
}

export default createFragmentContainer(CreateNote, graphql`
  fragment CreateNote_user on User {
    ...JarList_user
    id
    jars(last: 100, orderBy: createdAt_DESC)
      @connection(key: "CreateNote_jars", filters: []) {
      edges {
        node {
          ...Jar_jar
        }
      }
    }
  }
`)
