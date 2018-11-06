import React from 'react';
import { createFragmentContainer, graphql } from 'react-relay'

import { RadioContainer } from '../css/BaseForm'


class Friend extends React.Component {

  render () {
    const friend = this.props.friend
    return (
      <RadioContainer
        onClick={this.props.handleClick.bind(this, friend.id)}
        active={this.props.active}
        >
        {friend.email}
      </RadioContainer>
    )
  }
}

export default createFragmentContainer(Friend, graphql`
  fragment Friend_friend on User {
    id
    email
    jars {
      edges {
        node {
          id
          name
        }
      }
    }
  }
`)
