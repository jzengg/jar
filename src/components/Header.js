import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'

class Header extends Component {

  render() {
    return (
      <div>
        <div>
          <div>Jar</div>
          <Link to='/'>Home</Link>
          <Link to='/login' > Login </Link>
          <Link to='/history' > History </Link>
          <Link to='/add' > Add friends </Link>
          <Link to='/requests' > Friend requests </Link>
        </div>
      </div>
    )
  }

}

export default withRouter(Header)
