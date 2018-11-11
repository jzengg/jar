import React from 'react'
import CreatableSelect from 'react-select/lib/Creatable'

import CreateJarMutation from '../mutations/CreateJarMutation'


class JarSelect extends React.Component {

  constructor(props) {
    super(props)
    this.state = { isLoading: false }
  }

  handleCreate = (name) => {
    if (window.confirm(`Create a jar with the name: ${name}?`)) {
      this.setState({ isLoading: true })
      const userId = this.props.user.id

      CreateJarMutation(name, userId).then(({ jar: { id, name } }) => {
        this.setState({ isLoading: false })

        const newOption = { label: name, value: id}
        this.props.addOption(newOption)
      })
    }
  }

  render() {
    const { isLoading } = this.state;
    const { selectedJarOption, options } = this.props

    return (
      <CreatableSelect
        name='jar'
        isDisabled={isLoading}
        isLoading={isLoading}
        onChange={this.props.handleChange}
        onCreateOption={this.handleCreate}
        options={options}
        value={selectedJarOption}
      />
    );
  }
}

export default JarSelect
