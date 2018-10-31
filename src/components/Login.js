import React, { Component } from 'react'
import { GC_USER_ID, GC_AUTH_TOKEN } from '../constants'

import SignupUserMutation from '../mutations/SignupUserMutation'
import AuthenticateUserMutation from '../mutations/AuthenticateUserMutation'

class Login extends Component {

  state = {
    login: true, // switch between Login and SignUp
    email: '',
    password: '',
    errorMessage: '',
  }

  render() {

    return (
      <div>
        <h4>{this.state.login ? 'Login' : 'Sign Up'}</h4>
        <div>
          <input
            value={this.state.email}
            onChange={(e) => this.setState({ email: e.target.value })}
            type='text'
            placeholder='Your email address'
          />
          <input
            value={this.state.password}
            onChange={(e) => this.setState({ password: e.target.value })}
            type='password'
            placeholder='Choose a safe password'
          />
        </div>
        <div>
          <button
            onClick={() => this._confirm()}
          >
            {this.state.login ? 'login' : 'create Account' }
          </button>
          <button
            onClick={() => this.setState({ login: !this.state.login })}
          >
            {this.state.login ? 'need to create an account?' : 'already have an account?'}
          </button>
        </div>
        <div>
          {this.state.errorMessage &&
            <span css={`
                color: red;
                `}>
              { this.state.errorMessage }
            </span>}
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

  _confirm = () => {
    const { email, password } = this.state
    if (email && password) {
      if (this.state.login) {
        AuthenticateUserMutation(email, password)
          .then(({ id, token }) => {
            this._login(id, token)
          })
          .catch(err => {
            console.log(err)
            this._handleApiError(err[0])

          })
      } else {
        SignupUserMutation(email, password)
          .then(({ id, token }) => {
            this._login(id, token)
          })
          .catch(err => {
            console.log(err)
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
