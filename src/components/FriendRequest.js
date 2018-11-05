import React from 'react';

class FriendRequest extends React.Component {

  render () {
    return (
        <li css={`
            padding: 0.5rem 0.25rem;
            `}>
          {this.props.children}
        </li>
    )
  }
}

export default FriendRequest
