import React from 'react';
import NoteList from './NoteList'
import { createFragmentContainer, graphql } from 'react-relay'


class Jar extends React.Component {

  render () {
    return (
        <li>
          {this.props.jar.name}
          <h3> notes </h3>
          <NoteList jar={this.props.jar} />
        </li>
    )
  }
}

export default createFragmentContainer(Jar, graphql`
  fragment Jar_jar on Jar {
    id
    name
    ...NoteList_jar
  }
`)
