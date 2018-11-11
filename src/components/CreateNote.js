import React, { Component } from 'react'
import { createFragmentContainer, graphql } from 'react-relay'

import JarList from './JarList'
import CreateNoteMutation from '../mutations/CreateNoteMutation'

import Divider from '../css/Divider'
import SubHeading from '../css/SubHeading'
import { PrimaryButton, DisabledPrimaryButton } from '../css/BaseButton'
import { FormContainer, WideInput, WideLabel } from '../css/BaseForm'

class CreateNote extends Component {
  constructor(props) {
    super(props)

    const jars = this.props.user.jars.edges
    const defaultJar = jars[0].node
    this.state = {
      selectedJarId: defaultJar.id,
      text: ''
    }
  }

  _updateSelectedJar = ({ id }) => {
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

        <WideLabel htmlFor='note_text'>
          Text
        </WideLabel>
        <WideInput
          type='text'
          value={this.state.text}
          onChange={(e) => this.setState({ text: e.target.value })}
          id='note_text'
        />
      { this.state.text === '' ?
        <DisabledPrimaryButton disabled> Add Note </DisabledPrimaryButton> :
        <PrimaryButton onClick={() => this._createNote()}> Add Note </PrimaryButton>
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
          id
          description
        }
      }
    }
  }
`)
