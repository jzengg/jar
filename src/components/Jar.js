import React from 'react';
import { createFragmentContainer, graphql } from 'react-relay'


class Jar extends React.Component {

  render () {
    return (
        <li onClick={this.props.handleClick.bind(this, this.props.jar.id)}>
          {this.props.active && <span>==></span>}
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
