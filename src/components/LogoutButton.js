import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { GC_USER_ID, GC_AUTH_TOKEN } from '../constants'

import styled from 'react-emotion'
import BaseButton from '../css/BaseButton'

const Button = styled.button`
  ${BaseButton}
  font-weight: 600;
  color: black;
  background-color: #eff3f6;
  background-image: linear-gradient(-180deg,#fafbfc,#eff3f6 90%);
  border: 1px solid rgba(27,31,35,0.2);
`

class LogoutButton extends Component {
  _logOut = () => {
    localStorage.removeItem(GC_USER_ID)
    localStorage.removeItem(GC_AUTH_TOKEN)
    this.props.history.push('/login')
  }

  render() {
    return(
      <Button onClick={this._logOut}> Logout </Button>
    )
  }
}

export default withRouter(LogoutButton)
