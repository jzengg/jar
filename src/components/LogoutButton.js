import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { GC_USER_ID, GC_AUTH_TOKEN } from '../constants'

class LogoutButton extends Component {
  _logOut = () => {
    localStorage.removeItem(GC_USER_ID)
    localStorage.removeItem(GC_AUTH_TOKEN)
    this.props.history.push('/login')
  }

  render() {
    return(
      <button onClick={this._logOut}> Logout </button>
    )
  }
}

export default withRouter(LogoutButton)
