import React from 'react';
import { createFragmentContainer, graphql } from 'react-relay'

class Friend extends React.Component {

  render () {
    const friend = this.props.friend
    return (
        <li>
          <div>
            email: {friend.email}
          </div>
        </li>
    )
  }
}

export default createFragmentContainer(Friend, graphql`
  fragment Friend_friend on User {
    id
    email
  }
`)
