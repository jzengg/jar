import React from 'react';
import { createFragmentContainer, graphql } from 'react-relay'

import Jar from './Jar'

import styled from 'react-emotion'

const JarListContainer = styled.ul`
  display: flex;
`


class JarList extends React.Component {

  render () {
    let jars = this.props.user.jars.edges
    return (
      <JarListContainer>
        {
          jars.map(( {node} ) =>
          <Jar
            key={node.__id}
            jar={node}
            active={this.props.selectedJarId === node.__id }
            handleClick={this.props.handleClick}
          />

        )
      }
    </JarListContainer>
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
