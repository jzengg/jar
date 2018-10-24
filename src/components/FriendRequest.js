import React from 'react';

class FriendRequest extends React.Component {

  render () {
    return (
        <li>
          {this.props.children}
        </li>
    )
  }
}

export default FriendRequest
