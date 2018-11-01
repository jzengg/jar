import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { GC_USER_ID, GC_AUTH_TOKEN } from '../constants'

import { SecondaryButton } from '../css/BaseButton'

class LogoutButton extends Component {
  _logOut = () => {
    localStorage.removeItem(GC_USER_ID)
    localStorage.removeItem(GC_AUTH_TOKEN)
    this.props.history.push('/login')
  }

  render() {
    return(
      <SecondaryButton onClick={this._logOut}> Logout </SecondaryButton>
    )
  }
}

export default withRouter(LogoutButton)
