import React, { Component } from 'react'
import { GC_USER_ID, GC_AUTH_TOKEN } from '../constants'
import { css } from 'react-emotion'

import SignupUserMutation from '../mutations/SignupUserMutation'
import AuthenticateUserMutation from '../mutations/AuthenticateUserMutation'

import SubHeading from '../css/SubHeading'
import { FormContainer, WideInput, WideLabel } from '../css/BaseForm'
import { Container, VerticallyCentered } from '../css/BaseLayout'
import { PrimaryButton, LinkButton, DisabledPrimaryButton } from '../css/BaseButton'

import logo from '../images/logo.svg'


const WideButton = css `
  width: 100%;
  margin-bottom: 1rem;
`

class Login extends Component {

  state = {
    login: false, // switch between Login and SignUp
    email: '',
    password: '',
    errorMessage: '',
    loading: false
  }

  render() {

    return (
      <VerticallyCentered>
        <div css={`
            flex: 1;
            max-width: 400px;
            `}
        >
          <div css={`
              display: flex;
              flex-direction: column;
              align-items: center;
              margin-bottom: 1.25rem;
              `}>
            <img css={`
              width: auto;
              height: 100px;
              margin-bottom: 0.5rem;
              `} src={logo} alt='Not a Jar logo'
            />
          <SubHeading css={`text-align: center`}> A virtual jar to record happy happenings </SubHeading>
          </div>
          <FormContainer css={`padding: 1.75rem;`} onSubmit={ this._handleSubmit }>
            <WideLabel htmlFor="email">Email</WideLabel>
            <WideInput
              required
              css={`display: block;`}
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
              name='email'
              type='email'
              id="email"
              placeholder='Your email address'
            />

            <WideLabel htmlFor="email">Password</WideLabel>
            <WideInput
              required
              css={`display: block;`}
              value={this.state.password}
              onChange={(e) => this.setState({ password: e.target.value })}
              name='password'
              type='password'
              id="password"
              placeholder='Choose a safe password'
            />
          { this.state.loading ?
            <DisabledPrimaryButton css={`${WideButton}`}> {this.state.login ? 'Log in' : 'Sign up' } </DisabledPrimaryButton> :

            <PrimaryButton css={`${WideButton}`}> {this.state.login ? 'Log in' : 'Sign up' } </PrimaryButton>
          }
              {this.state.errorMessage &&
                <span css={`
                    color: red;
                    `}>
                    { this.state.errorMessage }
                  </span>}
          </FormContainer>

          <Container>
            { this.state.login ? <span> Don't have an account? </span> : <span> Already have an account? </span>}
            <LinkButton onClick={() => this.setState({ login: !this.state.login })}>
              {this.state.login ? 'Sign up' : 'Log in'}
            </LinkButton>
          </Container>
        </div>
      </VerticallyCentered>
    )
  }

  _login = (id, token) => {
    this._saveUserData(id, token)
    this.props.history.push(`/`)
  }

  _handleApiError = (err) => {
    const { functionError: { message } } = err
    this.setState({
      errorMessage: message,
      loading: false
    })
  }

  _handleSubmit = (e) => {
    e.preventDefault()
    if (this.state.loading) return

    this.setState({
      loading: true
    })

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
