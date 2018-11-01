import React, { Component } from 'react'
import { GC_USER_ID, GC_AUTH_TOKEN } from '../constants'

import SignupUserMutation from '../mutations/SignupUserMutation'
import AuthenticateUserMutation from '../mutations/AuthenticateUserMutation'

import SubHeading from '../css/SubHeading'
import { FormContainer, WideInput, WideLabel } from '../css/BaseForm'
import { Container } from '../css/BaseLayout'
import { PrimaryButton, LinkButton } from '../css/BaseButton'

class Login extends Component {

  state = {
    login: true, // switch between Login and SignUp
    email: '',
    password: '',
    errorMessage: '',
  }

  render() {

    return (
      <div css={`
          display: flex;
          justify-content: center;
          `}>
        <div css={`
            flex: 1;
            max-width: 400px;
            `}>
          <SubHeading css={`
              text-align:center;
              margin-bottom: 1.5rem;
              `}
          >
              {this.state.login ? 'Log in to Not a Jar' : 'Sign up for Not a Jar'}</SubHeading>
          <FormContainer
              onSubmit={ this._handleSubmit }>
            <WideLabel htmlFor="email">Email</WideLabel>
            <WideInput
              css={`display: block;`}
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
              name='email'
              type='text'
              id="email"
              placeholder='Your email address'
            />

            <WideLabel htmlFor="email">Password</WideLabel>
            <WideInput
              css={`display: block;`}
              value={this.state.password}
              onChange={(e) => this.setState({ password: e.target.value })}
              name='password'
              type='password'
              id="password"
              placeholder='Choose a safe password'
            />

            <PrimaryButton css={`width: 100%;`}>
                {this.state.login ? 'Log in' : 'Sign up' }
            </PrimaryButton>
            <div>
              {this.state.errorMessage &&
                <span css={`
                    color: red;
                    `}>
                    { this.state.errorMessage }
                  </span>}
            </div>
          </FormContainer>

          <Container>
            { this.state.login ? <span> Don't have an account? </span> : <span> Already have an account? </span>}
            <LinkButton onClick={() => this.setState({ login: !this.state.login })}>
              {this.state.login ? 'Sign up' : 'Log in'}
            </LinkButton>
          </Container>
        </div>
      </div>
    )
  }

  _login = (id, token) => {
    this._saveUserData(id, token)
    this.props.history.push(`/`)
  }

  _handleApiError = (err) => {
    const { functionError: { message } } = err
    this.setState({
      errorMessage: message
    })
  }

  _handleSubmit = (e) => {
    e.preventDefault()
    const { email, password } = this.state
    if (email && password) {
      if (this.state.login) {
        AuthenticateUserMutation(email, password)
          .then(({ id, token }) => {
            this._login(id, token)
          })
          .catch(err => {
            this._handleApiError(err[0])

          })
      } else {
        SignupUserMutation(email, password)
          .then(({ id, token }) => {
            this._login(id, token)
          })
          .catch(err => {
            this._handleApiError(err[0])
          })
        }
    }
  }

  _saveUserData = (id, token) => {
    localStorage.setItem(GC_USER_ID, id)
    localStorage.setItem(GC_AUTH_TOKEN, token)
  }

}

export default Login
