import React from 'react';
import { createFragmentContainer, graphql } from 'react-relay'

import { GC_USER_ID } from '../constants'

import Jar from './Jar'

class JarList extends React.Component {

  render () {
    console.log(this.props)
    let jars = this.props.user.jars.edges
    return (
      <ul>
        {
          jars.map(( {node} ) =>
          <Jar key={node.__id} jar={node} />

        )
      }
    </ul>
  )

//   _createLink = () => {
//   const postedById = localStorage.getItem(GC_USER_ID)
//   if (!postedById) {
//     console.error('No user logged in')
//     return
//   }
//   const { description, url } = this.state
//   CreateLinkMutation(postedById, description, url, () => this.props.history.push('/'))
// }
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
