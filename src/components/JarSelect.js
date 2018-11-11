import React from 'react'
import { createFragmentContainer, graphql } from 'react-relay'
import CreatableSelect from 'react-select/lib/Creatable'

import CreateJarMutation from '../mutations/CreateJarMutation'


class JarSelect extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = { isLoading: false }
  }

  handleCreate = (name) => {
    this.setState({ isLoading: true })
    const userId = this.props.user.id

    CreateJarMutation(name, userId).then(({ jar: { id, name } }) => {
      this.setState({ isLoading: false })

      const newOption = { label: name, value: id}
      this.props.handleChange(newOption)
    })
  };

  render() {
    const { isLoading } = this.state;
    const jars = this.props.user.jars.edges
    const options = jars.map(({ node }) => ({ label: node.name, value: node.id }))
    const value = this.props.selectedJarOption

    return (
      <CreatableSelect
        name='jar'
        isDisabled={isLoading}
        isLoading={isLoading}
        onChange={this.props.handleChange}
        onCreateOption={this.handleCreate}
        options={options}
        value={value}
      />
    );
  }
}

export default createFragmentContainer(JarSelect, graphql`
  fragment JarSelect_user on User {
    id
    jars(last: 100, orderBy: createdAt_DESC)
      @connection(key: "JarSelect_jars", filters: []) {
      edges {
        node {
          id
          name
        }
      }
    }
  }
`)
