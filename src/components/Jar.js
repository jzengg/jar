import React from 'react';
import { createFragmentContainer, graphql } from 'react-relay'

import { RadioContainer } from '../css/BaseForm'


class Jar extends React.Component {

  render () {
    return (
        <RadioContainer active={this.props.active} onClick={this.props.handleClick.bind(this, this.props.jar)}>
          {this.props.jar.name}
        </RadioContainer>
    )
  }
}

export default createFragmentContainer(Jar, graphql`
  fragment Jar_jar on Jar {
    id
    name
    description
  }
`)
