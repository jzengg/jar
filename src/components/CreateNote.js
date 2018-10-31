import React, { Component } from 'react'
import { createFragmentContainer, graphql } from 'react-relay'

import JarList from './JarList'
import CreateNoteMutation from '../mutations/CreateNoteMutation'

import BaseButton from '../css/BaseButton'
import Divider from '../css/Divider'
import SubHeading from '../css/SubHeading'

import styled, { css } from 'react-emotion'


const CreateBase = css`
  ${BaseButton}
  background-color: #28a745;
  background-image: linear-gradient(-180deg,#34d058,#28a745 90%);
  border: 1px solid rgba(27,31,35,0.2);
  padding: 6px 12px;
  font-size: 14px;
  align-self: flex-start;
`

const CreateButton = styled.button `
  ${CreateBase}
  &:hover {
    background-color: #269f42;
    background-image: linear-gradient(-180deg,#2fcb53,#269f42 90%);
    border: 1px solid rgba(27,31,35,0.5);
  }
`

const DisabledButton = styled.button `
  ${CreateBase}
  cursor: auto;
  color: hsla(0,0%,100%,0.75);
  background-color: #94d3a2;
  background-image: none;
  border-color: rgba(27,31,35,0.2);
  box-shadow: none;
`

const TextInput = styled.textarea `
    border: 1px solid #d1d5da;
    border-radius: 3px;
    width: 100%
    min-height: 50px;
    font-size: 1.2rem;
    resize: vertical;
    margin-bottom: 1rem;
`

const FormContainer = styled.div `
  display: flex;
  flex-direction: column;
  border: 1px solid rgba(27,31,35,0.35);
  border-radius: 5px;
  padding: 1rem;
  margin-bottom: 1rem;
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
        <SubHeading>
          Add a New Note
        </SubHeading>
        <Divider/>
        <JarList
          handleClick={this._updateSelectedJar}
          selectedJarId={this.state.selectedJarId}
          user={this.props.user}
        />

        <label htmlFor='note_text' css={`
            font-weight: 600;
            font-size: 1.1rem;
            display: block;
            margin-bottom: 0.3rem;
                `}
        >
          Text
        </label>
        <TextInput
          value={this.state.text}
          onChange={(e) => this.setState({ text: e.target.value })}
          placeholder='Something nice that happened today'
          id='note_text'
        />
      { this.state.text === '' ?
        <DisabledButton disabled> Submit </DisabledButton> :
        <CreateButton onClick={() => this._createNote()}> Submit </CreateButton>
        }
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
