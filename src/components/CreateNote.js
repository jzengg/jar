import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { createFragmentContainer, graphql } from 'react-relay'

import JarList from './JarList'
import CreateNoteMutation from '../mutations/CreateNoteMutation'



class CreateNote extends Component {
  constructor(props) {
    super(props)

    const jars = this.props.user.jars.edges

    this.state = {
      selectedJar: jars[0],
      text: ''
    }
  }

  updateSelectedJar = (jarId) => {
    this.setState({
      selectedJar: jarId
    })
  }

  render() {

    return (
      <div>
        <JarList handleClick={this.updateSelectedJar} user={this.props.user} />
        
        <div>
          <input
            className='mb2'
            value={this.state.text}
            onChange={(e) => this.setState({ text: e.target.value })}
            type='text'
            placeholder='Text of the note'
          />
        </div>
        <div
          className='button'
          onClick={() => this._createNote()}
        >
          submit
        </div>
      </div>
    )

  }

  _createNote = () => {
    const { text, selectedJar } = this.state

    CreateNoteMutation(text, selectedJar, () => this.props.history.push('/'))
  }

}

export default withRouter(createFragmentContainer(CreateNote, graphql`
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
)
