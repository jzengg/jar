import React from 'react'
import { createFragmentContainer, graphql } from 'react-relay'
import CreatableSelect from 'react-select/lib/Creatable'

const createOption = (label) => ({
  label,
  value: label.toLowerCase().replace(/\W/g, ''),
});


class JarSelect extends React.Component {
  constructor(props) {
    super(props)

    const jars = props.user.jars.edges
    const options = jars.map(({ node }) => ({ label: node.name, value: node.id }))

    this.state = {
      isLoading: false,
      options
    }

  }
  //
  // handleCreate = (inputValue) => {
  //   this.setState({ isLoading: true })
  //
  //   const { options } = this.state;
  //   const newOption = createOption(inputValue)
  //   this.setState({
  //     isLoading: false,
  //     options: [...options, newOption],
  //     value: newOption,
  //   })
  // };

  render() {
    const { isLoading, options } = this.state;
    return (
      <CreatableSelect
        name='test'
        isDisabled={isLoading}
        isLoading={isLoading}
        onChange={this.props.handleChange}
        // onCreateOption={this.handleCreate}
        options={options}
        value={this.props.selectedJar}
      />
    );
  }
}

export default createFragmentContainer(JarSelect, graphql`
  fragment JarSelect_user on User {
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
