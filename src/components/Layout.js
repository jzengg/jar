import React, { Component } from 'react'

import Header from './Header'
import Footer from './Footer'

import styled from 'react-emotion'

const Section = styled.section`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: #e5e1db;
`

const Article = styled.article`
  margin: 0 auto;
  max-width: 1200px;
  width: 100%;
  padding: 1.2rem;
  flex-grow: 1;
`

class Layout extends Component {

  render() {
    return (
      <main>
        <Section>
          <Header/>
          <Article>
            {this.props.children}
          </Article>
          <Footer />
        </Section>
      </main>
    )
  }

}

export default Layout
