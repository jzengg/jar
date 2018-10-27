import React, { Component } from 'react'

import Header from './Header'

import styled from 'react-emotion'

const Container = styled.div `
  max-width: 900px;
  padding: 2rem;
`

class Layout extends Component {

  render() {
    return (
      <Container>
        <Header />
        {this.props.children}
      </Container>
    )
  }

}

export default Layout
