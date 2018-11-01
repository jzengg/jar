import React, { Component } from 'react'

import Header from './Header'

import styled from 'react-emotion'

const Main = styled.main `
  max-width: 1200px;
  margin: 0 auto;
  padding: 1.2rem;
`

const Section = styled.section`
  display: flex;
  justify-content: center;
`

const Column = styled.article`
  flex: 1;
  box-sizing: border-box;
  width: 100%;
`

class Layout extends Component {

  render() {
    return (
      <Main>
        <Section>
          <Column>
            <Header/>
            {this.props.children}
          </Column>
      </Section>
    </Main>
    )
  }

}

export default Layout
