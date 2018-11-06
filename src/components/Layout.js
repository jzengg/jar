import React, { Component } from 'react'

import Header from './Header'

import styled from 'react-emotion'

const Section = styled.section`
  padding: 1.2rem;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
`

const Column = styled.article`
  flex: 1;
  width: 100%;
`

class Layout extends Component {

  render() {
    return (
      <main>
        <Header/>
        <Section>
          <Column>
            {this.props.children}
          </Column>
        </Section>
      </main>
    )
  }

}

export default Layout
