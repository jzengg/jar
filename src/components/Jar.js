import React from 'react';
import { createFragmentContainer, graphql } from 'react-relay'


class Jar extends React.Component {

  render () {
    return (
        <li>
          {this.props.jar.name}
        </li>
    )
  }
}

export default createFragmentContainer(Jar, graphql`
  fragment Jar_jar on Jar {
    id
    name
  }
`)
