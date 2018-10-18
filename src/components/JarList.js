import React from 'react';
import { createFragmentContainer, graphql } from 'react-relay'

import Jar from './Jar'

class JarList extends React.Component {

  render () {
    let jars = this.props.user.jars.edges
    return (
      <ul>
        {
          jars.map(( {node} ) =>
          <Jar key={node.__id} jar={node} onClick={this.props.updateActiveJar} />

        )
      }
    </ul>
    )
  }


}

export default createFragmentContainer(JarList, graphql`
  fragment JarList_user on User {
    jars(last: 100, orderBy: createdAt_DESC)
      @connection(key: "JarList_jars", filters: []) {
      edges {
        node {
          ...Jar_jar
        }
      }
    }
  }
`)
