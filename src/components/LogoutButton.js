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
      <a css={`
        cursor: pointer;
        padding: 0.75rem;
        text-decoration: none;
        color: hsla(0,0%,100%,.75);
        font-size: 1.1rem;
        &:hover {
          font-weight: 500;
          color: white;
        }
        `} onClick={this._logOut}> Logout </a>
    )
  }
}

export default withRouter(LogoutButton)
