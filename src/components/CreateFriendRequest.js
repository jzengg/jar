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
      email: '',
      loading: false,
      errorMessage: ''
    }
  }

  _handleSubmit = (e) => {
    e.preventDefault()
    if (this.state.loading) return

    this.setState({
      loading: true
    })

    const { email } = this.state
    const senderId = localStorage.getItem(GC_USER_ID)

    if (senderId && email) {
      this._createFriendRequest(senderId, email)
    }
  }

  _createFriendRequest = (senderId, email) => {
    CreateFriendRequestMutation(senderId, email)
      .then( ({ id }) => {
        this.setState({email: ''})
      })
      .catch(err => {
        const { functionError: { message } } = err[0]
        this.setState({
          errorMessage: message,
          loading: false
        })
      })
  }

  render() {
    return (
        <FormContainer onSubmit={this._handleSubmit}>
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
        {this.state.email === '' || this.state.loading ?
          <DisabledPrimaryButton disabled> Send Request </DisabledPrimaryButton> :
          <PrimaryButton> Send Request </PrimaryButton>
        }

        {this.state.errorMessage &&
          <div css={`
              color: red;
              padding: 1rem 0;
              `}>
              { this.state.errorMessage }
            </div>}
      </FormContainer>
    )

  }
}

export default CreateFriendRequest
