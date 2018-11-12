import React from 'react'
import { css } from 'react-emotion'

import CreateJarMutation from '../mutations/CreateJarMutation'

import { WideInput, WideLabel } from '../css/BaseForm'



const handleCreate = (name) => {
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

export default class CreateJar extends React.Component {
  state = {
    name: '',
    description: ''
  }

  render() {
    return(
      <React.Fragment>
        <WideInput />
      </React.Fragment>
    )
  }
}
