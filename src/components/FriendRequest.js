import React from 'react';
import { createFragmentContainer, graphql } from 'react-relay'


class FriendRequest extends React.Component {

  render () {
    return (
        <li onClick={this.props.handleClick.bind(this, this.props.friendRequest.id)}>
          Accept {this.props.friendRequest.sender.email}
        </li>
    )
  }
}

export default createFragmentContainer(FriendRequest, graphql`
  fragment FriendRequest_friendRequest on FriendRequest {
    id
    sender {
      email
    }
  }
`)
