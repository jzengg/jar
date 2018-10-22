import React, { Component } from 'react'
import { createFragmentContainer, graphql } from 'react-relay'

// import { GC_USER_ID } from '../constants'

import CreateFriendRequestMutation from '../mutations/CreateFriendRequestMutation'

class CreateFriendRequest extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: ''
    }
  }

  _createFriendRequest = () => {
    const { email } = this.state
    const senderId = this.props.viewer.loggedInUser.id

    if (senderId && email) {
      CreateFriendRequestMutation(senderId, email)
    }
  }

  render() {
    return (
      <div>
        <div>
          <input
            value={this.state.email}
            onChange={(e) => this.setState({ email: e.target.value })}
            type='text'
            placeholder='email'
          />
        </div>
        <div
          className='button'
          onClick={() => this._createFriendRequest()}
        >
          Send request
        </div>
      </div>
    )

  }
}

export default createFragmentContainer(CreateFriendRequest, graphql`
  fragment CreateFriendRequest_viewer on Viewer {
    loggedInUser {
      id
    }
  }
`)
