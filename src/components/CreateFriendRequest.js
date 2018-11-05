import React, { Component } from 'react'
import { GC_USER_ID } from '../constants'

import CreateFriendRequestMutation from '../mutations/CreateFriendRequestMutation'

import { PrimaryButton, DisabledPrimaryButton } from '../css/BaseButton'
import { FormContainer, WideInput, WideLabel } from '../css/BaseForm'
import SubHeading from '../css/SubHeading'

class CreateFriendRequest extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: ''
    }
  }

  _createFriendRequest = (e) => {
    e.preventDefault()
    const { email } = this.state
    const senderId = localStorage.getItem(GC_USER_ID)

    if (senderId && email) {
      CreateFriendRequestMutation(senderId, email)
      this.setState({
        email: ''
      })
    }
  }

  render() {
    return (
        <FormContainer onSubmit={this._createFriendRequest}>
          <SubHeading css={`
              margin-bottom: 1rem;
              `}> Add a friend </SubHeading>

          <WideLabel htmlFor='friend_email'> Email </WideLabel>
          <WideInput
            id='friend_email'
            value={this.state.email}
            onChange={(e) => this.setState({ email: e.target.value })}
            type='email'
          />
        {this.state.email === '' ?
          <DisabledPrimaryButton> Send Request </DisabledPrimaryButton> :
          <PrimaryButton> Send Request </PrimaryButton>
        }
      </FormContainer>
    )

  }
}

export default CreateFriendRequest
