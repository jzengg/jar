import React, { Component } from 'react'
import CreateNoteMutation from '../mutations/CreateNoteMutation'
import { withRouter } from 'react-router-dom'


class CreateNote extends Component {

  state = {
    text: ''
  }

  render() {

    return (
      <div>
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
    const { text, jarId } = this.state
    CreateNoteMutation(text, jarId, () => this.props.history.push('/'))
  }

}

export default withRouter(CreateNote)
