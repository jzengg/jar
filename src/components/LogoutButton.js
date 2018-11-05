import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { GC_USER_ID, GC_AUTH_TOKEN } from '../constants'

import { HeaderLink } from '../css/BaseButton'


class LogoutButton extends Component {
  _logOut = () => {
    localStorage.removeItem(GC_USER_ID)
    localStorage.removeItem(GC_AUTH_TOKEN)
    this.props.history.push('/login')
  }


  render() {
    return(
      <a css={`${HeaderLink}`} onClick={this._logOut}> Logout </a>
    )
  }
}

export default withRouter(LogoutButton)
