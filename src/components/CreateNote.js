import React, { Component } from 'react'
import { createFragmentContainer, graphql } from 'react-relay'

import JarList from './JarList'
import CreateNoteMutation from '../mutations/CreateNoteMutation'

import BaseButton from '../css/BaseButton'

import styled from 'react-emotion'

const Button = styled.button `
  ${BaseButton}
  background-color: #28a745;
  background-image: linear-gradient(-180deg,#34d058,#28a745 90%);
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
      CreateNoteMutation(text, selectedJarId)
    }
  }

  render() {
    return (
      <div>
        <JarList
          handleClick={this._updateSelectedJar}
          selectedJarId={this.state.selectedJarId}
          user={this.props.user}
        />

        <div>
          <input
            className='mb2'
            value={this.state.text}
            onChange={(e) => this.setState({ text: e.target.value })}
            type='text'
            placeholder='Text of the note'
          />
        </div>
        <Button
          className='button'
          onClick={() => this._createNote()}
        >
          submit
        </Button>
      </div>
    )

  }
}

export default createFragmentContainer(CreateNote, graphql`
  fragment CreateNote_user on User {
    ...JarList_user
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
