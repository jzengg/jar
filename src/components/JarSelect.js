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

    this.state = {
      isLoading: false,
      options: props.jars,
      value: props.jars[0],
    };
  }

  handleChange = (newValue) => {
    this.setState({ value: newValue })
  }

  handleCreate = (inputValue) => {
    this.setState({ isLoading: true });

      const { options } = this.state;
      const newOption = createOption(inputValue);
      this.setState({
        isLoading: false,
        options: [...options, newOption],
        value: newOption,
      })
  };

  render() {
    const { isLoading, options, value } = this.state;
    return (
      <CreatableSelect
        isDisabled={isLoading}
        isLoading={isLoading}
        onChange={this.handleChange}
        onCreateOption={this.handleCreate}
        options={options}
        value={value}
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
